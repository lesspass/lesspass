use crate::error::{PassForgeError, Result};
use std::sync::Mutex;
use std::time::{Duration, Instant};
use zeroize::Zeroize;

#[derive(Default)]
pub struct SessionState {
    inner: Mutex<SessionInner>,
}

#[derive(Default)]
struct SessionInner {
    master_password: Vec<u8>,
    unlocked_at: Option<Instant>,
    idle_timeout: Duration,
}

impl SessionState {
    pub fn unlock(&self, master_password: Vec<u8>) -> Result<()> {
        let mut inner = self.inner.lock().expect("session mutex poisoned");
        inner.master_password.zeroize();
        inner.master_password = master_password;
        inner.unlocked_at = Some(Instant::now());
        if inner.idle_timeout.is_zero() {
            inner.idle_timeout = Duration::from_secs(60);
        }
        Ok(())
    }

    pub fn lock(&self) -> Result<()> {
        let mut inner = self.inner.lock().expect("session mutex poisoned");
        inner.master_password.zeroize();
        inner.master_password.clear();
        inner.unlocked_at = None;
        Ok(())
    }

    pub fn is_locked(&self) -> bool {
        let inner = self.inner.lock().expect("session mutex poisoned");
        inner.master_password.is_empty() || inner.unlocked_at.is_none()
    }

    pub fn master_password_bytes(&self) -> Result<Vec<u8>> {
        let inner = self.inner.lock().expect("session mutex poisoned");
        if inner.master_password.is_empty() {
            return Err(PassForgeError::Locked);
        }
        Ok(inner.master_password.clone())
    }

    pub fn set_idle_timeout(&self, seconds: u64) {
        let mut inner = self.inner.lock().expect("session mutex poisoned");
        inner.idle_timeout = Duration::from_secs(seconds);
    }

    pub fn lock_if_idle(&self) -> Result<bool> {
        let should_lock = {
            let inner = self.inner.lock().expect("session mutex poisoned");
            inner
                .unlocked_at
                .map(|at| at.elapsed() >= inner.idle_timeout)
                .unwrap_or(false)
        };
        if should_lock {
            self.lock()?;
        }
        Ok(should_lock)
    }
}
