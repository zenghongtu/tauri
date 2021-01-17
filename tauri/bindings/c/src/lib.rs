use std::ffi::{CStr, CString};
use std::os::raw::c_char;

pub struct App {}

#[no_mangle]
pub extern "C" fn new_app() -> *mut App {
    Box::into_raw(Box::new(App {}))
}

#[no_mangle]
pub extern "C" fn run_app(app: *mut App) {
    let app = unsafe {
        assert!(!app.is_null());
        &(*app)
    };

    tauri::AppBuilder::new().build().run();
}