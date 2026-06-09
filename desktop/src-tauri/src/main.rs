mod db;
mod error;
mod keychain;
mod models;
mod session;

fn main() {
    let builder = tauri::Builder::default().manage(session::SessionState::default());
    #[cfg(mobile)]
    let builder = builder.plugin(tauri_plugin_biometric::init());

    builder
        .run(tauri::generate_context!())
        .expect("failed to run PassForge");
}
