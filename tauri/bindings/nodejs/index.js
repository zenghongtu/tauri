const ffi = require('ffi-napi')
const ref = require('ref-napi')

const app_t = ref.refType('void');

const tauri = ffi.Library('../c/target/release/libtauri', {
  new_app: [app_t, []],
  run_app: ['void', [app_t]]
})

class App {
  constructor() {
    this.ptr = tauri.new_app()
  }

  run() {
    tauri.run_app(this.ptr)
  }
}

module.exports = {
  App
}
