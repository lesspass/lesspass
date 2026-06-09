#[path = "../src/error.rs"]
mod error;
#[path = "../src/session.rs"]
mod session;

use session::SessionState;

#[test]
fn locked_session_cannot_expose_master_password() {
    let session = SessionState::default();

    assert!(session.master_password_bytes().is_err());
    assert!(session.is_locked());
}

#[test]
fn unlock_then_lock_zeroizes_session() {
    let session = SessionState::default();

    session
        .unlock("correct horse battery staple".as_bytes().to_vec())
        .unwrap();
    assert_eq!(
        session.master_password_bytes().unwrap(),
        b"correct horse battery staple"
    );
    session.lock().unwrap();

    assert!(session.master_password_bytes().is_err());
    assert!(session.is_locked());
}
