package com.lesspass;

import java.util.Map;
import java.math.BigInteger;
import java.security.Security;
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;

import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.Mac;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;


public class Crypto {
    public String pbkdf2(String secret, String salt, int iterations, int keyLength) {
        try
        {
            char[] secretData = secret.toCharArray();
            byte[] saltData = salt.getBytes(StandardCharsets.UTF_8);
            PBEKeySpec keySpec = new PBEKeySpec(secretData, saltData, iterations, keyLength * 8);
            SecretKeyFactory secretKeyFactory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
            return toHex(secretKeyFactory.generateSecret(keySpec).getEncoded());
        } 
        catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    public String hmac(String key) {
        try
        {
            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secret_key = new SecretKeySpec(key.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            sha256_HMAC.init(secret_key);
            return  toHex(sha256_HMAC.doFinal("".getBytes(StandardCharsets.UTF_8)));
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

