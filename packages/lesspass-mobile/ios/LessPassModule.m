#import "LessPassModule.h"
#import <CommonCrypto/CommonHMAC.h>
#import <CommonCrypto/CommonCrypto.h>

@implementation LessPassModule

RCT_EXPORT_MODULE(LessPass);

RCT_EXPORT_METHOD(createFingerprint:(NSString *)key
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *data = @"";
    const char *cKey  = [key cStringUsingEncoding:NSUTF8StringEncoding];
    const char *cData = [data cStringUsingEncoding:NSUTF8StringEncoding];
    unsigned char cHMAC[CC_SHA256_DIGEST_LENGTH];
    
    CCHmac(kCCHmacAlgSHA256, cKey, strlen(cKey), cData, strlen(cData), cHMAC);
    
    NSMutableString *hash = [NSMutableString stringWithCapacity:CC_SHA256_DIGEST_LENGTH * 2];
    for (NSUInteger i = 0; i < CC_SHA256_DIGEST_LENGTH; i++) {
        [hash appendFormat:@"%02x", cHMAC[i]];
    }
    
    resolve(hash);
}

RCT_EXPORT_METHOD(calcEntropy:(NSString *)site
                    withLogin:(NSString *)login
           withMasterPassword:(NSString *)masterPassword
                 withCounter:(NSString *)counter
                     resolver:(RCTPromiseResolveBlock)resolve
                     rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *salt = [NSString stringWithFormat:@"%@%@%@", site, login, counter];
    NSData *keyData = [self pbkdf2WithPassword:masterPassword salt:salt keyByteCount:32 rounds:100000];
    
    if (keyData) {
        NSString *hexKey = [self hexStringFromData:keyData];
        resolve(hexKey);
    } else {
        reject(@"calcEntropy_error", @"Error computing entropy", nil);
    }
}

- (NSData *)pbkdf2WithPassword:(NSString *)password
                           salt:(NSString *)salt
                  keyByteCount:(NSUInteger)keyByteCount
                        rounds:(NSUInteger)rounds {
    NSData *saltData = [salt dataUsingEncoding:NSUTF8StringEncoding];
    NSMutableData *derivedKeyData = [NSMutableData dataWithLength:keyByteCount];
    
    int result = CCKeyDerivationPBKDF(kCCPBKDF2,
                                       [password UTF8String],
                                       [password lengthOfBytesUsingEncoding:NSUTF8StringEncoding],
                                       [saltData bytes],
                                       [saltData length],
                                       kCCPRFHmacAlgSHA256,
                                       (uint)rounds,
                                       [derivedKeyData mutableBytes],
                                       [derivedKeyData length]);
    
    if (result != kCCSuccess) {
        return nil;
    }
    
    return derivedKeyData;
}

- (NSString *)hexStringFromData:(NSData *)data {
    const unsigned char *dataBuffer = (const unsigned char *)[data bytes];
    if (!dataBuffer) {
        return [NSString string];
    }
    NSUInteger dataLength  = [data length];
    NSMutableString *hexString  = [NSMutableString stringWithCapacity:(dataLength * 2)];
    for (int i = 0; i < dataLength; ++i) {
        [hexString appendString:[NSString stringWithFormat:@"%02lx", (unsigned long)dataBuffer[i]]];
    }
    return [NSString stringWithString:hexString];
}

@end