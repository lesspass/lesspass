package com.lesspass;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;


import java.math.BigInteger;
import java.nio.charset.StandardCharsets;

public class LessPassModule extends ReactContextBaseJavaModule {

    public LessPassModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "LessPass";
    }

    @ReactMethod
    public void calcEntropy(String site, String login, String masterPassword, String counter, Promise promise) {
        String salt = site + login + counter;
        String result = new Crypto().pbkdf2(masterPassword, salt, 100000, 32);
        promise.resolve(result);
    }

    @ReactMethod
    public void createFingerprint(String masterPassword, Promise promise) {
        String result = new Crypto().hmac(masterPassword);
        promise.resolve(result);
    }
}