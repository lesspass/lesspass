import Foundation

enum HMACAlgorithm {
    case MD5, SHA1, SHA224, SHA256, SHA384, SHA512

    func toCCHmacAlgorithm() -> CCHmacAlgorithm {
        var result: Int = 0
        switch self {
        case .MD5:
            result = kCCHmacAlgMD5
        case .SHA1:
            result = kCCHmacAlgSHA1
        case .SHA224:
            result = kCCHmacAlgSHA224
        case .SHA256:
            result = kCCHmacAlgSHA256
        case .SHA384:
            result = kCCHmacAlgSHA384
        case .SHA512:
            result = kCCHmacAlgSHA512
        }
        return CCHmacAlgorithm(result)
    }

    func digestLength() -> Int {
        var result: CInt = 0
        switch self {
        case .MD5:
            result = CC_MD5_DIGEST_LENGTH
        case .SHA1:
            result = CC_SHA1_DIGEST_LENGTH
        case .SHA224:
            result = CC_SHA224_DIGEST_LENGTH
        case .SHA256:
            result = CC_SHA256_DIGEST_LENGTH
        case .SHA384:
            result = CC_SHA384_DIGEST_LENGTH
        case .SHA512:
            result = CC_SHA512_DIGEST_LENGTH
        }
        return Int(result)
    }
}

extension String {
    func hmac(algorithm: HMACAlgorithm, key: String) -> String {
      let cKey = key.cString(using: String.Encoding.utf8)
      let cData = self.cString(using: String.Encoding.utf8)
      var result = [CUnsignedChar](repeating: 0, count: Int(algorithm.digestLength()))
      CCHmac(algorithm.toCCHmacAlgorithm(), cKey!, Int(strlen(cKey!)), cData!, Int(strlen(cData!)), &result)
      let hmacData:NSData = NSData(bytes: result, length: (Int(algorithm.digestLength())))
      var bytes = [UInt8](repeating:0, count: hmacData.length)
      hmacData.getBytes(&bytes, length: hmacData.length)
      var hexString = ""
      for byte in bytes {
          hexString += String(format:"%02hhx", UInt8(byte))
      }
      return hexString
    }
}

extension Data {
    struct HexEncodingOptions: OptionSet {
        let rawValue: Int
        static let upperCase = HexEncodingOptions(rawValue: 1 << 0)
    }

    func hexEncodedString(options: HexEncodingOptions = []) -> String {
        let hexDigits = Array((options.contains(.upperCase) ? "0123456789ABCDEF" : "0123456789abcdef").utf16)
        var chars: [unichar] = []
        chars.reserveCapacity(2 * count)
        for byte in self {
            chars.append(hexDigits[Int(byte / 16)])
            chars.append(hexDigits[Int(byte % 16)])
        }
        return String(utf16CodeUnits: chars, count: chars.count)
    }
}

func pbkdf2(hash: CCPBKDFAlgorithm, password: String, salt: String, keyByteCount: Int, rounds: Int) -> String? {
 
      guard let passwordData = password.data(using: .utf8), let saltData = salt.data(using: .utf8) else { return nil }
  
    var derivedKeyData = Data(repeating: 0, count: keyByteCount)
    let derivedCount = derivedKeyData.count
    let derivationStatus: Int32 = derivedKeyData.withUnsafeMutableBytes { derivedKeyBytes in
        let keyBuffer: UnsafeMutablePointer<UInt8> =
            derivedKeyBytes.baseAddress!.assumingMemoryBound(to: UInt8.self)
        return saltData.withUnsafeBytes { saltBytes -> Int32 in
            let saltBuffer: UnsafePointer<UInt8> = saltBytes.baseAddress!.assumingMemoryBound(to: UInt8.self)
            return CCKeyDerivationPBKDF(
                CCPBKDFAlgorithm(kCCPBKDF2),
                password,
                passwordData.count,
                saltBuffer,
                saltData.count,
                hash,
                UInt32(rounds),
                keyBuffer,
                derivedCount)
        }
    }
  return derivationStatus == kCCSuccess ? derivedKeyData.hexEncodedString() : nil
}

@objc(LessPassModule)
class LessPassModule: NSObject {
  @objc(createFingerprint:resolver:rejecter:)
  func createFingerprint(_ masterPassword: String,
                         resolver resolve: RCTPromiseResolveBlock,
                         rejecter reject:RCTPromiseRejectBlock) -> Void {
    resolve("".hmac(algorithm: HMACAlgorithm.SHA256, key: masterPassword))
  }
  
  @objc(calcEntropy:withLogin:withMasterPassword:withCounter:resolver:rejecter:)
  func calcEntropy(_ site: String,
                   withLogin login: String,
                   withMasterPassword masterPassword: String,
                   withCounter counter: String,
                   resolver resolve: RCTPromiseResolveBlock,
                   rejecter reject:RCTPromiseRejectBlock) -> Void {
    let salt = site + login + counter
    let r = pbkdf2(hash: CCPBKDFAlgorithm(kCCPRFHmacAlgSHA256), password: masterPassword, salt: salt, keyByteCount: 32, rounds: 100000)
    resolve(r)
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
