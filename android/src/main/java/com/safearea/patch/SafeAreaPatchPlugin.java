package com.safearea.patch;
import android.content.res.Configuration;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;


import androidx.activity.ComponentActivity;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.WindowInsetsControllerCompat;

import android.app.Activity;
import android.content.res.Configuration;
import android.view.Window;
import android.view.WindowManager;

import androidx.activity.EdgeToEdge;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SafeAreaPatch")
public class SafeAreaPatchPlugin extends Plugin {

    private SafeAreaPatch implementation = new SafeAreaPatch();

    // @PluginMethod
    // public void echo(PluginCall call) {
    //     String value = call.getString("value");

    //     JSObject ret = new JSObject();
    //     ret.put("value", implementation.echo(value));
    //     call.resolve(ret);
    // }


  @PluginMethod
  public void patchInsets(PluginCall call) {
    Activity activity = bridge.getActivity();
    if (activity == null) {
      call.reject("Activity is null");
      return;
    }

    activity.runOnUiThread(() -> {
        Log.d("SafeAreaPatch", "Reconstructing insets");
      attachInsetsListener(activity);
      call.resolve();
    });

  }

  private void attachInsetsListener(Activity activity) {
    if (activity == null){
      return;
    }
    View view = activity.findViewById(android.R.id.content);
    WindowInsetsCompat windowInsets_ = ViewCompat.getRootWindowInsets(view);
    if (windowInsets_ == null) {
      return;
    }

    Insets gestureInsets = windowInsets_.getInsets(WindowInsetsCompat.Type.systemGestures());
    Insets systemInsets = windowInsets_.getInsets(WindowInsetsCompat.Type.systemBars());
    Insets imeInsets = windowInsets_.getInsets(WindowInsetsCompat.Type.ime());

    float density = activity.getResources().getDisplayMetrics().density;

    int topInset = (int) (systemInsets.top / density);
    int bottomInset = (int) (gestureInsets.bottom / density);


    Log.d("SafeAreaPatch", "topInset: "+topInset);
    Log.d("SafeAreaPatch", "bottomInset: "+bottomInset);

      // Si el teclado está visible, ignora el bottom de gestos
      int imeHeight = Math.max(0, imeInsets.bottom - systemInsets.bottom);
      if (imeHeight > 0) {
          bottomInset = 0;
      }

      setSafeAreaInsets(topInset, bottomInset);


  }

  private void setSafeAreaInsets(int top, int bottom) {
    String js =
              "console.log('[SafeAreaPatch] setSafeAreaInsets top:" + top + " bottom:" + bottom + "');" +
                      "document.documentElement.style.setProperty('--ion-safe-area-top','" + top + "px');" +
                      "document.documentElement.style.setProperty('--ion-safe-area-bottom','" + bottom + "px');";

      // Ejecuta el JS directamente en el WebView
    getBridge().getWebView().evaluateJavascript(js, null);
  }

  @Override
  public void handleOnConfigurationChanged(Configuration newConfig) {
    //No action needed
  }
}
