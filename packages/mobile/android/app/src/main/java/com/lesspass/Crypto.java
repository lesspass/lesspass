package com.lesspass;

import java.math.BigInteger;

import org.spongycastle.crypto.generators.PKCS5S2ParametersGenerator;
import org.spongycastle.crypto.digests.SHA256Digest;
import org.spongycastle.crypto.params.KeyParameter;
import org.spongycastle.crypto.macs.HMac;

public class Crypto {
    public String pbkdf2(String secret, String salt, int iterations, int keyLength) {
        try
        {
            PKCS5S2ParametersGenerator gen = new PKCS5S2ParametersGenerator(new SHA256Digest());
            byte[] secretData = secret.getBytes();
            byte[] saltData = salt.getBytes();
            gen.init(secretData, saltData, iterations);
            byte[] derivedKey = ((KeyParameter)gen.generateDerivedParameters(keyLength * 8)).getKey();    
            return toHex(derivedKey);
        } 
        catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    public String hmac(String key) {
        try
        {
            HMac hmac = new HMac(new SHA256Digest());
            KeyParameter secret_key = new KeyParameter(key.getBytes());
            hmac.init(secret_key);
            byte[] result = new byte[hmac.getMacSize()];
            hmac.doFinal(result, 0);
            return toHex(result);
        } 
        catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    private static String toHex(byte[] bytes) {
        BigInteger bi = new BigInteger(1, bytes);
        return String.format("%0" + (bytes.length << 1) + "x", bi);
    }
}

