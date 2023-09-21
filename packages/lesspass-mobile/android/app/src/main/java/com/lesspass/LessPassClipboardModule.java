package com.lesspass;

import android.content.ClipDescription;
import android.content.ClipboardManager;
import android.content.ClipData;
import android.os.PersistableBundle;
import android.content.Context;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class LessPassClipboardModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactContext;

    public LessPassClipboardModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "LessPassClipboard";
    }

    private ClipboardManager getClipboardService() {
        return (ClipboardManager) reactContext.getSystemService(Context.CLIPBOARD_SERVICE);
    }

    @ReactMethod
    public void copy(String text) {
        try {
            ClipData clipdata = ClipData.newPlainText(null, text);
            PersistableBundle extras = new PersistableBundle();
            extras.putBoolean("android.content.extra.IS_SENSITIVE", true);
            clipdata.getDescription().setExtras(extras);
            ClipboardManager clipboard = getClipboardService();
            clipboard.setPrimaryClip(clipdata);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
