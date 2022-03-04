# Changelog

## \[1.0.0-rc.4]

- Revert the `clap` usage back to the version 3.0 API.
  - [2b554c38](https://www.github.com/tauri-apps/tauri/commit/2b554c38a5181b948d7674b6ef33e4049ca7d327) fix(core): revert to clap 3.0 API, allow deprecations, closes [#3549](https://www.github.com/tauri-apps/tauri/pull/3549) ([#3552](https://www.github.com/tauri-apps/tauri/pull/3552)) on 2022-02-24
- The `tauri::api::process::Command` API now properly reads stdout and stderr messages that ends with a carriage return (`\r`) instead of just a newline (`\n`).
  - [0a0de8ab](https://www.github.com/tauri-apps/tauri/commit/0a0de8ab6ed80b7722012e83636dff41a813b770) fix: read Command output ending with a carriage return, closes [#3508](https://www.github.com/tauri-apps/tauri/pull/3508) ([#3523](https://www.github.com/tauri-apps/tauri/pull/3523)) on 2022-02-24
- Fixes `Command::output` and `Command::status` deadlock when running on async commands.
  - [0163489e](https://www.github.com/tauri-apps/tauri/commit/0163489ed60ec0fe9486b5556ec0234499852a16) fix(core): `safe_block_on` usage on async contexts, closes [#3505](https://www.github.com/tauri-apps/tauri/pull/3505) ([#3513](https://www.github.com/tauri-apps/tauri/pull/3513)) on 2022-02-24
- **Breaking change:** The `tauri::api::file::Extract` API is now available when the `fs-extract-api` feature is enabled.
  - [0f155898](https://www.github.com/tauri-apps/tauri/commit/0f1558980a0fb1d6c042988e173047f0590b6574) fix(core): docs.rs on Windows and macOS ([#3566](https://www.github.com/tauri-apps/tauri/pull/3566)) on 2022-03-02
- The HTTP scope now matches the entire URL using a glob pattern instead of only its path.
  - [944b124c](https://www.github.com/tauri-apps/tauri/commit/944b124ce04a15a415fcbb0afdfa78b0e900c97a) feat(core): enhance HTTP scope glob validation, closes [#3507](https://www.github.com/tauri-apps/tauri/pull/3507) ([#3515](https://www.github.com/tauri-apps/tauri/pull/3515)) on 2022-02-24
- Allow range in the form of `bytes=0-*` on the asset protocol.
  - [d06efc77](https://www.github.com/tauri-apps/tauri/commit/d06efc7704092a549c886be701122ad420db5543) fix(core): parse range `bytes=0-*`, closes [#3143](https://www.github.com/tauri-apps/tauri/pull/3143) ([#3516](https://www.github.com/tauri-apps/tauri/pull/3516)) on 2022-02-24
- The `cmd` field is no longer required on the shell scope for sidecars.
  - [9b3b163b](https://www.github.com/tauri-apps/tauri/commit/9b3b163baa9b8eb2ef0bbc53f6303cc7a59a01af) feat(core): simplify scope definition for sidecars ([#3574](https://www.github.com/tauri-apps/tauri/pull/3574)) on 2022-03-02

## \[1.0.0-rc.3]

- `tauri::plugin::Builder` closures are no longer required to implement `Sync`.
  - [fb7ee2c9](https://www.github.com/tauri-apps/tauri/commit/fb7ee2c987d9fca23f08bd470789069d9477c66e) drop Sync req from `setup` and `setup_with_config` ([#3471](https://www.github.com/tauri-apps/tauri/pull/3471)) on 2022-02-16
  - [b8e4d651](https://www.github.com/tauri-apps/tauri/commit/b8e4d651f9866b34bd3afcf2392812a18e1cee53) fix(core): drop all plugin builder Sync requirements ([#3490](https://www.github.com/tauri-apps/tauri/pull/3490)) on 2022-02-17
- Added context to the file system endpoint errors.
  - [06053833](https://www.github.com/tauri-apps/tauri/commit/060538331c138473159cf8fee0fcb7904ca33d3b) feat(core): add context to the filesystem APIs errors, closes [#3457](https://www.github.com/tauri-apps/tauri/pull/3457) ([#3480](https://www.github.com/tauri-apps/tauri/pull/3480)) on 2022-02-16
- Changed the default value for `tauri > bundle > macOS > minimumSystemVersion` to `10.13`.
  - [fce344b9](https://www.github.com/tauri-apps/tauri/commit/fce344b90b7227f8f5514853c2f885fb24d3648e) feat(core): set default value for `minimum_system_version` to 10.13 ([#3497](https://www.github.com/tauri-apps/tauri/pull/3497)) on 2022-02-17

## \[1.0.0-rc.2]

- Ease the requirements for plugin hooks. `setup` and `setup_with_config` can now be `FnOnce` and `on_webview_ready`, `on_event` and `on_page_load` can be `FnMut`.
  - [fd557e98](https://www.github.com/tauri-apps/tauri/commit/fd557e984db17335a7c2ff10e6fe9c07065a95ed) Ease plugin hook restrictions ([#3404](https://www.github.com/tauri-apps/tauri/pull/3404)) on 2022-02-13
- Fixes an issue with the updater when replacing the `{{target}}` and `{{current_version}}` variables due to percent-encoding on the `Url` that is parsed from the configuration.
  - [20f0477f](https://www.github.com/tauri-apps/tauri/commit/20f0477f95b836cdf03ca66dadd9c0d3c95b198a) fix(core): updater not replacing variables, closes [#3428](https://www.github.com/tauri-apps/tauri/pull/3428) ([#3432](https://www.github.com/tauri-apps/tauri/pull/3432)) on 2022-02-13

## \[1.0.0-rc.1]

- Change default value for the `freezePrototype` configuration to `false`.
  - [3a4c0160](https://www.github.com/tauri-apps/tauri/commit/3a4c01606184be762adee055ddac803de0d28527) fix(core): change default `freezePrototype` to false, closes [#3416](https://www.github.com/tauri-apps/tauri/pull/3416) [#3406](https://www.github.com/tauri-apps/tauri/pull/3406) ([#3423](https://www.github.com/tauri-apps/tauri/pull/3423)) on 2022-02-12

## \[1.0.0-rc.0]

- The dialog allowlist now includes flags for the `message`, `ask` and `confirm` APIs.
  - [d660cab3](https://www.github.com/tauri-apps/tauri/commit/d660cab38d7d703e8b2bb85a3e9462d9e28b086b) feat: enhance allowlist configuration \[TRI-027] ([#11](https://www.github.com/tauri-apps/tauri/pull/11)) on 2022-01-09
- - **Breaking change:** Renamed `tauri::Event`  to `tauri::RunEvent`
- Exported `tauri::Event` and `tauri::EventHandler` so you can define a function and pass it to `Window::listen`
- [15358b18](https://www.github.com/tauri-apps/tauri/commit/15358b1895487cb9c258a8ca4d2336b4215e2a8f) Expose event interface. fixes [#2733](https://www.github.com/tauri-apps/tauri/pull/2733) ([#3321](https://www.github.com/tauri-apps/tauri/pull/3321)) on 2022-02-04
- The `tauri::api` modules `http`, `notification`, `dialog`, and `process::Command` APIs are now hidden behind a feature flag, `http-api`, `notification`, `dialog` and `command`, respectively.
  - [6feb5a0c](https://www.github.com/tauri-apps/tauri/commit/6feb5a0c50852a4792a9cc80967eab0fcf18609e) refactor(core): api feature flags, documentation ([#26](https://www.github.com/tauri-apps/tauri/pull/26)) on 2022-01-09
- Add `title` option to file open/save dialogs.
  - [e1d6a6e6](https://www.github.com/tauri-apps/tauri/commit/e1d6a6e6445637723e2331ca799a662e720e15a8) Create api-file-dialog-title.md ([#3235](https://www.github.com/tauri-apps/tauri/pull/3235)) on 2022-01-16
  - [62c7a8ad](https://www.github.com/tauri-apps/tauri/commit/62c7a8ad30fd3031b8679960590e5ef3eef8e4da) chore(covector): prepare for `rc` release ([#3376](https://www.github.com/tauri-apps/tauri/pull/3376)) on 2022-02-10
- Added `any_thread()` to the `tauri::Builder` to run applications on any thread (only exposed on Linux and Windows).
  - [af44bf81](https://www.github.com/tauri-apps/tauri/commit/af44bf8168310cf77fbe102a53e7c433f11641a3) feat(core): allow app run on any thread on Linux & Windows, closes [#3172](https://www.github.com/tauri-apps/tauri/pull/3172) ([#3353](https://www.github.com/tauri-apps/tauri/pull/3353)) on 2022-02-07
- Enable CORS on the `asset` protocol.
  - [d28ac8aa](https://www.github.com/tauri-apps/tauri/commit/d28ac8aac0d19a70bb658f12e56330ec8ac4dda5) fix(core): enable CORS on the `asset` protocol, closes [#2965](https://www.github.com/tauri-apps/tauri/pull/2965) ([#2974](https://www.github.com/tauri-apps/tauri/pull/2974)) on 2021-12-09
- The `asset://` custom protocol is only defined when either the `api-all`, `protocol-all` or `protocol-asset` feature flags are enabled. These feature flags are accessible with the `tauri.conf.json` allowlist.
  - [7920ff14](https://www.github.com/tauri-apps/tauri/commit/7920ff14e6424079c48ea5645d9aa13e7a272b87) feat: scope the `fs` API and the `asset` protocol \[TRI-026] \[TRI-010] \[TRI-011] ([#10](https://www.github.com/tauri-apps/tauri/pull/10)) on 2022-01-09
- Expose the `asset_resolver` API on the `App` and `AppHandle` structs.
  - [7c6c7adc](https://www.github.com/tauri-apps/tauri/commit/7c6c7adcc4c1ddd7406dd2d3b31541d5b962b385) feat(core): add `asset_resolver` API ([#2879](https://www.github.com/tauri-apps/tauri/pull/2879)) on 2021-11-12
- **Breaking change:** Refactored the types returned from the `async_runtime` module.
  - [a3537078](https://www.github.com/tauri-apps/tauri/commit/a3537078ddeaac7d26250f111f071072cf328b0b) feat(core): allow running along another tokio runtime, closes [#2838](https://www.github.com/tauri-apps/tauri/pull/2838) ([#2973](https://www.github.com/tauri-apps/tauri/pull/2973)) on 2021-12-08
- Added `tauri::async_runtime::set` method, allowing to share your tokio runtime with Tauri.
  - [a3537078](https://www.github.com/tauri-apps/tauri/commit/a3537078ddeaac7d26250f111f071072cf328b0b) feat(core): allow running along another tokio runtime, closes [#2838](https://www.github.com/tauri-apps/tauri/pull/2838) ([#2973](https://www.github.com/tauri-apps/tauri/pull/2973)) on 2021-12-08
- Added `tauri::async_runtime::spawn_blocking` API.
  - [a3537078](https://www.github.com/tauri-apps/tauri/commit/a3537078ddeaac7d26250f111f071072cf328b0b) feat(core): allow running along another tokio runtime, closes [#2838](https://www.github.com/tauri-apps/tauri/pull/2838) ([#2973](https://www.github.com/tauri-apps/tauri/pull/2973)) on 2021-12-08
- The `callback` and `error` invoke fields, along with other `transformCallback` usages, are now validated to be numeric.
  - [a48b8b18](https://www.github.com/tauri-apps/tauri/commit/a48b8b18d428bcc404d489daa690bbefe1f57311) feat(core): validate callbacks and event names \[TRI-038] \[TRI-020] ([#21](https://www.github.com/tauri-apps/tauri/pull/21)) on 2022-01-09
- Change `Error::ParseCliArguments(clap::Error)` to `Error::ParseCliArguments(String)` because `clap::Error` is not `Send`.
  - [1f988535](https://www.github.com/tauri-apps/tauri/commit/1f98853573a837dd0cfc2161b206a5033ec2da5e) chore(deps) Update Tauri Core ([#2480](https://www.github.com/tauri-apps/tauri/pull/2480)) on 2021-08-24
- The `api::process::Command` APIs are now hidden behind the `command` feature flag.
  - [eed01728](https://www.github.com/tauri-apps/tauri/commit/eed017287fed2ade689af4268e8b63b9c9f2e585) feat(core): add `shell > sidecar` allowlist and `process` feature flag \[TRI-037] ([#18](https://www.github.com/tauri-apps/tauri/pull/18)) on 2021-10-24
- Add `tauri::api::path::log_dir` function to access the sugested log directory path.
  - [acbb3ae7](https://www.github.com/tauri-apps/tauri/commit/acbb3ae7bb0165846b9456aea103269f027fc548) feat: add Log directory ([#2736](https://www.github.com/tauri-apps/tauri/pull/2736)) on 2021-10-16
  - [62c7a8ad](https://www.github.com/tauri-apps/tauri/commit/62c7a8ad30fd3031b8679960590e5ef3eef8e4da) chore(covector): prepare for `rc` release ([#3376](https://www.github.com/tauri-apps/tauri/pull/3376)) on 2022-02-10
- The `process`, `path` and `updater` APIs now takes a `tauri::Env` argument, used to force environment variables load on startup to prevent env var update attacks.
  - [7209fdf7](https://www.github.com/tauri-apps/tauri/commit/7209fdf732ffe1893aaa9cd970ab6491a883d997) refactor(core): load APPIMAGE and APPDIR env vars on startup \[TRI-007] \[TRI-041] on 2022-01-09
- Now `resolve()`, `join()` and `normalize()` from the `path` module, won't throw errors if the path doesn't exist, which matches NodeJS behavior.
  - [fe381a0b](https://www.github.com/tauri-apps/tauri/commit/fe381a0bde86ebf4014007f6e21af4c1a9e58cef) fix: `join` no longer cares if path doesn't exist, closes [#2499](https://www.github.com/tauri-apps/tauri/pull/2499) ([#2548](https://www.github.com/tauri-apps/tauri/pull/2548)) on 2021-09-21
- **Breaking change:** Return `Window` on `App` and `AppHandle`'s `create_window` function.
  - [e15a8af8](https://www.github.com/tauri-apps/tauri/commit/e15a8af8434805da9716f3f840daa4e87b18b0a2) refactor(core): return `Window` on `create_window` API ([#3211](https://www.github.com/tauri-apps/tauri/pull/3211)) on 2022-01-13
  - [62c7a8ad](https://www.github.com/tauri-apps/tauri/commit/62c7a8ad30fd3031b8679960590e5ef3eef8e4da) chore(covector): prepare for `rc` release ([#3376](https://www.github.com/tauri-apps/tauri/pull/3376)) on 2022-02-10
- Apply `nonce` to `script` and `style` tags and set them on the `CSP` (`script-src` and `style-src` fetch directives).
  - [cf54dcf9](https://www.github.com/tauri-apps/tauri/commit/cf54dcf9c81730e42c9171daa9c8aa474c95b522) feat: improve `CSP` security with nonces and hashes, add `devCsp` \[TRI-004] ([#8](https://www.github.com/tauri-apps/tauri/pull/8)) on 2022-01-09
- The path returned from `tauri::api::process::current_binary` is now cached when loading the binary.
  - [7c3db7a3](https://www.github.com/tauri-apps/tauri/commit/7c3db7a3811fd4de3e71c78cfd00894fa51ab786) cache current binary path much sooner ([#45](https://www.github.com/tauri-apps/tauri/pull/45)) on 2022-02-01
- Added an API to use a custom invoke system to receive and respond to commands (`Builder#invoke_system`).
  - [15164d93](https://www.github.com/tauri-apps/tauri/commit/15164d930a64807054057d83a2b6dae8540bcd9a) feat(core): allow defining a custom invoke system ([#2899](https://www.github.com/tauri-apps/tauri/pull/2899)) on 2021-11-16
- Inject configured `CSP` on `data:` URLs.
  - [8259cd64](https://www.github.com/tauri-apps/tauri/commit/8259cd64c2087b23b694a78aa98c43866762faec) feat(core): inject `CSP` on data URLs \[TRI-049] ([#16](https://www.github.com/tauri-apps/tauri/pull/16)) on 2022-01-09
- Emit `tauri://*` events to Rust listeners.
  - [4c4ab1eb](https://www.github.com/tauri-apps/tauri/commit/4c4ab1eb8b0b8b98ded402d0afb9dbca7ffe08e8) fix(core): trigger `tauri://*` events to Rust listeners, closes [#2901](https://www.github.com/tauri-apps/tauri/pull/2901) ([#2902](https://www.github.com/tauri-apps/tauri/pull/2902)) on 2021-11-16
- Emit `tauri://window-created` event for windows created on the backend.
  - [1dbd887a](https://www.github.com/tauri-apps/tauri/commit/1dbd887a6e0fc77b56e1b4d1b96dae8ddea1d5ea) fix(core): emit tauri://window-created event for windows created on Rust ([#3299](https://www.github.com/tauri-apps/tauri/pull/3299)) on 2022-02-04
- Enable non-session cookie persistence on Linux.
  - [d7c02a30](https://www.github.com/tauri-apps/tauri/commit/d7c02a30a56de79100804969138b379e703f0e07) feat(core): persist non-session cookies on Linux ([#3052](https://www.github.com/tauri-apps/tauri/pull/3052)) on 2021-12-09
- Expose `tauri::api::ipc::{serialize_js_with, serialize_js}` functions.
  - [5a94200f](https://www.github.com/tauri-apps/tauri/commit/5a94200f65feb4fddc79f0c68f8bc0a4067ad51a) feat(core): expose functions to serialize `serde::Serialize` values to JS ([#3354](https://www.github.com/tauri-apps/tauri/pull/3354)) on 2022-02-07
- Resolve `asset` protocol HTTP request instead of panicking if the file does not exist or cannot be read.
  - [03fc92c8](https://www.github.com/tauri-apps/tauri/commit/03fc92c8304efe897a09de6e82da2fea7f69ecab) fix(core): resolve request instead of panicking on asset protocol ([#3347](https://www.github.com/tauri-apps/tauri/pull/3347)) on 2022-02-06
- Avoid `async_runtime::block_on` panics when used along another tokio runtime.
  - [a3537078](https://www.github.com/tauri-apps/tauri/commit/a3537078ddeaac7d26250f111f071072cf328b0b) feat(core): allow running along another tokio runtime, closes [#2838](https://www.github.com/tauri-apps/tauri/pull/2838) ([#2973](https://www.github.com/tauri-apps/tauri/pull/2973)) on 2021-12-08
- Prevent window closing if `tauri://close-requested` is listened on the JS layer. Users must call `appWindow.close()` manually when listening to that event.
  - [74dff536](https://www.github.com/tauri-apps/tauri/commit/74dff536d4757820e68ab05301be83c0870c22ed) fix(core): emit `tauri://close-requested` to JS, closes [#2996](https://www.github.com/tauri-apps/tauri/pull/2996) ([#3041](https://www.github.com/tauri-apps/tauri/pull/3041)) on 2021-12-09
- Fixes a deadlock when creating a window from a menu event handler.
  - [9c82006b](https://www.github.com/tauri-apps/tauri/commit/9c82006b2fe166d20510183e36cee099bf96e8d9) fix(core): deadlock when creating window from menu handler, closes [#3110](https://www.github.com/tauri-apps/tauri/pull/3110) ([#3126](https://www.github.com/tauri-apps/tauri/pull/3126)) on 2021-12-28
- Fixes the dialog `defaultPath` usage on Linux.
  - [2212bd5d](https://www.github.com/tauri-apps/tauri/commit/2212bd5d75146f5a2df27cc2157a057642f626da) fix: dialog default path on Linux, closes [#3091](https://www.github.com/tauri-apps/tauri/pull/3091) ([#3123](https://www.github.com/tauri-apps/tauri/pull/3123)) on 2021-12-27
- Fixes `WindowEvent::Focus` and `WindowEvent::Blur` events not firing.
  - [3b33d67a](https://www.github.com/tauri-apps/tauri/commit/3b33d67aa4f48dcf4e32b3b8a5f45e83808efc2d) fix: re-adding focus/blur events for linux and macos (fix [#2485](https://www.github.com/tauri-apps/tauri/pull/2485)) ([#2489](https://www.github.com/tauri-apps/tauri/pull/2489)) on 2021-08-24
- Fixes `tauri://focus` and `tauri://blur` events not firing.
  - [3b33d67a](https://www.github.com/tauri-apps/tauri/commit/3b33d67aa4f48dcf4e32b3b8a5f45e83808efc2d) fix: re-adding focus/blur events for linux and macos (fix [#2485](https://www.github.com/tauri-apps/tauri/pull/2485)) ([#2489](https://www.github.com/tauri-apps/tauri/pull/2489)) on 2021-08-24
- Use webview's inner_size instead of window's value to get the correct size on macOS.
  - [4c0c780e](https://www.github.com/tauri-apps/tauri/commit/4c0c780e00d8851be38cb1c22f636d9e4ed34a23) fix(core): window's inner_size usage, closes [#2187](https://www.github.com/tauri-apps/tauri/pull/2187) ([#2690](https://www.github.com/tauri-apps/tauri/pull/2690)) on 2021-09-29
- Fixes resource directory resolution on Linux.
  - [1a28904b](https://www.github.com/tauri-apps/tauri/commit/1a28904b8ebea92e143d5dc21ebd209e9edec531) fix(core): resource path resolution on Linux, closes [#2493](https://www.github.com/tauri-apps/tauri/pull/2493) on 2021-08-22
- Fixes the menu id mapping not reflecting the current window.
  - [ac37b56e](https://www.github.com/tauri-apps/tauri/commit/ac37b56ef43c9e97039967a5fd99f0d2dccb5b5a) fix(core): menu id map not reflecting the current window menu ([#2726](https://www.github.com/tauri-apps/tauri/pull/2726)) on 2021-10-08
- `Manager::once_global` and `Window::once` allow `FnOnce` callbacks.
  - [d5400a3d](https://www.github.com/tauri-apps/tauri/commit/d5400a3d62ff2a37ccad20987dfea309725975a6) `once_global` and `once` accept FnOnce callbacks ([#3383](https://www.github.com/tauri-apps/tauri/pull/3383)) on 2022-02-10
- Properly check if document is loaded before invoking commands.
  - [000d126e](https://www.github.com/tauri-apps/tauri/commit/000d126e0e7231fb666b9ef53d6a1479dca774f7) fix(core): properly check if document is loaded, closes [#2716](https://www.github.com/tauri-apps/tauri/pull/2716) ([#2900](https://www.github.com/tauri-apps/tauri/pull/2900)) on 2021-11-16
- Initialize system tray before windows so `tray_handle` can be accessed on command handlers.
  - [dbe0d21b](https://www.github.com/tauri-apps/tauri/commit/dbe0d21b6fdc0f7d4c7b5e099cef805b60ef203e) fix(core): initialize system tray before app windows on 2021-08-31
- Reimplement `remove_system_tray` on Windows to drop the `SystemTray` to run its cleanup code.
  - [a03b8554](https://www.github.com/tauri-apps/tauri/commit/a03b85545a4b0b61a598a43eabe96e03565dcaf0) fix(core): tray not closing on Windows ([#3351](https://www.github.com/tauri-apps/tauri/pull/3351)) on 2022-02-07
- Immediately listen to `tauri://window-created` event to catch it before the application triggers it.
  - [878b8b9a](https://www.github.com/tauri-apps/tauri/commit/878b8b9a1fc825b1ea34f955e053311409a1468d) fix(core): immediately listen to window-created, closes [#3297](https://www.github.com/tauri-apps/tauri/pull/3297) ([#3298](https://www.github.com/tauri-apps/tauri/pull/3298)) on 2022-02-04
- The `tauri::Window#emit` functiow now correctly sends the event to all windows that has a registered listener.
  **Breaking change:** `Window#emit_and_trigger` and `Window#emit` now requires the payload to be cloneable.
  - [9b340552](https://www.github.com/tauri-apps/tauri/commit/9b340552643a1d8b9311219101329ce23c9271ea) fix(core): window-specific event delivery, closes [#3302](https://www.github.com/tauri-apps/tauri/pull/3302) ([#3344](https://www.github.com/tauri-apps/tauri/pull/3344)) on 2022-02-06
- Allow using a fixed version for the Webview2 runtime via the `tauri > bundle > windows > webviewFixedRuntimePath` config option.
  - [85df94f2](https://www.github.com/tauri-apps/tauri/commit/85df94f2b0d40255812b42c5e32a70c4b45392df) feat(core): config for fixed webview2 runtime version path ([#27](https://www.github.com/tauri-apps/tauri/pull/27)) on 2021-11-02
- The updater `pubkey` is now a required field for security reasons. Sign your updates with the `tauri signer` command.
  - [d95cc831](https://www.github.com/tauri-apps/tauri/commit/d95cc83105dda52df7514e30e54f3676cdb374ee) feat: enforce updater public key \[TRI-015] ([#42](https://www.github.com/tauri-apps/tauri/pull/42)) on 2022-01-09
- `tauri::api::HttpRequestBuilder::new` now returns a `Result` to validate the url.
  - [0ad1c651](https://www.github.com/tauri-apps/tauri/commit/0ad1c6515f696fadefddbf133a9561836b3d5934) feat(core): add `http` allowlist scope \[TRI-008] ([#24](https://www.github.com/tauri-apps/tauri/pull/24)) on 2021-10-29
- Added the `isolation` pattern.
  - [d5d6d2ab](https://www.github.com/tauri-apps/tauri/commit/d5d6d2abc17cd89c3a079d2ce01581193469dbc0) Isolation Pattern ([#43](https://www.github.com/tauri-apps/tauri/pull/43)) Co-authored-by: Ngo Iok Ui (Wu Yu Wei) <wusyong9104@gmail.com> Co-authored-by: Lucas Fernandes Nogueira <lucas@tauri.studio> on 2022-01-17
- Added `abort` method to `tauri::async_runtime::JoinHandle`.
  - [ad169759](https://www.github.com/tauri-apps/tauri/commit/ad16975938afc9e87747de5fdcb0f07fc2d24811) feat: Add JoinHandle::abort() ([#2877](https://www.github.com/tauri-apps/tauri/pull/2877)) on 2021-11-13
- Adds support for using JSON5 format for the `tauri.conf.json` file, along with also supporting the `.json5` extension.

Here is the logic flow that determines if JSON or JSON5 will be used to parse the config:

1. Check if `tauri.conf.json` exists
   a. Parse it with `serde_json`
   b. Parse it with `json5` if `serde_json` fails
   c. Return original `serde_json` error if all above steps failed
2. Check if `tauri.conf.json5` exists
   a. Parse it with `json5`
   b. Return error if all above steps failed
3. Return error if all above steps failed

- [995de57a](https://www.github.com/tauri-apps/tauri/commit/995de57a76cf51215277673e526d7ec32b86b564) Add seamless support for using JSON5 in the config file ([#47](https://www.github.com/tauri-apps/tauri/pull/47)) on 2022-02-03
- Allow preventing opening the default browser on a click on an `<a target="_blank">` element via `stopImmediatePropagation()`.
  - [10e3190f](https://www.github.com/tauri-apps/tauri/commit/10e3190fdd38893a720a51b7bfd06744e0306626) fix(core): do not use capture on \_blank link event handler, closes [#2791](https://www.github.com/tauri-apps/tauri/pull/2791) ([#3349](https://www.github.com/tauri-apps/tauri/pull/3349)) on 2022-02-07
- The `run_return` API is now available on Linux.
  - [8483fde9](https://www.github.com/tauri-apps/tauri/commit/8483fde975aac8833d2ce426e42fb40aeaeecba9) feat(core): expose `run_return` on Linux ([#3352](https://www.github.com/tauri-apps/tauri/pull/3352)) on 2022-02-07
- Allow window, global shortcut and clipboard APIs to be called on the main thread.
  - [2812c446](https://www.github.com/tauri-apps/tauri/commit/2812c4464b93a365ab955935d05b5cea8cb03aab) feat(core): window, shortcut and clipboard API calls on main thread ([#2659](https://www.github.com/tauri-apps/tauri/pull/2659)) on 2021-09-26
  - [d24fd8d1](https://www.github.com/tauri-apps/tauri/commit/d24fd8d10242da3da143a971d976b42ec4de6079) feat(tauri-runtime-wry): allow window creation and closing on the main thread ([#2668](https://www.github.com/tauri-apps/tauri/pull/2668)) on 2021-09-27
- Add `Menu::with_items` constructor, taking an iterator of `MenuEntry`.
  - [7cc95e10](https://www.github.com/tauri-apps/tauri/commit/7cc95e10ec66d8b155e9bb7f89cf73df56d1f107) feat(core): add `Menu::with_items`, closes [#2807](https://www.github.com/tauri-apps/tauri/pull/2807) ([#2966](https://www.github.com/tauri-apps/tauri/pull/2966)) on 2021-12-27
- The updater now expects signatures created with the latest CLI release.
  - [c2a6e8d7](https://www.github.com/tauri-apps/tauri/commit/c2a6e8d7e64284080129f09b3a0ae6cf93a87df0) chore(deps) Update Tauri Core ([#2746](https://www.github.com/tauri-apps/tauri/pull/2746)) on 2021-10-13
- Change event loop callbacks definition to allow callers to move in mutable values.
  - [bdbf905e](https://www.github.com/tauri-apps/tauri/commit/bdbf905e5d802b58693d2bd27582ce4269faf79c) Transformed event-loop callback to FnMut to allow mutable values ([#2667](https://www.github.com/tauri-apps/tauri/pull/2667)) on 2021-09-27
- Fixes `Notification.requestPermission()` deadlock.
  - [48f3768c](https://www.github.com/tauri-apps/tauri/commit/48f3768c41a2c68e2e097fcc1ef50e549c1dfb78) fix(core): `Notification.requestPermission()` deadlock regression on 2021-08-24
- Added `Window#open_devtools` API.
  - [55aa22de](https://www.github.com/tauri-apps/tauri/commit/55aa22de80c3de873e29bcffcb5b2fe236a637a6) feat(core): add `Window#open_devtools` API, closes [#1213](https://www.github.com/tauri-apps/tauri/pull/1213) ([#3350](https://www.github.com/tauri-apps/tauri/pull/3350)) on 2022-02-07
- Add a `plugin::Builder` struct to make plugin creation more convenient.
  - [9aed2996](https://www.github.com/tauri-apps/tauri/commit/9aed299621763a6e0a35d102cdf012da522dac35) feat: `plugin::Builder` closes [#2959](https://www.github.com/tauri-apps/tauri/pull/2959) ([#3005](https://www.github.com/tauri-apps/tauri/pull/3005)) on 2022-02-07
  - [62c7a8ad](https://www.github.com/tauri-apps/tauri/commit/62c7a8ad30fd3031b8679960590e5ef3eef8e4da) chore(covector): prepare for `rc` release ([#3376](https://www.github.com/tauri-apps/tauri/pull/3376)) on 2022-02-10
- Added `on_event` on the `Plugin` trait, which allows a plugin to react to the event loop.
  - [cc2f39a2](https://www.github.com/tauri-apps/tauri/commit/cc2f39a29fc8852724aa3954ff0d42a36484929b) feat(core): add `on_event` hook on the `Plugin` trait ([#2656](https://www.github.com/tauri-apps/tauri/pull/2656)) on 2021-09-26
- Prevent path traversal on the file system APIs.
  - [4d89f60d](https://www.github.com/tauri-apps/tauri/commit/4d89f60d77a2abe7f3358cec00e15ecacf5e1148) refactor(core): prevent path traversal \[TRI-012] ([#35](https://www.github.com/tauri-apps/tauri/pull/35)) on 2021-12-06
- **Breaking change:** Add `macos-private-api` feature flag, enabled via `tauri.conf.json > tauri > macOSPrivateApi`.
  - [6ac21b3c](https://www.github.com/tauri-apps/tauri/commit/6ac21b3cef7f14358df38cc69ea3d277011accaf) feat: add private api feature flag ([#7](https://www.github.com/tauri-apps/tauri/pull/7)) on 2022-01-09
- Add `raw_headers` to `tauri::api::http::ResponseData`.
  - [b7a2345b](https://www.github.com/tauri-apps/tauri/commit/b7a2345b06ca0306988b4ba3d3deadd449e65af9) feat(core): add raw headers to HTTP API, closes [#2695](https://www.github.com/tauri-apps/tauri/pull/2695) ([#3053](https://www.github.com/tauri-apps/tauri/pull/3053)) on 2022-01-07
- Implement `raw_window_handle::RawWindowHandle` for `tauri::Window` on `Windows` and `macOS`. The `tauri::api::dialog::window_parent` function was removed since now you can use the window directly.
  - [e98c1af4](https://www.github.com/tauri-apps/tauri/commit/e98c1af44279a5ff6c8a6f0a506ecc219c9f77af) feat(core): expose message dialog APIs, fix window.confirm, implement HasRawWindowHandle for Window, closes [#2535](https://www.github.com/tauri-apps/tauri/pull/2535) ([#2700](https://www.github.com/tauri-apps/tauri/pull/2700)) on 2021-10-02
- Refactor `create_tao_window` API to return `Weak<Window>` instead of `Arc<Window>`.
  - [c1494b35](https://www.github.com/tauri-apps/tauri/commit/c1494b353233c6a9552d7ace962fdf8d5b1f199a) refactor: return Weak<Window> on create_tao_window on 2021-08-31
- Added the `tauri::api::dialog::blocking` module.
  - [4818531a](https://www.github.com/tauri-apps/tauri/commit/4818531aba47e126af91253d5d0eae3972b27d4c) refactor(core): add blocking dialog APIs, improve docs, closes [#3255](https://www.github.com/tauri-apps/tauri/pull/3255) ([#3270](https://www.github.com/tauri-apps/tauri/pull/3270)) on 2022-02-05
- The notification endpoint now checks for the permission flag and requests if the value is not set.
  - [239bba56](https://www.github.com/tauri-apps/tauri/commit/239bba56666c96acce24f30851f2d0719c95fc2c) refactor(core): check notification permission on the Rust endpoint \[TRI-017] ([#23](https://www.github.com/tauri-apps/tauri/pull/23)) on 2022-01-09
- **Breaking change:** The `WindowEvent::CloseRequested` variant now includes `label` and `signal_tx` fields to allow preventing closing the window.
  - [74dff536](https://www.github.com/tauri-apps/tauri/commit/74dff536d4757820e68ab05301be83c0870c22ed) fix(core): emit `tauri://close-requested` to JS, closes [#2996](https://www.github.com/tauri-apps/tauri/pull/2996) ([#3041](https://www.github.com/tauri-apps/tauri/pull/3041)) on 2021-12-09
- **Breaking change:** Move `__currentWindow` and `__windows` values from `window.__TAURI__` to `window.__TAURI_METADATA__`.
  - [f5109e0c](https://www.github.com/tauri-apps/tauri/commit/f5109e0c962e3d25404995194968bade1be33b16) fix(api): window label null instead of actual value, closes [#3295](https://www.github.com/tauri-apps/tauri/pull/3295) ([#3332](https://www.github.com/tauri-apps/tauri/pull/3332)) on 2022-02-04
- Remove the `BaseDirectory::Current` enum variant for security reasons.
  - [696dca58](https://www.github.com/tauri-apps/tauri/commit/696dca58a9f8ee127a1cf857eb848e09f5845d18) refactor(core): remove `BaseDirectory::Current` variant on 2022-01-26
- **Breaking change:** Remove default webview window when `tauri.conf.json > tauri > windows` is not set.
  - [c119060e](https://www.github.com/tauri-apps/tauri/commit/c119060e3d9a5a824639fb6b3c45a87e7a62e4e2) refactor(core): empty default value for config > tauri > windows ([#3380](https://www.github.com/tauri-apps/tauri/pull/3380)) on 2022-02-10
- **Breaking change:** Renamed the `rpc` module to `ipc`.
  - [3420aa50](https://www.github.com/tauri-apps/tauri/commit/3420aa5031b3274a95c6c5fa0f8683ca13213396) refactor: IPC handler \[TRI-019] ([#9](https://www.github.com/tauri-apps/tauri/pull/9)) on 2022-01-09
- Expose `run_on_main_thread` APIs on `Window` and `AppHandle`.
  - [53fdfe52](https://www.github.com/tauri-apps/tauri/commit/53fdfe52bb30d52653c72ca9f42506c3863dcf4a) feat(core): expose `run_on_main_thread` API ([#2711](https://www.github.com/tauri-apps/tauri/pull/2711)) on 2021-10-04
- The minimum Rust version is now `1.56`.
  - [a9dfc015](https://www.github.com/tauri-apps/tauri/commit/a9dfc015505afe91281c2027954ffcc588b1a59c) feat: update to edition 2021 and set minimum rust to 1.56 ([#2789](https://www.github.com/tauri-apps/tauri/pull/2789)) on 2021-10-22
- The minimum Rust version is now 1.57.
  - [d5d6d2ab](https://www.github.com/tauri-apps/tauri/commit/d5d6d2abc17cd89c3a079d2ce01581193469dbc0) Isolation Pattern ([#43](https://www.github.com/tauri-apps/tauri/pull/43)) Co-authored-by: Ngo Iok Ui (Wu Yu Wei) <wusyong9104@gmail.com> Co-authored-by: Lucas Fernandes Nogueira <lucas@tauri.studio> on 2022-01-17
- Scopes the `filesystem` APIs from the webview access using `tauri.conf.json > tauri > allowlist > fs > scope`.
  Scopes the `asset` protocol access using `tauri.conf.json > tauri > allowlist > protocol > assetScope`.
  Scopes the `http` APIs from the webview access using `tauri.conf.json > tauri > allowlist > http > scope`.
  Scopes the `shell` execute API from the webview access using `tauri.conf.json > tauri > allowlist > shell > scope`. Additionally, check the `tauri.conf.json > tauri > bundle > externalBin` to prevent access to unknown sidecars.
  - [7920ff14](https://www.github.com/tauri-apps/tauri/commit/7920ff14e6424079c48ea5645d9aa13e7a272b87) feat: scope the `fs` API and the `asset` protocol \[TRI-026] \[TRI-010] \[TRI-011] ([#10](https://www.github.com/tauri-apps/tauri/pull/10)) on 2022-01-09
  - [0ad1c651](https://www.github.com/tauri-apps/tauri/commit/0ad1c6515f696fadefddbf133a9561836b3d5934) feat(core): add `http` allowlist scope \[TRI-008] ([#24](https://www.github.com/tauri-apps/tauri/pull/24)) on 2021-10-29
  - [d4db95e7](https://www.github.com/tauri-apps/tauri/commit/d4db95e7161e064d9463bc84d871a5391c3ce2d7) feat(core): shell execute API scope \[TRI-002] ([#36](https://www.github.com/tauri-apps/tauri/pull/36)) on 2021-12-01
- `Builder#setup` closure type changed from `Fn` to `FnOnce`.
  - [3f3599b9](https://www.github.com/tauri-apps/tauri/commit/3f3599b9cc238da06b36aff4c120a013a97fc3f0) refactor(core): change `setup` closure type to `FnOnce`, closes [#3061](https://www.github.com/tauri-apps/tauri/pull/3061) ([#3065](https://www.github.com/tauri-apps/tauri/pull/3065)) on 2021-12-27
- The `tauri::api::shell::open`'s `with` argument is now an enum value instead of any string.
  - [63921fad](https://www.github.com/tauri-apps/tauri/commit/63921fada436f010c33bb5e647bd67c6e549571c) refactor: change `tauri::api::open` `with` argument to an enum \[TRI-022] ([#19](https://www.github.com/tauri-apps/tauri/pull/19)) on 2022-01-09
- The `shell` allowlist now includes a `sidecar` flag, which enables the use of the `shell` API to execute sidecars.
  - [eed01728](https://www.github.com/tauri-apps/tauri/commit/eed017287fed2ade689af4268e8b63b9c9f2e585) feat(core): add `shell > sidecar` allowlist and `process` feature flag \[TRI-037] ([#18](https://www.github.com/tauri-apps/tauri/pull/18)) on 2021-10-24
- **Breaking change:** The sidecar's target triple suffix is now removed at build time.
  - [3035e458](https://www.github.com/tauri-apps/tauri/commit/3035e4581c161ec7f0bd6d9b42e9015cf1dd1d77) Remove target triple from sidecar bin paths, closes [#3355](https://www.github.com/tauri-apps/tauri/pull/3355) ([#3356](https://www.github.com/tauri-apps/tauri/pull/3356)) on 2022-02-07
- Fix streaming of small files using the `asset` protocol.
  - [151e629e](https://www.github.com/tauri-apps/tauri/commit/151e629ebf15ec5c068eb623e3dbc0ecdef1f816) fix(core): streaming of small files using `asset://`, closes [#2854](https://www.github.com/tauri-apps/tauri/pull/2854) ([#3039](https://www.github.com/tauri-apps/tauri/pull/3039)) on 2021-12-09
- Add `set_menu` API on `tauri::SystemTrayHandle`.
  - [0e4d12b5](https://www.github.com/tauri-apps/tauri/commit/0e4d12b541652d98c5a73de65034db8214e0363c) fix: [#2502](https://www.github.com/tauri-apps/tauri/pull/2502) Expose `set_menu` from tao through the TrayHandle struct ([#2532](https://www.github.com/tauri-apps/tauri/pull/2532)) on 2021-10-02
- Adds `unlisten` function to the `Window` struct.
  - [3a59f5f7](https://www.github.com/tauri-apps/tauri/commit/3a59f5f79e1b3ea08a224e6f2e0a56668d96cda3) Unlisten to an event on this window ([#2664](https://www.github.com/tauri-apps/tauri/pull/2664)) on 2021-09-28
- Force updater endpoint URL to use `https` on release builds.
  - [c077f449](https://www.github.com/tauri-apps/tauri/commit/c077f449270cffbf7956b1af81e1fb237ebf564a) feat: force endpoint URL to use https on release \[TRI-015] ([#41](https://www.github.com/tauri-apps/tauri/pull/41)) on 2022-01-09
- Validate the `std::env::current_exe` return value if `APPDIR` or `APPIMAGE` environment variables are set.
  - [6fbd6dba](https://www.github.com/tauri-apps/tauri/commit/6fbd6dba5290dc017ab0ba5a44cf4358b022836f) feat(core): validate `AppImage` execution when env vars are set \[TRI-041] ([#17](https://www.github.com/tauri-apps/tauri/pull/17)) on 2021-10-24
- The event name is now validated. On a IPC message, it returns an error if it fails validation; on the Rust side, it panics.
  It must include only alphanumeric characters, `-`, `/`, `:` and `_`.
  - [a48b8b18](https://www.github.com/tauri-apps/tauri/commit/a48b8b18d428bcc404d489daa690bbefe1f57311) feat(core): validate callbacks and event names \[TRI-038] \[TRI-020] ([#21](https://www.github.com/tauri-apps/tauri/pull/21)) on 2022-01-09
- The window label is now validated and must be alphanumeric, resulting in a panic if it isn't.
  - [680554de](https://www.github.com/tauri-apps/tauri/commit/680554de3ef6b7fccf87c441ad355cfef7aab6fe) feat: validate window label \[TRI-021] ([#13](https://www.github.com/tauri-apps/tauri/pull/13)) on 2021-10-23
- Allow `tauri.conf.json > package > version` to specify a path to a `package.json` file and pull the version from it.
  - [46f2eae8](https://www.github.com/tauri-apps/tauri/commit/46f2eae8aad7c6a228eaf48480d5603dae6454b4) feat: allow config's version to be a path to package.json, closes [#2967](https://www.github.com/tauri-apps/tauri/pull/2967) ([#2971](https://www.github.com/tauri-apps/tauri/pull/2971)) on 2022-01-07
- Added `clipboard` field on the `WebviewAttributes` struct, which must be set to `true` to enable clipboard access on the webview.
  - [d42ccfb3](https://www.github.com/tauri-apps/tauri/commit/d42ccfb34f71851dfeb22fe74c83a8bdbddb5550) feat: add `clipboard` flag to `WebviewAttributes` \[TRI-032] ([#12](https://www.github.com/tauri-apps/tauri/pull/12)) on 2021-10-23
- Replace all of the `winapi` crate references with the `windows` crate, and replace `webview2` and `webview2-sys` with `webview2-com` and `webview2-com-sys` built with the `windows` crate. This goes along with updates to the TAO and WRY `next` branches.
  - [bb00d5bd](https://www.github.com/tauri-apps/tauri/commit/bb00d5bd6c9dfcb6bdd0d308dadb70e6c6aafe5c) Replace winapi with windows crate and use webview2-com instead of webview2 ([#2615](https://www.github.com/tauri-apps/tauri/pull/2615)) on 2021-09-24
- Show `Ok/Cancel` buttons instead of `Yes/No` when executing `window.confirm`.
  - [e98c1af4](https://www.github.com/tauri-apps/tauri/commit/e98c1af44279a5ff6c8a6f0a506ecc219c9f77af) feat(core): expose message dialog APIs, fix window.confirm, implement HasRawWindowHandle for Window, closes [#2535](https://www.github.com/tauri-apps/tauri/pull/2535) ([#2700](https://www.github.com/tauri-apps/tauri/pull/2700)) on 2021-10-02
- Update the `windows` crate to 0.25.0, which comes with pre-built libraries. WRY and Tao can both reference the same types directly from the `windows` crate instead of sharing bindings in `webview2-com-sys`.
  - [34be6cf3](https://www.github.com/tauri-apps/tauri/commit/34be6cf37a98ee7cbd66623ebddae08e5a6520fd) Update webview2-com and windows crates ([#2875](https://www.github.com/tauri-apps/tauri/pull/2875)) on 2021-11-11

## \[1.0.0-beta.8]

- Fix missing asset protocol path.Now the protocol is `https://asset.localhost/path/to/file` on Windows. Lunix and macOS
  is still `asset://path/to/file`.
  - [994b5325](https://www.github.com/tauri-apps/tauri/commit/994b5325dd385f564b37fe1530c5d798dc925fff) fix: missing asset protocol path ([#2484](https://www.github.com/tauri-apps/tauri/pull/2484)) on 2021-08-23
- **Breaking change:** Removed `register_uri_scheme_protocol` from the `WebviewAttibutes` struct and renamed `register_global_uri_scheme_protocol` to `register_uri_scheme_protocol` on the `Builder` struct, which now takes a `Fn(&AppHandle, &http::Request) -> http::Response` closure.
  - [539e4489](https://www.github.com/tauri-apps/tauri/commit/539e4489e0bac7029d86917e9982ea49e02fe489) refactor: custom protocol ([#2503](https://www.github.com/tauri-apps/tauri/pull/2503)) on 2021-08-23
- Migrate to latest custom protocol allowing `Partial content` streaming and Header parsing.
  - [539e4489](https://www.github.com/tauri-apps/tauri/commit/539e4489e0bac7029d86917e9982ea49e02fe489) refactor: custom protocol ([#2503](https://www.github.com/tauri-apps/tauri/pull/2503)) on 2021-08-23

## \[1.0.0-beta.7]

- Cleanup application on `AppHandle#exit`.
  - [a54bba6c](https://www.github.com/tauri-apps/tauri/commit/a54bba6c868508844d68a9f4ea9f5519a2b94d09) fix(core): cleanup app before exit, closes [#2464](https://www.github.com/tauri-apps/tauri/pull/2464) ([#2466](https://www.github.com/tauri-apps/tauri/pull/2466)) on 2021-08-17
- Fix `raw-window-handle` dependency declaration.
  - [aecdfaf7](https://www.github.com/tauri-apps/tauri/commit/aecdfaf76fcf0d2820d6ce6eb7590ebe399bfa04) fix(core): `raw-window-handle` dependency, closes [#2460](https://www.github.com/tauri-apps/tauri/pull/2460) ([#2465](https://www.github.com/tauri-apps/tauri/pull/2465)) on 2021-08-17

## \[1.0.0-beta.6]

- **Breaking change:** The `tauri::async_runtime::spawn` function now returns `tauri::async_runtime::JoinHandle<T>`.
  - [9aeb04fa](https://www.github.com/tauri-apps/tauri/commit/9aeb04faf40989e8fd9d3dcac1d430a9e8bd23a9) feat(core): `async_runtime` `handle` API, `spawn` returns `JoinHandle` ([#2399](https://www.github.com/tauri-apps/tauri/pull/2399)) on 2021-08-11

- **Breaking change:** Added `window_parent: Option<&Window>` as first argument to the `ask` and `message` APIs on the `tauri::api::dialog` module.
  - [c76f4b7d](https://www.github.com/tauri-apps/tauri/commit/c76f4b7d39a620c7710c2046bb13b140a4793881) feat(core): set parent window on ask and message dialog APIs ([#2454](https://www.github.com/tauri-apps/tauri/pull/2454)) on 2021-08-16

- Allow the `tauri::api::dialog` APIs to be executed on any secondary thread.
  **Breaking change:** All dialog APIs now takes a closure instead of returning the response on the function call.
  - [2088cd0f](https://www.github.com/tauri-apps/tauri/commit/2088cd0f24cd56ba427241136138c74bebee28f2) refactor(core): handle dialog threading internally, closes [#2223](https://www.github.com/tauri-apps/tauri/pull/2223) ([#2429](https://www.github.com/tauri-apps/tauri/pull/2429)) on 2021-08-14
  - [60b1e260](https://www.github.com/tauri-apps/tauri/commit/60b1e260f511f50bbebceb6367f412c11f8dcf11) chore: adjust change file on 2021-08-16

- **Breaking change:** The `Plugin` trait `initialize` method now takes an `AppHandle` reference instead of `App`.
  - [c17532f7](https://www.github.com/tauri-apps/tauri/commit/c17532f7412bdcc57ae850c1251052ad1421fd67) refactor(core): change Plugin `initialize` signature, move register t… ([#2347](https://www.github.com/tauri-apps/tauri/pull/2347)) on 2021-08-03

- **Breaking change:** Remove menu feature flag since there's no package dependency need to be installed on any platform anymore.
  - [f81ebddf](https://www.github.com/tauri-apps/tauri/commit/f81ebddfcc1aea0d4989706aef43538e8ea98bea) feat: remove menu feature flag ([#2415](https://www.github.com/tauri-apps/tauri/pull/2415)) on 2021-08-13

- Adds `set_activation_policy` API to the `tauri::App` struct (macOS only).
  - [4a031add](https://www.github.com/tauri-apps/tauri/commit/4a031add69014a1f3823f4ea19b172a2557f6794) feat(core): expose `set_activation_policy`, closes [#2258](https://www.github.com/tauri-apps/tauri/pull/2258) ([#2420](https://www.github.com/tauri-apps/tauri/pull/2420)) on 2021-08-13

- Add `handle` API to `tauri::async_runtime`.
  - [9aeb04fa](https://www.github.com/tauri-apps/tauri/commit/9aeb04faf40989e8fd9d3dcac1d430a9e8bd23a9) feat(core): `async_runtime` `handle` API, `spawn` returns `JoinHandle` ([#2399](https://www.github.com/tauri-apps/tauri/pull/2399)) on 2021-08-11

- Assets will now fallback to `<uri>/index.html` before `/index.html`, allowing anchor links to work as expected.
  - [d22da650](https://www.github.com/tauri-apps/tauri/commit/d22da650ef5b51ab7dd0e45dd9527a9c5a01f84d) fix(core): fallback to `{asset}/index.html` before `index.html`, closes [#2328](https://www.github.com/tauri-apps/tauri/pull/2328) ([#2329](https://www.github.com/tauri-apps/tauri/pull/2329)) on 2021-08-02

- Fix `data-tauri-drag-region` double-click, will now respect `resizable: false` and won't maximize.
  - [1a510066](https://www.github.com/tauri-apps/tauri/commit/1a510066732d5f61c88c0ceed1c5f5cc559faf7d) fix(core): `data-tauri-drag-region` didn't respect resizable, closes [#2314](https://www.github.com/tauri-apps/tauri/pull/2314) ([#2316](https://www.github.com/tauri-apps/tauri/pull/2316)) on 2021-08-02

- Fix `Notification.requestPermission()` throwing `Unhandled Promise Rejection: TypeError: undefined is not a function (near '...window.__TAURI__.invoke...')`
  - [cf9f6aa1](https://www.github.com/tauri-apps/tauri/commit/cf9f6aa148db31c6fd4e3571b301db18654a1249) fix(core): fix typo in notifications, closes [#2330](https://www.github.com/tauri-apps/tauri/pull/2330) ([#2331](https://www.github.com/tauri-apps/tauri/pull/2331)) on 2021-08-02

- Fix blur/focus events being incorrect on Windows.
  - [d832d575](https://www.github.com/tauri-apps/tauri/commit/d832d575d9b03a0ff78accabe4631cc638c08c3b) fix(windows): use webview events on windows ([#2277](https://www.github.com/tauri-apps/tauri/pull/2277)) on 2021-07-23

- Move items which `tauri::api` re-exports from `tauri-utils` to individual module `utils`. Because these items has their
  own Error/Result types which are not related to api module at all.
  - [12642a1a](https://www.github.com/tauri-apps/tauri/commit/12642a1ad42b23d8d4e31ae67cb8de287ba526c0) doc: update doc in tauri-utils and tauri ([#2435](https://www.github.com/tauri-apps/tauri/pull/2435)) on 2021-08-15
  - [cd55d671](https://www.github.com/tauri-apps/tauri/commit/cd55d671498d48cf83ae603c4241031b9827119b) doc: update tauri documentations ([#2446](https://www.github.com/tauri-apps/tauri/pull/2446)) on 2021-08-16

- Allow registering a plugin through an `AppHandle` instance using the `plugin` method.
  - [5b7be813](https://www.github.com/tauri-apps/tauri/commit/5b7be8133a6a861128ad53d1202d633f7ea8c2d2) feat(core): add plugin register API on the `Manager` trait ([#2340](https://www.github.com/tauri-apps/tauri/pull/2340)) on 2021-08-02
  - [c17532f7](https://www.github.com/tauri-apps/tauri/commit/c17532f7412bdcc57ae850c1251052ad1421fd67) refactor(core): change Plugin `initialize` signature, move register t… ([#2347](https://www.github.com/tauri-apps/tauri/pull/2347)) on 2021-08-03

- Embed Info.plist file contents on binary on dev.
  - [537ab1b6](https://www.github.com/tauri-apps/tauri/commit/537ab1b6d5a792c550a535619965c9e4126292e6) feat(core): inject src-tauri/Info.plist file on dev and merge on bundle, closes [#1570](https://www.github.com/tauri-apps/tauri/pull/1570) [#2338](https://www.github.com/tauri-apps/tauri/pull/2338) ([#2444](https://www.github.com/tauri-apps/tauri/pull/2444)) on 2021-08-15

- Add `ExitRequested` event that allows preventing the app from exiting when all windows are closed, and an `AppHandle.exit()` function to exit the app manually.
  - [892c63a0](https://www.github.com/tauri-apps/tauri/commit/892c63a0538f8d62680dce5848657128ad6b7af3) feat([#2287](https://www.github.com/tauri-apps/tauri/pull/2287)): Add `ExitRequested` event to let users prevent app from exiting ([#2293](https://www.github.com/tauri-apps/tauri/pull/2293)) on 2021-08-09

- Change `App.create_window()` and `AppHandle.create_window()` to accept an `Into<String>` type instead of `String`.
  - [8216cba1](https://www.github.com/tauri-apps/tauri/commit/8216cba13da10b272aae8e5058b1ec2cc937e196) `App.create_window()` to accept any `Into<String>` type (fix [#2290](https://www.github.com/tauri-apps/tauri/pull/2290)) ([#2291](https://www.github.com/tauri-apps/tauri/pull/2291)) on 2021-07-26

- Fixes `defaultPath` option on dialog API not setting the file name if it doesn't exist on Linux.
  - [8b2cc261](https://www.github.com/tauri-apps/tauri/commit/8b2cc2615d784100980807a520d16681819d83c7) fix(core): dialog's `defaultPath` behavior on Linux, closes [#2232](https://www.github.com/tauri-apps/tauri/pull/2232) ([#2382](https://www.github.com/tauri-apps/tauri/pull/2382)) on 2021-08-10

- Fix ES Module detection for default imports with relative paths or scoped packages and exporting of async functions.
  - [b2b36cfe](https://www.github.com/tauri-apps/tauri/commit/b2b36cfe8dfcccb341638a4cb6dc23a514c54148) fix(core): fixes ES Module detection for default imports with relative paths or scoped packages ([#2380](https://www.github.com/tauri-apps/tauri/pull/2380)) on 2021-08-10
  - [fbf8caf5](https://www.github.com/tauri-apps/tauri/commit/fbf8caf5c419cb4fc3d123be910e094a8e8c4bef) fix(core): ESM detection when using `export async function` ([#2425](https://www.github.com/tauri-apps/tauri/pull/2425)) on 2021-08-14

- Fix `listen` calls receiving past events.
  - [1ecb8651](https://www.github.com/tauri-apps/tauri/commit/1ecb8651a795aa53eded31e3fb357c857dcf2ab1) fix(core): `listen` receiving past events, closes [#2323](https://www.github.com/tauri-apps/tauri/pull/2323) ([#2371](https://www.github.com/tauri-apps/tauri/pull/2371)) on 2021-08-09

- Fixes file drop events being swapped (`file-drop-hover` on drop and `file-drop` on hover).
  - [c2b0fe1c](https://www.github.com/tauri-apps/tauri/commit/c2b0fe1ce58e54dbcfdb63162ad17d7e6d8774d9) fix(core): fix wrong file drop events ([#2300](https://www.github.com/tauri-apps/tauri/pull/2300)) on 2021-07-31

- Fixes `app.listen_global` not receiving events emitted in javascript.
  - [a8c1de55](https://www.github.com/tauri-apps/tauri/commit/a8c1de5547cd3968aa238a06c410cb936391db5d) fix listen_global not listening to events with a window label ([#2272](https://www.github.com/tauri-apps/tauri/pull/2272)) on 2021-07-23

- Fixes minimum window height being used as maximum height.
  - [e3f99165](https://www.github.com/tauri-apps/tauri/commit/e3f9916526b226866137cb663e5cafab2b6a0e01) fix(core) minHeight being used as maxHeight ([#2247](https://www.github.com/tauri-apps/tauri/pull/2247)) on 2021-07-19

- Fixes `unlisten` calls from JavaScript removing every registered event listener.
  - [aa498e72](https://www.github.com/tauri-apps/tauri/commit/aa498e72614f59afcdd1f637b4e3bdf6fe00b137) fix: unlisten removes all listeners, closes [#2264](https://www.github.com/tauri-apps/tauri/pull/2264) ([#2302](https://www.github.com/tauri-apps/tauri/pull/2302)) on 2021-07-29

- Use [`Url.join()`](https://docs.rs/url/2.2.2/url/struct.Url.html#method.join) when building webview URLs in
  `WindowManager`, to handle edge cases and leading/trailing slashes in paths and urls.
  - [31685c9f](https://www.github.com/tauri-apps/tauri/commit/31685c9f9d9c2f12d3debc3189ed67e8d669f3d8) fix([#2281](https://www.github.com/tauri-apps/tauri/pull/2281)): Prevent double slashes when joining URLs ([#2282](https://www.github.com/tauri-apps/tauri/pull/2282)) on 2021-07-23

- Fixes `fs-all` feature not requiring the `base64` crate.
  - [9b32b939](https://www.github.com/tauri-apps/tauri/commit/9b32b93996201190d83fcad4767709774e5a0780) fix(core): `fs-all` feature not including `base64` crate, closes [#2336](https://www.github.com/tauri-apps/tauri/pull/2336) ([#2368](https://www.github.com/tauri-apps/tauri/pull/2368)) on 2021-08-08

- Update gtk and its related libraries to v0.14. This also remove requirements of `clang` as build dependency.
  - [63ad3039](https://www.github.com/tauri-apps/tauri/commit/63ad303903bbee7c9a7382413b342e2a05d3ea75) chore(linux): bump gtk to v0.14 ([#2361](https://www.github.com/tauri-apps/tauri/pull/2361)) on 2021-08-07

- Use `HeaderValue::from_bytes` instead of `HeaderValue::from_str` and `HeaderValue#to_bytes` instead of `HeaderValue#to_str` to improve compatibility.
  - [1635798a](https://www.github.com/tauri-apps/tauri/commit/1635798a669ced825577941dc66f1334c5904b43) feat(core): improve HeaderValue compatibility, closes [#2162](https://www.github.com/tauri-apps/tauri/pull/2162) ([#2438](https://www.github.com/tauri-apps/tauri/pull/2438)) on 2021-08-15

- Implement `Debug` on public API structs and enums.
  - [fa9341ba](https://www.github.com/tauri-apps/tauri/commit/fa9341ba18ba227735341530900714dba0f27291) feat(core): implement `Debug` on public API structs/enums, closes [#2292](https://www.github.com/tauri-apps/tauri/pull/2292) ([#2387](https://www.github.com/tauri-apps/tauri/pull/2387)) on 2021-08-11

- Adds `Resumed` and `MainEventsCleared` variants to the `Event` enum.
  - [6be3f433](https://www.github.com/tauri-apps/tauri/commit/6be3f4339168651fe4e003b09f7d181fd12cd5a8) feat(core): add `Resumed` and `MainEventsCleared` events, closes [#2127](https://www.github.com/tauri-apps/tauri/pull/2127) ([#2439](https://www.github.com/tauri-apps/tauri/pull/2439)) on 2021-08-15

- Panic when a dispatcher getter method (`Window`, `GlobalShortcutHandle`, `ClipboardManager` and `MenuHandle` APIs) is called on the main thread.
  - [50ffdc06](https://www.github.com/tauri-apps/tauri/commit/50ffdc06fbde56aba32b4291fd130104935d1408) feat(core): panic when a dispatcher getter is used on the main thread ([#2455](https://www.github.com/tauri-apps/tauri/pull/2455)) on 2021-08-16

- Use `percent_encoding::percent_decode` on the `asset` custom protocol URL before reading the file.
  - [9acd8301](https://www.github.com/tauri-apps/tauri/commit/9acd83017f25b5b04e97e6e98af80f3076f8dbe3) fix(core): percent decode asset protocol URL ([#2427](https://www.github.com/tauri-apps/tauri/pull/2427)) on 2021-08-14

- Keep original value on `config > package > productName` on Linux (previously converted to kebab-case).
  - [3f039cb8](https://www.github.com/tauri-apps/tauri/commit/3f039cb8a308b0f18deaa37d7cfb1cc50d308d0e) fix: keep original `productName` for .desktop `Name` field, closes [#2295](https://www.github.com/tauri-apps/tauri/pull/2295) ([#2384](https://www.github.com/tauri-apps/tauri/pull/2384)) on 2021-08-10

- Inject the invoke key on regular `<script></script>` tags.
  - [d0142e87](https://www.github.com/tauri-apps/tauri/commit/d0142e87ddf5231fd46e2cbe4769bb16f3fe01e9) fix(core): invoke key injection on regular JS scripts, closes [#2342](https://www.github.com/tauri-apps/tauri/pull/2342) ([#2344](https://www.github.com/tauri-apps/tauri/pull/2344)) on 2021-08-03

- Remove salt-related APIs (no longer needed after the `__TAURI_INVOKE_KEY__` implementation).
  - [e2a0704c](https://www.github.com/tauri-apps/tauri/commit/e2a0704c6c7a447b628a95f8920f9bbe9feef229) refactor(core): remove salt APIs ([#2426](https://www.github.com/tauri-apps/tauri/pull/2426)) on 2021-08-14

- Update minimum Rust version to 1.54.0.
  - [a5394716](https://www.github.com/tauri-apps/tauri/commit/a53947160985a4f5b0ad1fbb4aa6865d6f852c66) chore: update rust to 1.54.0 ([#2434](https://www.github.com/tauri-apps/tauri/pull/2434)) on 2021-08-15

- Run the setup callback after preparing the system tray.
  - [1792c455](https://www.github.com/tauri-apps/tauri/commit/1792c45592cd4999af063fa89017f52a985553c1) fix(core): run setup after preparing system tray ([#2312](https://www.github.com/tauri-apps/tauri/pull/2312)) on 2021-07-28

- Fixes a consistency issue on the order of `tauri::process::Command` emitted events.
  - [737da872](https://www.github.com/tauri-apps/tauri/commit/737da87244cbdeb1158c93944bcb5e10bb383b31) fix(core): random shell command output order, closes [#2184](https://www.github.com/tauri-apps/tauri/pull/2184) ([#2376](https://www.github.com/tauri-apps/tauri/pull/2376)) on 2021-08-09

- Force data directory even on non-local window.
  - [70a19414](https://www.github.com/tauri-apps/tauri/commit/70a1941468f55f0dc09ac2e13802945891d766f4) fix(core): Force data_directory on Windows ([#2288](https://www.github.com/tauri-apps/tauri/pull/2288)) on 2021-07-23

- Allow creation of empty Window with `create_tao_window()` and management with `send_tao_window_event()` on the AppHandler.
  - [88080855](https://www.github.com/tauri-apps/tauri/commit/8808085541a629b8e22b612a06cef01cf9b3722e) feat(window): Allow creation of Window without `wry` ([#2321](https://www.github.com/tauri-apps/tauri/pull/2321)) on 2021-07-29
  - [15566cfd](https://www.github.com/tauri-apps/tauri/commit/15566cfd64f5072fa4980a6ce5b33259958e9021) feat(core): add API to send wry window message to the event loop ([#2339](https://www.github.com/tauri-apps/tauri/pull/2339)) on 2021-08-02

- Make `ClipboardManager` and `GlobalShortcutManager` public as they are exposed in the `AppHandle`.
  - [6e0dbf63](https://www.github.com/tauri-apps/tauri/commit/6e0dbf639ac2c79e00fee9270a2ca8e613dc1f98) fix(core): Expose `ClipboardManager` and `GlobalShortcutManager` ([#2263](https://www.github.com/tauri-apps/tauri/pull/2263)) on 2021-08-03

- - Support [macOS tray icon template](https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc) to adjust automatically based on taskbar color.

- Images you mark as template images should consist of only black and clear colors. You can use the alpha channel in the image to adjust the opacity of black content, however.

- [426a6b49](https://www.github.com/tauri-apps/tauri/commit/426a6b49962de8faf061db2e820ac10fcbb300d6) feat(macOS): Implement tray icon template ([#2322](https://www.github.com/tauri-apps/tauri/pull/2322)) on 2021-07-29

- Add `Event::Ready` on the `run()` callback. Triggered once when the event loop is ready.
  - [28c6b7ad](https://www.github.com/tauri-apps/tauri/commit/28c6b7adfe98e701b158e936eafb7541ddc700e0) feat: add `Event::Ready` ([#2433](https://www.github.com/tauri-apps/tauri/pull/2433)) on 2021-08-15

- - Do not run the updater with UAC task if server don't tell us. (Allow toggling server-side)

- The updater expect a field named `with_elevated_task` with a `boolean` and will not run if the task is not installed first. (windows only)

- [c5761190](https://www.github.com/tauri-apps/tauri/commit/c576119013297f3731d76924a887c5c2a62c13ba) fix(updater): Run elevated task only if server tell us ([#2357](https://www.github.com/tauri-apps/tauri/pull/2357)) on 2021-08-08

- Add `try_state` API to the `Manager` trait.
  - [84a0e04c](https://www.github.com/tauri-apps/tauri/commit/84a0e04cbe242b2b7abb388da2d878fce10bc27d) feat(core): `try_state` API on the `Manager` trait ([#2341](https://www.github.com/tauri-apps/tauri/pull/2341)) on 2021-08-02

## \[1.0.0-beta.5]

- Allow preventing window close when the user requests it.
  - [8157a68a](https://www.github.com/tauri-apps/tauri/commit/8157a68af1d94de1b90a14aa44139bb123b3436b) feat(core): allow listening to event loop events & prevent window close ([#2131](https://www.github.com/tauri-apps/tauri/pull/2131)) on 2021-07-06
- Add `App#run` method with callback argument (event loop event handler).
  - [8157a68a](https://www.github.com/tauri-apps/tauri/commit/8157a68af1d94de1b90a14aa44139bb123b3436b) feat(core): allow listening to event loop events & prevent window close ([#2131](https://www.github.com/tauri-apps/tauri/pull/2131)) on 2021-07-06
- Fixes `data-tauri-drag-region` not firing its events.
  - [578610a2](https://www.github.com/tauri-apps/tauri/commit/578610a29d5cefb8df070606b7587318b14c397a) fix(core): fix drag-region not sending its events correctly ([#2196](https://www.github.com/tauri-apps/tauri/pull/2196)) on 2021-07-12
- Fix macOS `EXC_BAD_ACCESS` panic when app is code-signed.
  - [456a94f6](https://www.github.com/tauri-apps/tauri/commit/456a94f6637746800b9b85fc3922e82871603402) fix(macOS): updater `EXC_BAD_ACCESS` ([#2181](https://www.github.com/tauri-apps/tauri/pull/2181)) on 2021-07-12
- Fixes SVG loading on custom protocol.
  - [e663bdd5](https://www.github.com/tauri-apps/tauri/commit/e663bdd5938830ab4eba961e69c3985191b499dd) fix(core): svg mime type ([#2129](https://www.github.com/tauri-apps/tauri/pull/2129)) on 2021-06-30
- Expose `gtk_window` getter.
  - [e0a8e09c](https://www.github.com/tauri-apps/tauri/commit/e0a8e09cab6799eeb9ec524b5f7780d1e5a84299) feat(core): expose `gtk_window`, closes [#2083](https://www.github.com/tauri-apps/tauri/pull/2083) ([#2141](https://www.github.com/tauri-apps/tauri/pull/2141)) on 2021-07-02
- Inject invoke key on `script` tags with `type="module"`.
  - [f03eea9c](https://www.github.com/tauri-apps/tauri/commit/f03eea9c9b964709532afbc4d1dd343b3fd96081) feat(core): inject invoke key on `<script type="module">` ([#2120](https://www.github.com/tauri-apps/tauri/pull/2120)) on 2021-06-29
- Fix macOS high CPU usage.
  - [a280ee90](https://www.github.com/tauri-apps/tauri/commit/a280ee90af0749ce18d6d0b00939b06473717bc9) Fix high cpu usage on mac, fix [#2074](https://www.github.com/tauri-apps/tauri/pull/2074) ([#2125](https://www.github.com/tauri-apps/tauri/pull/2125)) on 2021-06-30
- Export `MenuHandle` and `MenuEvent` types on `tauri::window`.
  - [acb88929](https://www.github.com/tauri-apps/tauri/commit/acb88929c4dd1bd2ac94f7896a1e54afb9417768) fix(core): export `MenuHandle` and `MenuEvent` ([#2148](https://www.github.com/tauri-apps/tauri/pull/2148)) on 2021-07-03
- Use glib context for linux updater to prevent GTK panic.
  - [3389bd81](https://www.github.com/tauri-apps/tauri/commit/3389bd8180ed79d0f6778f7f41a88ad6d4598932) fix(linux): use glib main context for the updater on linux ([#2222](https://www.github.com/tauri-apps/tauri/pull/2222)) on 2021-07-16
- Bump `wry` 0.11 and fix focus integration to make it compatible with tao 0.4.
  - [f0a8db62](https://www.github.com/tauri-apps/tauri/commit/f0a8db62e445dbbc5770e7addf0390ce3844c1ea) core(deps): bump `wry` to `0.11` ([#2210](https://www.github.com/tauri-apps/tauri/pull/2210)) on 2021-07-15
- `Params` has been removed, along with all the associated types on it. Functions that previously accepted those
  associated types now accept strings instead. Type that used a generic parameter `Params` now use `Runtime` instead. If
  you use the `wry` feature, then types with a `Runtime` generic parameter should default to `Wry`, letting you omit the
  explicit type and let the compiler infer it instead.

`tauri`:

- See `Params` note
- If you were using `Params` inside a function parameter or definition, all references to it have been replaced with a
  simple runtime that defaults to `Wry`. If you are not using a custom runtime, just remove `Params` from the definition
  of functions/items that previously took it. If you are using a custom runtime, you *may* need to pass the runtime type
  to these functions.
- If you were using custom types for `Params` (uncommon and if you don't understand you probably were not using it), all
  methods that were previously taking the custom type now takes an `Into<String>` or a `&str`. The types were already
  required to be string-able, so just make sure to convert it into a string before passing it in if this breaking change
  affects you.

`tauri-macros`:

- (internal) Added private `default_runtime` proc macro to allow us to give item definitions a custom runtime only when
  the specified feature is enabled.

`tauri-runtime`:

- See `Params` note
- Removed `Params`, `MenuId`, `Tag`, `TagRef`.
- Added `menu::{MenuHash, MenuId, MenuIdRef}` as type aliases for the internal type that menu types now use.
  - All previous menu items that had a `MenuId` generic now use the underlying `MenuId` type without a generic.
- `Runtime`, `RuntimeHandle`, and `Dispatch` have no more generic parameter on `create_window(...)` and instead use the
  `Runtime` type directly
- `Runtime::system_tray` has no more `MenuId` generic and uses the string based `SystemTray` type directly.
- (internal) `CustomMenuItem::id_value()` is now hashed on creation and exposed as the `id` field with type `MenuHash`.

`tauri-runtime-wry`:

- See `Params` note
- update menu and runtime related types to the ones changed in `tauri-runtime`.

`tauri-utils`:

- `Assets::get` signature has changed to take a `&AssetKey` instead of `impl Into<AssetKey>` to become trait object
  safe.
- [fd8fab50](https://www.github.com/tauri-apps/tauri/commit/fd8fab507c8fa1b113b841af14c6693eb3955f6b) refactor(core): remove `Params` and replace with strings ([#2191](https://www.github.com/tauri-apps/tauri/pull/2191)) on 2021-07-15

## \[1.0.0-beta.4]

- Double clicking a `data-tauri-drag-region` element will toggle the window maximized state.
  - [8b7ac1ad](https://www.github.com/tauri-apps/tauri/commit/8b7ac1ad1432db1fb1b85b3f72d336b303414554) feat: double-click tauri-drag-region to maximize, closes [#1839](https://www.github.com/tauri-apps/tauri/pull/1839) ([#2106](https://www.github.com/tauri-apps/tauri/pull/2106)) on 2021-06-29
- Fixes `asset` protocol crashing application.
  - [99d96084](https://www.github.com/tauri-apps/tauri/commit/99d960841c4411c3805219d07640185b1d04c37a) fix(core): custom protocol regression ([#2115](https://www.github.com/tauri-apps/tauri/pull/2115)) on 2021-06-28

## \[1.0.0-beta.3]

- Fixes `api::process::Command` events not firing consistently.
  - [8c13344f](https://www.github.com/tauri-apps/tauri/commit/8c13344f8f97bc67b8fcde68ce14da438f7c66ba) fix(core): command events not firing consistently ([#2082](https://www.github.com/tauri-apps/tauri/pull/2082)) on 2021-06-27
- Detect ESM scripts and inject the invoke key directly instead of using an IIFE.
  - [7765c7fa](https://www.github.com/tauri-apps/tauri/commit/7765c7fa281853ddfb26b6b17534df95eaede804) fix(core): invoke key injection on ES module, improve performance ([#2094](https://www.github.com/tauri-apps/tauri/pull/2094)) on 2021-06-27
- Improve invoke key code injection performance time rewriting code at compile time.
  - [7765c7fa](https://www.github.com/tauri-apps/tauri/commit/7765c7fa281853ddfb26b6b17534df95eaede804) fix(core): invoke key injection on ES module, improve performance ([#2094](https://www.github.com/tauri-apps/tauri/pull/2094)) on 2021-06-27
- Enfore uniqueness of window label.
  - [d18b5367](https://www.github.com/tauri-apps/tauri/commit/d18b5367a91fd53d408510b456897630c70abcca) feat(core): enfore label uniqueness, closes [#2067](https://www.github.com/tauri-apps/tauri/pull/2067) ([#2097](https://www.github.com/tauri-apps/tauri/pull/2097)) on 2021-06-27
- `Window` is now `Send + Sync` on Windows.
  - [fe32afcc](https://www.github.com/tauri-apps/tauri/commit/fe32afcc933920d6282ae1d63b041b182278a031) fix(core): `Window` must be `Send + Sync` on Windows, closes [#2078](https://www.github.com/tauri-apps/tauri/pull/2078) ([#2093](https://www.github.com/tauri-apps/tauri/pull/2093)) on 2021-06-27

## \[1.0.0-beta.2]

- Remove anonymous lifetimes on examples.
  - [c1f8e113](https://www.github.com/tauri-apps/tauri/commit/c1f8e11342941b846479d73bf50cb0a328ac3574) chore: remove unnecessary anonymous lifetimes ([#1829](https://www.github.com/tauri-apps/tauri/pull/1829)) on 2021-05-14

- Moves `shell`, `dialog::FileDialogBuilder` and `process::Command` APIs behind their allowlist feature flags.
  - [aab3e1f1](https://www.github.com/tauri-apps/tauri/commit/aab3e1f18b74efd63fdc227e84382ee6e9e63817) refactor(core): move api modules behind allowlist feature flags ([#1864](https://www.github.com/tauri-apps/tauri/pull/1864)) on 2021-05-19

- Adds `create_window` API to the `AppHandle` struct.
  - [95d518af](https://www.github.com/tauri-apps/tauri/commit/95d518afa14fe613302d7091622b4b115543e1f2) feat(core): expose `AppHandle`, add `create_window` API ([#1855](https://www.github.com/tauri-apps/tauri/pull/1855)) on 2021-05-18

- Adds a `handle` function to the `App` struct, which returns a `Send` handle to the app instance.
  - [95d518af](https://www.github.com/tauri-apps/tauri/commit/95d518afa14fe613302d7091622b4b115543e1f2) feat(core): expose `AppHandle`, add `create_window` API ([#1855](https://www.github.com/tauri-apps/tauri/pull/1855)) on 2021-05-18

- Use `attohttpc` on the HTTP API by default for bundle size optimization. `reqwest` is implemented behind the `reqwest-client` feature flag.
  - [17c7c439](https://www.github.com/tauri-apps/tauri/commit/17c7c4396ff2d5e13fc8726c2965b4e810fad6b9) refactor(core): use `attohttpc` by default ([#1861](https://www.github.com/tauri-apps/tauri/pull/1861)) on 2021-05-19

- Kill child processes spawned with `tauri::api::process::Command` on `tauri::App` drop. Can be skipped with `tauri::Builder#skip_cleanup_on_drop`.
  - [4bdc4066](https://www.github.com/tauri-apps/tauri/commit/4bdc406679363f460e39079cb26319c39ab8cac8) feat(core): kill sidecar child processes on App drop, closes [#1896](https://www.github.com/tauri-apps/tauri/pull/1896) ([#1932](https://www.github.com/tauri-apps/tauri/pull/1932)) on 2021-06-01

- Adds `clipboard` APIs (write and read text).
  - [285bf64b](https://www.github.com/tauri-apps/tauri/commit/285bf64bf9569efb2df904c69c6df405ff0d62e2) feat(core): add clipboard writeText and readText APIs ([#2035](https://www.github.com/tauri-apps/tauri/pull/2035)) on 2021-06-21
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23

- Allow accessing an `AppHandle` instance on a command through dependency injection.
  - [59784c7e](https://www.github.com/tauri-apps/tauri/commit/59784c7e5587ff10d7f0c37ac414499da42d0707) feat(core): implement `CommandArg` for `AppHandle` ([#2037](https://www.github.com/tauri-apps/tauri/pull/2037)) on 2021-06-21

- Fixes child processes messages not arriving until the subprocess is terminated.
  - [df21ffc6](https://www.github.com/tauri-apps/tauri/commit/df21ffc61f42ffb4dfde50c74a01c07a59a76e3e) fix(core): command mpsc usage, closes [#1935](https://www.github.com/tauri-apps/tauri/pull/1935) ([#1936](https://www.github.com/tauri-apps/tauri/pull/1936)) on 2021-06-01

- Adds `config` and `package_info` getters to the `App` and `AppHandle` structs.
  - [70fc87a7](https://www.github.com/tauri-apps/tauri/commit/70fc87a7ff5a149c0cb22c13afdf90f25ddafde8) feat(core): add `config` and `package_info` getters on App and AppHandle ([#2016](https://www.github.com/tauri-apps/tauri/pull/2016)) on 2021-06-20

- Expose mutable getters for the rest of the public `Context` getters.

- `pub fn assets_mut(&mut self) -> &mut Arc<A>`

- `pub fn default_window_icon_mut(&mut self) -> &mut Option<Vec<u8>>`

- `pub fn system_tray_icon_mut(&mut self) -> &mut Option<Icon>`

- `pub fn package_info_mut(&mut self) -> &mut tauri::api::PackageInfo`

- [754c2e76](https://www.github.com/tauri-apps/tauri/commit/754c2e766abe25da053236ce311318aa1410d106) feat(core): finish mutable getters for `Context` ([#1814](https://www.github.com/tauri-apps/tauri/pull/1814)) on 2021-05-13

- Adds `request_user_attention` API to the `Window` struct.
  - [7dcca6e9](https://www.github.com/tauri-apps/tauri/commit/7dcca6e9281182b11ad3d4a79871f09b30b9b419) feat(core): add `request_user_attention` API, closes [#2023](https://www.github.com/tauri-apps/tauri/pull/2023) ([#2026](https://www.github.com/tauri-apps/tauri/pull/2026)) on 2021-06-20

- Adds `show`, `hide`, `is_visible` and `toggle` APIs to the `MenuHandle`.
  - [954460c5](https://www.github.com/tauri-apps/tauri/commit/954460c5205d57444ef4b1412051fbedf3e38676) feat(core): MenuHandle `show`, `hide`, `is_visible` and `toggle` APIs ([#1958](https://www.github.com/tauri-apps/tauri/pull/1958)) on 2021-06-15

- Allow `dev_path` and `dist_dir` to be an array of root files and directories to embed.
  - [6ec54c53](https://www.github.com/tauri-apps/tauri/commit/6ec54c53b504eec3873d326b1a45e450227d46ed) feat(core): allow `dev_path`, `dist_dir` as array of paths, fixes [#1897](https://www.github.com/tauri-apps/tauri/pull/1897) ([#1926](https://www.github.com/tauri-apps/tauri/pull/1926)) on 2021-05-31

- Validate `tauri.conf.json > build > devPath` and `tauri.conf.json > build > distDir` values.
  - [e97846aa](https://www.github.com/tauri-apps/tauri/commit/e97846aae933cad5cba284a2a133ae7aaee1107c) feat(core): validate `devPath` and `distDir` values ([#1848](https://www.github.com/tauri-apps/tauri/pull/1848)) on 2021-05-17

- Set the Tauri window as parent for dialogs.
  - [abf78c58](https://www.github.com/tauri-apps/tauri/commit/abf78c5860cdc52fbfd2bc5dbca29a864e2da8f9) fix(core): set parent window handle on dialogs, closes [#1876](https://www.github.com/tauri-apps/tauri/pull/1876) ([#1889](https://www.github.com/tauri-apps/tauri/pull/1889)) on 2021-05-21

- Fallback to `index.html` on asset loading so router with history mode works.
  - [8a7921e5](https://www.github.com/tauri-apps/tauri/commit/8a7921e5cbcbecea16d4ad4a29ef05d984ad3110) fix(core): fallback to index.html on asset loading, closes [#2020](https://www.github.com/tauri-apps/tauri/pull/2020) [#2021](https://www.github.com/tauri-apps/tauri/pull/2021) ([#2022](https://www.github.com/tauri-apps/tauri/pull/2022)) on 2021-06-20

- Fixes custom protocol asset loader not decoding the percent-encoded path.
  - [c021968e](https://www.github.com/tauri-apps/tauri/commit/c021968eb81f541599a3ce08eebb44e92604e39a) fix(core): asset loading not decoding percent-encoded path, closes [#1879](https://www.github.com/tauri-apps/tauri/pull/1879) ([#1938](https://www.github.com/tauri-apps/tauri/pull/1938)) on 2021-06-01

- As some frameworks automatically add "true" as the value of the attribute, we need to check if it exists instead.
  - [23707764](https://www.github.com/tauri-apps/tauri/commit/23707764dc54037e9aaba3023f2509459e3a9a8d) Drag region attribute check ([#1907](https://www.github.com/tauri-apps/tauri/pull/1907)) on 2021-05-30

- Fixes build without the dialog Cargo features.
  - [49fb3b72](https://www.github.com/tauri-apps/tauri/commit/49fb3b72255993ea6f92e8d475021adac0c914a7) fix(core): build without dialog Cargo features ([#1973](https://www.github.com/tauri-apps/tauri/pull/1973)) on 2021-06-09

- Allow disabling the webview file drop handler (required to use drag and drop on the frontend on Windows) using the `tauri.conf.json > tauri > windows > fileDropEnabled` flag or the `WebviewAttributes#disable_file_drop_handler` method.
  - [9cd10df4](https://www.github.com/tauri-apps/tauri/commit/9cd10df4d520de12f3b13fe88cc1c1a1b4bd48bf) feat(core): allow disabling file drop handler, closes [#2014](https://www.github.com/tauri-apps/tauri/pull/2014) ([#2030](https://www.github.com/tauri-apps/tauri/pull/2030)) on 2021-06-21

- Fixes the HTTP API binary response serialization.
  - [47f75584](https://www.github.com/tauri-apps/tauri/commit/47f7558417cc654bdb1d018127e8900bc4eac622) fix(core): resolve HTTP API on non-ok status code, fix binary response, closes [#2046](https://www.github.com/tauri-apps/tauri/pull/2046) ([#2053](https://www.github.com/tauri-apps/tauri/pull/2053)) on 2021-06-23

- The `http` APIs now resolve the returned promise when the API call finishes with an error status code.
  - [47f75584](https://www.github.com/tauri-apps/tauri/commit/47f7558417cc654bdb1d018127e8900bc4eac622) fix(core): resolve HTTP API on non-ok status code, fix binary response, closes [#2046](https://www.github.com/tauri-apps/tauri/pull/2046) ([#2053](https://www.github.com/tauri-apps/tauri/pull/2053)) on 2021-06-23

- Run the `notification.show()` method on a dedicated async task to prevent a panic on Windows.
  - [86d0aaa0](https://www.github.com/tauri-apps/tauri/commit/86d0aaa021f146529a65228de9e07d5f4df5b099) fix(core): notification panic on Windows, closes [#917](https://www.github.com/tauri-apps/tauri/pull/917) ([#2011](https://www.github.com/tauri-apps/tauri/pull/2011)) on 2021-06-19

- Fixes HTTP API headers being overwritten when using the `reqwest` client.
  - [1006c1cf](https://www.github.com/tauri-apps/tauri/commit/1006c1cf3be9be054d0650f0d9787b5aee045f5a) fix(core): HTTP headers being overwritten by reqwest, closes [#2032](https://www.github.com/tauri-apps/tauri/pull/2032) ([#2036](https://www.github.com/tauri-apps/tauri/pull/2036)) on 2021-06-21

- Remove closed window from the `window.__TAURI__.__windows` array, used by the `window.getAll` API from `@tauri-apps/api`.
  - [ebaa33cb](https://www.github.com/tauri-apps/tauri/commit/ebaa33cb47e045af75140d818565d211f45946b4) fix(core): remove closed window from `window.__TAURI__.__windows` ([#2057](https://www.github.com/tauri-apps/tauri/pull/2057)) on 2021-06-23

- Panic on window getters usage on the main thread when the event loop is not running and document it.
  - [ab3eb44b](https://www.github.com/tauri-apps/tauri/commit/ab3eb44bac7a3bf73a4985df38ccc2b87a913be7) fix(core): deadlock on window getters, fixes [#1893](https://www.github.com/tauri-apps/tauri/pull/1893) ([#1998](https://www.github.com/tauri-apps/tauri/pull/1998)) on 2021-06-16

- Adds `focus` API to the WindowBuilder.
  - [5f351622](https://www.github.com/tauri-apps/tauri/commit/5f351622c7812ad1bb56ddb37364ccaa4124c24b) feat(core): add focus API to the WindowBuilder and WindowOptions, [#1737](https://www.github.com/tauri-apps/tauri/pull/1737) on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23

- **Breaking change:** The global shortcut API is now managed by `tao` so it cannot be accessed globally, the manager is now exposed on the `App` and `AppHandle` structs.
  - [3280c4aa](https://www.github.com/tauri-apps/tauri/commit/3280c4aa91e50a8ccdd561a8b48a12a4a13ea8d5) refactor(core): global shortcut is now provided by `tao` ([#2031](https://www.github.com/tauri-apps/tauri/pull/2031)) on 2021-06-21

- Hide `phf` crate export (not public API).
  - [cd1a299a](https://www.github.com/tauri-apps/tauri/commit/cd1a299a7d5a9bd164063a32c87a27762b71e9a8) chore(core): hide phf, closes [#1961](https://www.github.com/tauri-apps/tauri/pull/1961) ([#1964](https://www.github.com/tauri-apps/tauri/pull/1964)) on 2021-06-09

- (internal): allow `wry` dependency to be optional again while keeping default args.
  code that wishes to expose a struct with a default arg should use the `crate::manager::default_args!` macro to declare
  the struct, so that it can automatically feature-gate `DefaultArgs` behind using `wry`.
  - [3d8dcbbf](https://www.github.com/tauri-apps/tauri/commit/3d8dcbbf8188b9e96d6b03dc984ca022eebf53e4) fix(core): allow wry to be an optional dep again (fix [#1841](https://www.github.com/tauri-apps/tauri/pull/1841)) ([#1854](https://www.github.com/tauri-apps/tauri/pull/1854)) on 2021-05-17

- Adds `is_decorated` getter on Window.
  - [f58a2114](https://www.github.com/tauri-apps/tauri/commit/f58a2114fbfd5307c349f05c88f2e08fd8baa8aa) feat(core): add `is_decorated` Window getter on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23

- Adds `is_resizable` getter on Window.
  - [1e8af280](https://www.github.com/tauri-apps/tauri/commit/1e8af280c27f381828d6209722b10e889082fa00) feat(core): add `is_resizable` Window getter on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23

- Adds `is_visible` getter on Window.
  - [36506c96](https://www.github.com/tauri-apps/tauri/commit/36506c967de82bc7ff453d11e6104ecf66d7a588) feat(core): add `is_visible` API on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23

- Read `tauri.conf.json > tauri > bundle > icons` and use the first `.png` icon as window icon on Linux. Defaults to `icon/icon.png` if a PNG icon is not configured.
  - [40b717ed](https://www.github.com/tauri-apps/tauri/commit/40b717edc57288a1393fad0529390e101ab903c1) feat(core): set window icon on Linux, closes [#1922](https://www.github.com/tauri-apps/tauri/pull/1922) ([#1937](https://www.github.com/tauri-apps/tauri/pull/1937)) on 2021-06-01

- Adds `accelerator` method to the `CustomMenuItem` struct to define a keyboard shortcut for the menu item.
  - [034c2601](https://www.github.com/tauri-apps/tauri/commit/034c26013bce0c7bbe6db067ea7fd24a53a5c998) feat(core): add `accelerator` method to `CustomMenuItem` ([#2043](https://www.github.com/tauri-apps/tauri/pull/2043)) on 2021-06-22

- **Breaking change:** The `menu` API was not designed to have all the new features: submenus, item updates, disabled state... so we broke it before going to stable.
  - [f7e9fe8f](https://www.github.com/tauri-apps/tauri/commit/f7e9fe8f3f7c83532713be6cc4ef84e8b127c208) refactor(core): new system tray and window menu APIs, closes [#1898](https://www.github.com/tauri-apps/tauri/pull/1898) ([#1944](https://www.github.com/tauri-apps/tauri/pull/1944)) on 2021-06-04

- Adds a `PathResolver` struct to simplify the usage of the `tauri::api::path::{app_dir, resource_dir}` APIs, accessible through the `App` and `AppHandle` `path_resolver` methods.
  - [5ca462f6](https://www.github.com/tauri-apps/tauri/commit/5ca462f6ccc6c970a6f2c8c6c1bc0e3343a52bfb) feat(core): add path resolver API to the App and AppHandle structs ([#2015](https://www.github.com/tauri-apps/tauri/pull/2015)) on 2021-06-19

- Removes `image` dependency. For now only `.ico` icons on Windows are supported, and we'll implement other types on demand to optimize bundle size.
  - [1be37a3f](https://www.github.com/tauri-apps/tauri/commit/1be37a3f30ff789d9396ec9009f9c0dd0bb928a7) refactor(core): remove `image` dependency ([#1859](https://www.github.com/tauri-apps/tauri/pull/1859)) on 2021-05-18

- Remove window object from the `Manager` internal `HashMap` on close. This fixes the behavior of using `[App|AppHandle|Window]#get_window` after the window is closed (now correctly returns `None`).
  - [08c161c5](https://www.github.com/tauri-apps/tauri/commit/08c161c5e85d9f6392be55723b573030fa70637b) fix(core): remove window from HashMap on close ([#2024](https://www.github.com/tauri-apps/tauri/pull/2024)) on 2021-06-20

- Improve RPC security by requiring a numeric code to invoke commands. The codes are generated by the Rust side and injected into the app's code using a closure, so external scripts can't access the backend. This change doesn't protect `withGlobalTauri` (`window.__TAURI__`) usage.
  - [160fb052](https://www.github.com/tauri-apps/tauri/commit/160fb0529fd31d755574ae30fbdf01fa221a2acb) feat(core): improve RPC security, closes [#814](https://www.github.com/tauri-apps/tauri/pull/814) ([#2047](https://www.github.com/tauri-apps/tauri/pull/2047)) on 2021-06-22

- Adds `run_iteration` API to the `App` and return the app instance on the `build` method of the `Builder`. The `run_iteration` method runs the window event loop step by step, allowing Tauri to be run along other applications.
  - [8c0d0739](https://www.github.com/tauri-apps/tauri/commit/8c0d0739eebf7286b64a5380e922746411eb52c6) feat(core): add `run_iteration`, `parent_window` and `owner_window` APIs, closes [#1872](https://www.github.com/tauri-apps/tauri/pull/1872) ([#1874](https://www.github.com/tauri-apps/tauri/pull/1874)) on 2021-05-21

- The `run_on_main_thread` API now uses WRY's UserEvent, so it wakes the event loop.
  - [9bf82f0d](https://www.github.com/tauri-apps/tauri/commit/9bf82f0d9261808f58bdb5b5dbd6a255e5dcd333) fix(core): `run_on_main_thread` now wakes the event loop ([#1949](https://www.github.com/tauri-apps/tauri/pull/1949)) on 2021-06-04

- Adds `set_focus` API on Window.
  - [bb6992f8](https://www.github.com/tauri-apps/tauri/commit/bb6992f888196ca7c87bb2fe74ad2bd8bf393e05) feat(core): add `set_focus` window API, fixes [#1737](https://www.github.com/tauri-apps/tauri/pull/1737) on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23

- Adds `set_skip_taskbar` API on Window.
  - [e06aa277](https://www.github.com/tauri-apps/tauri/commit/e06aa277384450cfef617c0e57b0d5d403bb1e7f) feat(core): add `set_skip_taskbar` API on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23

- Adds `skip_taskbar` API to the WindowBuilder.
  - [5525b03a](https://www.github.com/tauri-apps/tauri/commit/5525b03a78a2232c650043fbd9894ce1553cad41) feat(core): add `skip_taskbar` API to the WindowBuilder/WindowOptions on 2021-05-30
  - [dee71ad5](https://www.github.com/tauri-apps/tauri/commit/dee71ad58349f699995cc9077b79032bacc6afcb) fix(workflows): update docs workflow syntax ([#2054](https://www.github.com/tauri-apps/tauri/pull/2054)) on 2021-06-23

- **Breaking change:** The `system_tray` and `on_system_tray_event` APIs were not designed to have all the new features: submenus, item updates, click events, positioning... so we broke it before going to stable.
  - [f7e9fe8f](https://www.github.com/tauri-apps/tauri/commit/f7e9fe8f3f7c83532713be6cc4ef84e8b127c208) refactor(core): new system tray and window menu APIs, closes [#1898](https://www.github.com/tauri-apps/tauri/pull/1898) ([#1944](https://www.github.com/tauri-apps/tauri/pull/1944)) on 2021-06-04

- Fix loading url containing URI fragment
  - [07fd9a92](https://www.github.com/tauri-apps/tauri/commit/07fd9a92dea695fc8178d34bb71e0745f21cd634) fix(core): add hash symbol in uri parse, closes [#1943](https://www.github.com/tauri-apps/tauri/pull/1943) ([#1947](https://www.github.com/tauri-apps/tauri/pull/1947)) on 2021-06-05

- Adds `Window#center` and `WindowBuilder#center` APIs.
  - [5cba6eb4](https://www.github.com/tauri-apps/tauri/commit/5cba6eb4d28d53f06855d60d4d0eae6b95233ccf) feat(core): add window `center` API, closes [#1822](https://www.github.com/tauri-apps/tauri/pull/1822) ([#1954](https://www.github.com/tauri-apps/tauri/pull/1954)) on 2021-06-05

- Adds window native handle getter (HWND on Windows).
  - [abf78c58](https://www.github.com/tauri-apps/tauri/commit/abf78c5860cdc52fbfd2bc5dbca29a864e2da8f9) fix(core): set parent window handle on dialogs, closes [#1876](https://www.github.com/tauri-apps/tauri/pull/1876) ([#1889](https://www.github.com/tauri-apps/tauri/pull/1889)) on 2021-05-21

## \[1.0.0-beta.1]

- Adds a mutable `config` getter on the `Context` struct.
  - [144d6b9](https://www.github.com/tauri-apps/tauri/commit/144d6b9d4d327debae13392715103a3208ce8a45) feat(core): add mutable `config` getter on the `Context` struct ([#1803](https://www.github.com/tauri-apps/tauri/pull/1803)) on 2021-05-12

## \[1.0.0-beta.0]

- **Breaking:** `api::path::resolve_path()` and `api::path::app_dir()` now takes the config as first argument and the `PackageInfo` as second argument.
  **Breaking:** `api::path::app_dir()` now resolves to `${configDir}/${config.tauri.bundle.identifier}`.
  - [428d50a](https://www.github.com/tauri-apps/tauri/commit/428d50add4da937325d189434dbaf3a02d745187) refactor(core): use bundle identifier on app dir, closes [#1693](https://www.github.com/tauri-apps/tauri/pull/1693) ([#1703](https://www.github.com/tauri-apps/tauri/pull/1703)) on 2021-05-04
  - [7bb7dda](https://www.github.com/tauri-apps/tauri/commit/7bb7dda7523bc1a81e890e0aeafffd35e3ed767f) refactor(core): resolve resource_dir using the package info ([#1762](https://www.github.com/tauri-apps/tauri/pull/1762)) on 2021-05-10

- Adds `manage` API to the `Builder` struct, which manages app state.
  - [8b6f3de](https://www.github.com/tauri-apps/tauri/commit/8b6f3de0ad47684e72a2ae5f884d8675acfaeeac) feat(core): add state management, closes [#1655](https://www.github.com/tauri-apps/tauri/pull/1655) ([#1665](https://www.github.com/tauri-apps/tauri/pull/1665)) on 2021-05-02

- **Breaking:** The `assets` field on the `tauri::Context` struct is now a `Arc<impl Assets>`.
  - [5110c70](https://www.github.com/tauri-apps/tauri/commit/5110c704be67e51d49fb83f3710afb593973dcf9) feat(core): allow users to access the Assets instance ([#1691](https://www.github.com/tauri-apps/tauri/pull/1691)) on 2021-05-03

- Only commands with a `async fn` are executed on a separate task. `#[command] fn command_name` runs on the main thread.
  - [bb8dafb](https://www.github.com/tauri-apps/tauri/commit/bb8dafbe1ea6edde7385631d41ac05e96a3309ef) feat(core): #\[command] return with autoref specialization workaround fix [#1672](https://www.github.com/tauri-apps/tauri/pull/1672) ([#1734](https://www.github.com/tauri-apps/tauri/pull/1734)) on 2021-05-09

- Renamed the `command` API module to `process`.
  - [b0bb796](https://www.github.com/tauri-apps/tauri/commit/b0bb796a42e2560233aea47ce6ced54ac238eb53) refactor: rename `command` mod to `process`, move restart_application ([#1667](https://www.github.com/tauri-apps/tauri/pull/1667)) on 2021-04-30

- Adds `options` argument to the shell command API (`env` and `cwd` configuration).
  - [721e98f](https://www.github.com/tauri-apps/tauri/commit/721e98f175567b360c86f30565ab1b9d08e7cf85) feat(core): add env, cwd to the command API, closes [#1634](https://www.github.com/tauri-apps/tauri/pull/1634) ([#1635](https://www.github.com/tauri-apps/tauri/pull/1635)) on 2021-04-28

- Improves support for commands returning `Result`.
  - [bb8dafb](https://www.github.com/tauri-apps/tauri/commit/bb8dafbe1ea6edde7385631d41ac05e96a3309ef) feat(core): #\[command] return with autoref specialization workaround fix [#1672](https://www.github.com/tauri-apps/tauri/pull/1672) ([#1734](https://www.github.com/tauri-apps/tauri/pull/1734)) on 2021-05-09

- Adds `status` and `output` APIs to the `tauri::api::process::Command` struct.
  - [d92fde7](https://www.github.com/tauri-apps/tauri/commit/d92fde75053d1f3fbac4f926c40a1e8cf29bf2a4) feat(core): add `output` and `status` APIs to the `Command` struct ([#1668](https://www.github.com/tauri-apps/tauri/pull/1668)) on 2021-05-02

- The `create_window` API callback now takes two arguments: the `WindowBuilder` and the `WebviewAttributes` and must return a tuple containing both values.
  - [c31f097](https://www.github.com/tauri-apps/tauri/commit/c31f0978c535f794fffb75a121e69a323e70b06e) refactor: update to wry 0.9 ([#1630](https://www.github.com/tauri-apps/tauri/pull/1630)) on 2021-04-28

- Reintroduce `csp` injection, configured on `tauri.conf.json > tauri > security > csp`.
  - [6132f3f](https://www.github.com/tauri-apps/tauri/commit/6132f3f4feb64488ef618f690a4f06adce864d91) feat(core): reintroduce CSP injection ([#1704](https://www.github.com/tauri-apps/tauri/pull/1704)) on 2021-05-04

- Adds the default types used with `Builder::default()` to items that expose `Params` in their type. This allows you to
  skip specifying a generic parameter to types like `Window<P>` if you use the default type.
  - [27a7810](https://www.github.com/tauri-apps/tauri/commit/27a78107673b63b6dad42fcf2bc8b7acd90b6ec4) feat(core): add default Args to all types exposing Params ([#1777](https://www.github.com/tauri-apps/tauri/pull/1777)) on 2021-05-11

- Change draggable region element detection from `drag-region` class to `data-tauri-drag-region` attribute.
  - [4f1e87f](https://www.github.com/tauri-apps/tauri/commit/4f1e87f87bbd4e094116b83edff448847da178ea) refactor(core): change drag element detection to data attr, fixes [#1656](https://www.github.com/tauri-apps/tauri/pull/1656) ([#1659](https://www.github.com/tauri-apps/tauri/pull/1659)) on 2021-04-29

- Emit `tauri://resize`, `tauri://move`, `tauri://close-requested`, `tauri://destroyed`, `tauri://focus`, `tauri://blur` and `tauri://scale-change` events to the window.
  - [9c10ccf](https://www.github.com/tauri-apps/tauri/commit/9c10ccf8d30af92cb90044a732e904c53507771a) feat(core) window events, closes [#1523](https://www.github.com/tauri-apps/tauri/pull/1523) ([#1726](https://www.github.com/tauri-apps/tauri/pull/1726)) on 2021-05-06

- The event `emit` function payload type is now `impl Serialize` instead of `Option<impl Serialize>`.
  - [4687538](https://www.github.com/tauri-apps/tauri/commit/4687538987af7638e8625342f2e3d065771c12c7) refactor(core): drop `Option` payload type on `event::emit` ([#1760](https://www.github.com/tauri-apps/tauri/pull/1760)) on 2021-05-09

- Update `tauri-hotkey` to v0.1.2, fixing a compilation issue on 32-bit platforms.
  - [92a01a7](https://www.github.com/tauri-apps/tauri/commit/92a01a7cab6d55f368b60a0d6bcc96d2847b2a81) chore(deps): bump tauri-hotkey to 0.1.2 ([#1701](https://www.github.com/tauri-apps/tauri/pull/1701)) on 2021-05-04

- Implemented window menus APIs.
  - [41d5d6a](https://www.github.com/tauri-apps/tauri/commit/41d5d6aff29750beca7263a9c186bf209388b8ee) feat(core): window menus ([#1745](https://www.github.com/tauri-apps/tauri/pull/1745)) on 2021-05-08

- Added the \`#\[non_exhaustive] attribute where appropriate.
  - [e087f0f](https://www.github.com/tauri-apps/tauri/commit/e087f0f9374355ac4b4a48f94727ef8b26b1c4cf) feat: add `#[non_exhaustive]` attribute ([#1725](https://www.github.com/tauri-apps/tauri/pull/1725)) on 2021-05-05

- `Notification.requestPermission()` now returns `"denied"` when not allowlisted.
  `IsNotificationPermissionGranted` returns `false` when not allowlisted.
  - [8941790](https://www.github.com/tauri-apps/tauri/commit/8941790f98206adce441d7bdc42374af39edc786) fix(core): notification permission check when !allowlisted, closes [#1666](https://www.github.com/tauri-apps/tauri/pull/1666) ([#1677](https://www.github.com/tauri-apps/tauri/pull/1677)) on 2021-05-02

- Refactored the `Plugin` trait `initialize` and `extend_api` signatures.
  `initialize` now takes the `App` as first argument, and `extend_api` takes an `Invoke` instead of `InvokeMessage`.
  This adds support to managed state on plugins.
  - [8b6f3de](https://www.github.com/tauri-apps/tauri/commit/8b6f3de0ad47684e72a2ae5f884d8675acfaeeac) feat(core): add state management, closes [#1655](https://www.github.com/tauri-apps/tauri/pull/1655) ([#1665](https://www.github.com/tauri-apps/tauri/pull/1665)) on 2021-05-02
  - [1d6f418](https://www.github.com/tauri-apps/tauri/commit/1d6f41812925142eb40f1908d2498880ab4a6266) refactor(core): merge invoke items into single struct, allow ? ([#1683](https://www.github.com/tauri-apps/tauri/pull/1683)) on 2021-05-02

- `window.print()` now works on all platforms.
  - [56e74cc](https://www.github.com/tauri-apps/tauri/commit/56e74ccf748ef24075b1095170d764dcfda4ddeb) feat(core): ensure `window.print()`works on macOS ([#1738](https://www.github.com/tauri-apps/tauri/pull/1738)) on 2021-05-07

- **Breaking:** `Context` fields are now private, and is expected to be created through `Context::new(...)`.
  All fields previously available through `Context` are now public methods.
  - [5542359](https://www.github.com/tauri-apps/tauri/commit/55423590ddbf560684dab6a0214acf95aadfa8d2) refactor(core): Context fields now private, Icon used on all platforms ([#1774](https://www.github.com/tauri-apps/tauri/pull/1774)) on 2021-05-11

- `Settings` is now serialized using `bincode`.
  - [455c550](https://www.github.com/tauri-apps/tauri/commit/455c550f347fe09581b4440bb868cacbbbbe2ad2) refactor(core): `Settings` serialization using `bincode` ([#1758](https://www.github.com/tauri-apps/tauri/pull/1758)) on 2021-05-09

- The window management API was refactored: removed `setX`, `setY`, `setWidth`, `setHeight` APIs, renamed `resize` to `setSize` and the size and position APIs now allow defining both logical and physical values.
  - [6bfac86](https://www.github.com/tauri-apps/tauri/commit/6bfac866a703f1499a64237fb29b2625703f4e22) refactor(core): add window getters, physical & logical sizes/positions ([#1723](https://www.github.com/tauri-apps/tauri/pull/1723)) on 2021-05-05

- Removed the `tcp` module from `tauri::api`.
  - [e087f0f](https://www.github.com/tauri-apps/tauri/commit/e087f0f9374355ac4b4a48f94727ef8b26b1c4cf) feat: add `#[non_exhaustive]` attribute ([#1725](https://www.github.com/tauri-apps/tauri/pull/1725)) on 2021-05-05

- Removes the `with_window` attribute on the `command` macro. Tauri now infers it using the `CommandArg` trait.
  - [8b6f3de](https://www.github.com/tauri-apps/tauri/commit/8b6f3de0ad47684e72a2ae5f884d8675acfaeeac) feat(core): add state management, closes [#1655](https://www.github.com/tauri-apps/tauri/pull/1655) ([#1665](https://www.github.com/tauri-apps/tauri/pull/1665)) on 2021-05-02
  - [1d6f418](https://www.github.com/tauri-apps/tauri/commit/1d6f41812925142eb40f1908d2498880ab4a6266) refactor(core): merge invoke items into single struct, allow ? ([#1683](https://www.github.com/tauri-apps/tauri/pull/1683)) on 2021-05-02

- Move `restart_application` API from `app` module to `process` module.
  - [b0bb796](https://www.github.com/tauri-apps/tauri/commit/b0bb796a42e2560233aea47ce6ced54ac238eb53) refactor: rename `command` mod to `process`, move restart_application ([#1667](https://www.github.com/tauri-apps/tauri/pull/1667)) on 2021-04-30

- `tauri-runtime` crate initial release.
  - [665ec1d](https://www.github.com/tauri-apps/tauri/commit/665ec1d4a199ad06e369221da187dc838da71cbf) refactor: move runtime to `tauri-runtime` crate ([#1751](https://www.github.com/tauri-apps/tauri/pull/1751)) on 2021-05-09
  - [45a7a11](https://www.github.com/tauri-apps/tauri/commit/45a7a111e0cf9d9956d713cc9a99fa7a5313eec7) feat(core): add `tauri-wry` crate ([#1756](https://www.github.com/tauri-apps/tauri/pull/1756)) on 2021-05-09

- The `setup` Error type must be `Send`.
  - [e087f0f](https://www.github.com/tauri-apps/tauri/commit/e087f0f9374355ac4b4a48f94727ef8b26b1c4cf) feat: add `#[non_exhaustive]` attribute ([#1725](https://www.github.com/tauri-apps/tauri/pull/1725)) on 2021-05-05

- Simplify usage of app event and window label types. The following functions now
  accept references the `Tag` can be borrowed as. This means an `&str` can now be
  accepted for functions like `Window::emit`. This is a breaking change for the
  following items, which now need to take a reference. Additionally, type inference
  for `&"event".into()` will no longer work, but `&"event".to_string()` will. The
  solution for this is to now just pass `"event"` because `Borrow<str>` is implemented
  for the default event type `String`.

- **Breaking:** `Window::emit` now accepts `Borrow` for the event.

- **Breaking:** `Window::emit_others` now accepts `Borrow` for the event

- **Breaking:** `Window::trigger` now accepts `Borrow` for the event.

- **Breaking:** `Manager::emit_all` now accepts `Borrow` for the event.

- **Breaking:** `Manager::emit_to` now accepts `Borrow` for both the event and window label.

- **Breaking:** `Manager::trigger_global` now accepts `Borrow` for the event.

- **Breaking:** `Manager::get_window` now accepts `Borrow` for the window label.

- *(internal):* `trait tauri::runtime::tag::TagRef` helper for accepting tag references.
  Any time you want to accept a tag reference, that trait will handle requiring the reference
  to have all the necessary bounds, and generate errors when the exposed function doesn't
  set a bound like `P::Event: Borrow<E>`.

- [181e132](https://www.github.com/tauri-apps/tauri/commit/181e132aee895da23c1b63deb41a52e9910910cc) refactor(core): simplify usage of app event and window label types ([#1623](https://www.github.com/tauri-apps/tauri/pull/1623)) on 2021-04-27

- [a755d23](https://www.github.com/tauri-apps/tauri/commit/a755d23e1bd0a3d6a2b6a85ff94feaf5a1a3a60d) refactor(core): more bounds for better errors from [#1623](https://www.github.com/tauri-apps/tauri/pull/1623) ([#1632](https://www.github.com/tauri-apps/tauri/pull/1632)) on 2021-04-27

- `tauri-runtime-wry` initial release.
  - [45a7a11](https://www.github.com/tauri-apps/tauri/commit/45a7a111e0cf9d9956d713cc9a99fa7a5313eec7) feat(core): add `tauri-wry` crate ([#1756](https://www.github.com/tauri-apps/tauri/pull/1756)) on 2021-05-09

- Adds system tray support.
  - [c090927](https://www.github.com/tauri-apps/tauri/commit/c0909270216983bed47453ddf5902abf5082fe42) feat(core): system tray, closes [#157](https://www.github.com/tauri-apps/tauri/pull/157) ([#1749](https://www.github.com/tauri-apps/tauri/pull/1749)) on 2021-05-09

- Rename `Attributes` to `WindowBuilder`.
  - [c31f097](https://www.github.com/tauri-apps/tauri/commit/c31f0978c535f794fffb75a121e69a323e70b06e) refactor: update to wry 0.9 ([#1630](https://www.github.com/tauri-apps/tauri/pull/1630)) on 2021-04-28

- The `Window#create_window` API now has the same signature as `App#create_window`.
  - [dbd9b07](https://www.github.com/tauri-apps/tauri/commit/dbd9b078aaa53663f61318153ba3d50c7e554ad8) refactor(core): `create_window` API signature on the Window struct ([#1746](https://www.github.com/tauri-apps/tauri/pull/1746)) on 2021-05-08

- Adds `on_window_event` API to the `Window` struct.
  - [9c10ccf](https://www.github.com/tauri-apps/tauri/commit/9c10ccf8d30af92cb90044a732e904c53507771a) feat(core) window events, closes [#1523](https://www.github.com/tauri-apps/tauri/pull/1523) ([#1726](https://www.github.com/tauri-apps/tauri/pull/1726)) on 2021-05-06

- Adds window getters.
  - [6bfac86](https://www.github.com/tauri-apps/tauri/commit/6bfac866a703f1499a64237fb29b2625703f4e22) refactor(core): add window getters, physical & logical sizes/positions ([#1723](https://www.github.com/tauri-apps/tauri/pull/1723)) on 2021-05-05

- Update `wry` to v0.9.
  - [c31f097](https://www.github.com/tauri-apps/tauri/commit/c31f0978c535f794fffb75a121e69a323e70b06e) refactor: update to wry 0.9 ([#1630](https://www.github.com/tauri-apps/tauri/pull/1630)) on 2021-04-28

## \[1.0.0-beta-rc.4]

- Update `tauri-macros` and `tauri-utils` to `1.0.0-beta-rc.1`.

## \[1.0.0-beta-rc.3]

- `tauri::error::CreateWebview` now has the error string message attached.
  - [7471e34](https://www.github.com/tauri-apps/tauri/commit/7471e347d3b23b7604c19040b0d989da8f48cb91) feat(core): add error message on `error::CreateWebview` ([#1602](https://www.github.com/tauri-apps/tauri/pull/1602)) on 2021-04-23
- If the dialog `defaultPath` is a file, use it as starting file path.
  - [aa7e273](https://www.github.com/tauri-apps/tauri/commit/aa7e2738ccafd8e4f5df866206f12888f6db8973) feat: use `rfd::FileDialog#set_file_name` if `default_path` is a file ([#1598](https://www.github.com/tauri-apps/tauri/pull/1598)) on 2021-04-23
- Validate dialog option `defaultPath` - it must exists.
  - [cfa74eb](https://www.github.com/tauri-apps/tauri/commit/cfa74ebf68de96cf46bc9471c61f9a84dd0be9ee) feat(core): validate dialog `default_path` (it must exist) ([#1599](https://www.github.com/tauri-apps/tauri/pull/1599)) on 2021-04-23
- Expose `async_runtime` module.
  - [d3fdeb4](https://www.github.com/tauri-apps/tauri/commit/d3fdeb45184d9aed8405ded53607a7cca979275e) feat(core): expose `async_runtime` module ([#1576](https://www.github.com/tauri-apps/tauri/pull/1576)) on 2021-04-21
- Expose `PageLoadPayload` struct.
  - [5e65b76](https://www.github.com/tauri-apps/tauri/commit/5e65b768e5930708695512260faf8c12d679c04e) fix(core): expose `PageLoadPayload` struct ([#1590](https://www.github.com/tauri-apps/tauri/pull/1590)) on 2021-04-22
- Fixes the Message `command` name value on plugin invoke handler.
  - [422dd5e](https://www.github.com/tauri-apps/tauri/commit/422dd5e2a0a03bb1556915c78f110bfab092c874) fix(core): command name on plugin invoke handler ([#1577](https://www.github.com/tauri-apps/tauri/pull/1577)) on 2021-04-21
- Allow `window.__TAURI__.invoke` to be moved to another variable.
  - [be65f04](https://www.github.com/tauri-apps/tauri/commit/be65f04db7d2fce23477156ebba368a897ceee3c) fix(core): make window.**TAURI**.invoke context free, fixes [#1547](https://www.github.com/tauri-apps/tauri/pull/1547) ([#1565](https://www.github.com/tauri-apps/tauri/pull/1565)) on 2021-04-21
- Make sure custom protocol is treated as secure content on macOS.
  - [5909c1e](https://www.github.com/tauri-apps/tauri/commit/5909c1e01437e10c45694c24f9037f4b176a03ec) Make sure custom protocol is handled as secure context on macOS ([#1551](https://www.github.com/tauri-apps/tauri/pull/1551)) on 2021-04-22
- Fixes macOS shortcut modifiers keycodes.
  - [ceadf2f](https://www.github.com/tauri-apps/tauri/commit/ceadf2f556f5f327b34f8fdd01e5e07969182b13) fix(core): macos shortcut modifiers, closes [#1542](https://www.github.com/tauri-apps/tauri/pull/1542) ([#1560](https://www.github.com/tauri-apps/tauri/pull/1560)) on 2021-04-21
- Adds APIs to determine global and webview-specific URI scheme handlers.
  - [938fb62](https://www.github.com/tauri-apps/tauri/commit/938fb624f5cc0f2a4499ea67cd30b014a18a6526) feat(core): expose custom protocol handler APIs ([#1553](https://www.github.com/tauri-apps/tauri/pull/1553)) on 2021-04-21
  - [a868cb7](https://www.github.com/tauri-apps/tauri/commit/a868cb71762268aa7b78af26622c900bddf3344c) refactor(core): clear `uri_scheme_protocol` registration function names ([#1617](https://www.github.com/tauri-apps/tauri/pull/1617)) on 2021-04-25
- The package info APIs now checks the `package` object on `tauri.conf.json`.
  - [8fd1baf](https://www.github.com/tauri-apps/tauri/commit/8fd1baf69b14bb81d7be9d31605ed7f02058b392) fix(core): pull package info from tauri.conf.json if set ([#1581](https://www.github.com/tauri-apps/tauri/pull/1581)) on 2021-04-22
- Change plugin trait `initialization` return type to `std::result::Result<(), Box<dyn std::error::Error>>`.
  - [508eddc](https://www.github.com/tauri-apps/tauri/commit/508eddc78458cd7ff51259ed733fe8e6f206e293) refactor(core): plugin initialization return value ([#1575](https://www.github.com/tauri-apps/tauri/pull/1575)) on 2021-04-21
- Fixes `sidecar` Command API.
  - [99307d0](https://www.github.com/tauri-apps/tauri/commit/99307d02c3c28ce10ba418873ac02ce267af4f4f) fix(core): sidecar command path ([#1584](https://www.github.com/tauri-apps/tauri/pull/1584)) on 2021-04-22
- Set LocalStorage and IndexedDB files path on Linux to `$HOME/.local/${bundleIdentifier}`.
  - [5f033db](https://www.github.com/tauri-apps/tauri/commit/5f033db41cf6b043d9d2b4debe8b10bdc4633c58) feat(core): use bundle identifier on user data path ([#1580](https://www.github.com/tauri-apps/tauri/pull/1580)) on 2021-04-22
- Use bundle identifier instead of `Tauri` for user data path on Windows.
  - [5f033db](https://www.github.com/tauri-apps/tauri/commit/5f033db41cf6b043d9d2b4debe8b10bdc4633c58) feat(core): use bundle identifier on user data path ([#1580](https://www.github.com/tauri-apps/tauri/pull/1580)) on 2021-04-22

## \[1.0.0-beta-rc.2]

- Prevent "once" events from being able to be called multiple times.

- `Window::trigger(/*...*/)` is now properly `pub` instead of `pub(crate)`.

- `Manager::once_global(/*...*/)` now returns an `EventHandler`.

- `Window::once(/*...*/)` now returns an `EventHandler`.

- (internal) `event::Listeners::trigger(/*...*/)` now handles removing "once" events.

- [ece243d](https://www.github.com/tauri-apps/tauri/commit/ece243d17c9c3ef8d2ba8e3b25b872aa6ea0b6ab) don't remove once listener on new thread ([#1506](https://www.github.com/tauri-apps/tauri/pull/1506)) on 2021-04-14

- Window and global events can now be nested inside event handlers. They will run as soon
  as the event handler closure is finished in the order they were called. Previously, calling
  events inside an event handler would produce a deadlock.

Note: The order that event handlers are called when triggered is still non-deterministic.

- [e447b8e](https://www.github.com/tauri-apps/tauri/commit/e447b8e0e6198c8972bae25625bb409850cb686b) allow event listeners to be nested ([#1513](https://www.github.com/tauri-apps/tauri/pull/1513)) on 2021-04-15

## \[1.0.0-beta-rc.1]

- Missing the `files` property in the package.json which mean that the `dist` directory was not published and used.
  - Bumped due to a bump in api.
  - [b2569a7](https://www.github.com/tauri-apps/tauri/commit/b2569a729a3caa88bdba62abc31f0665e1323aaa) fix(js-api): dist ([#1498](https://www.github.com/tauri-apps/tauri/pull/1498)) on 2021-04-15

## \[1.0.0-beta-rc.0]

- internal refactoring of `Params` to allow for easier usage without a private trait with only 1 implementor.
  `ParamsPrivate` -> `ParamsBase`
  `ManagerPrivate` -> `ManagerBase`
  (new) `Args`, crate only. Now implements `Params`/`ParamsBase`.
  `App` and `Window` use `WindowManager` directly
- [ec27ca8](https://www.github.com/tauri-apps/tauri/commit/ec27ca81fe721e0b08ed574073547250b7a8153a) refactor(tauri): remove private params trait methods ([#1484](https://www.github.com/tauri-apps/tauri/pull/1484)) on 2021-04-14
- Updated `wry`, fixing an issue with the draggable region.
  - [f2d24ef](https://www.github.com/tauri-apps/tauri/commit/f2d24ef2fbd95ec7d3433ba651964f4aa3b7f48c) chore(deps): update wry ([#1482](https://www.github.com/tauri-apps/tauri/pull/1482)) on 2021-04-14
- Now Tauri commands always returns Promise<T>.
  - [ea73325](https://www.github.com/tauri-apps/tauri/commit/ea7332539d100bd63f93396101ffa01ff73c924b) refactor(core): all API are now promise based ([#1239](https://www.github.com/tauri-apps/tauri/pull/1239)) on 2021-02-16
- Rename macOS bundle settings from `osx` to `macOS`.
  - [080f639](https://www.github.com/tauri-apps/tauri/commit/080f6391bac4fd59e9e71b9785d7a2f835703805) refactor(bundler): specific settings on dedicated structs, update README ([#1380](https://www.github.com/tauri-apps/tauri/pull/1380)) on 2021-03-25
- The shell process spawning API was rewritten and now includes stream access.
  - [3713066](https://www.github.com/tauri-apps/tauri/commit/3713066e451bd30d0cc6f57bb437f08276f4c4ad) refactor(core): rewrite shell execute API, closes [#1229](https://www.github.com/tauri-apps/tauri/pull/1229) ([#1408](https://www.github.com/tauri-apps/tauri/pull/1408)) on 2021-03-31
- The Tauri files are now read on the app space instead of the `tauri` create.
  Also, the `AppBuilder` `build` function now returns a Result.
  - [e02c941](https://www.github.com/tauri-apps/tauri/commit/e02c9419cb8c66f4e43ed598d2fc74d4b19384ec) refactor(tauri): support for building without environmental variables ([#850](https://www.github.com/tauri-apps/tauri/pull/850)) on 2021-02-09
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- Tauri now uses explicit Error variants with `thiserror` instead of relying on `anyhow`.
  - [156a0ad](https://www.github.com/tauri-apps/tauri/commit/156a0ad5cb0a152eaa0dd038a6b3dba68f03eb21) refactor(tauri): use explicit error types instead of anyhow ([#1209](https://www.github.com/tauri-apps/tauri/pull/1209)) on 2021-02-10
- Align HTTP API types with the [documentation](https://tauri.studio/en/docs/api/js#http).
  - [2fc39fc](https://www.github.com/tauri-apps/tauri/commit/2fc39fc341771431078c20a95fa6b2affe5155c9) fix(api/http): correct types ([#1360](https://www.github.com/tauri-apps/tauri/pull/1360)) on 2021-03-17
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- Replace `\` with `\\` in css assets that are lazy loaded. Since these are injected in a template literal, backslashes must be escaped. Backslashes are sometimes used for octal sequences in CSS.
  - [4491c70](https://www.github.com/tauri-apps/tauri/commit/4491c707907a6a931fd8c057c2baeb0b9e6db1d8) fix(tauri/asset): escape octal sequences in css ([#1166](https://www.github.com/tauri-apps/tauri/pull/1166)) on 2021-01-30
- Replaces the embedded-server mode with Wry's custom protocol feature. This allows assets to be transferred to the webview directly, instead of through a localhost server.
  - [0c691f4](https://www.github.com/tauri-apps/tauri/commit/0c691f40a338be184a4dd2c84d6e5d0b0ed6ee4b) feat(core): Use Wry custom protocol instead of embedded server ([#1296](https://www.github.com/tauri-apps/tauri/pull/1296)) on 2021-02-25
- The `message` and `ask` dialogs now use `tinyfiledialogs-rs` instead of `tauri-dialog-rs`.
  - [6eee355](https://www.github.com/tauri-apps/tauri/commit/6eee355a12ead3ac9cb4be0c98c1cfe5c0611291) refactor(core): use tinyfiledialogs-rs for message/confirmation dialogs ([#1255](https://www.github.com/tauri-apps/tauri/pull/1255)) on 2021-02-17
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- Refactor the event callback payload and return an unlisten function on the `listen` API.
  - [b670ec5](https://www.github.com/tauri-apps/tauri/commit/b670ec55f2b7389b8a2f8c965d4fe1e0cb46e6dc) refactor(core): add `unlisten`, `once` APIs to the event system ([#1359](https://www.github.com/tauri-apps/tauri/pull/1359)) on 2021-03-16
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- Adds `unlisten` and `once` APIs on the Rust event system.
  - [b670ec5](https://www.github.com/tauri-apps/tauri/commit/b670ec55f2b7389b8a2f8c965d4fe1e0cb46e6dc) refactor(core): add `unlisten`, `once` APIs to the event system ([#1359](https://www.github.com/tauri-apps/tauri/pull/1359)) on 2021-03-16
- The `tauri::event` module has been moved to a Webview manager API.
  - [07208df](https://www.github.com/tauri-apps/tauri/commit/07208dff6c1e8cff7c10780f4f7f8cee9de44a2e) feat(core): add mult-window support ([#1217](https://www.github.com/tauri-apps/tauri/pull/1217)) on 2021-02-11
- The file dialog API now uses [rfd](https://github.com/PolyMeilex/rfd). The filter option is now an array of `{ name: string, extensions: string[] }`.
  - [2326bcd](https://www.github.com/tauri-apps/tauri/commit/2326bcd399411f7f0eabdb7ade910be473adadae) refactor(core): use `nfd` for file dialogs, closes [#1251](https://www.github.com/tauri-apps/tauri/pull/1251) ([#1257](https://www.github.com/tauri-apps/tauri/pull/1257)) on 2021-02-18
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- Tauri now emits events on file drops on the webview window.
  - [2db901e](https://www.github.com/tauri-apps/tauri/commit/2db901e744f51cd4296ddec4352d7a51c859b85b) feat(core): add file drop handler ([#1352](https://www.github.com/tauri-apps/tauri/pull/1352)) on 2021-03-12
- Fixes `resource_dir` resolution on AppImage.
  - [bd1df5d](https://www.github.com/tauri-apps/tauri/commit/bd1df5d80431f5de4cd905ffaf7f3f2628d6b8ab) fix: get correct resource dir in AppImge (fix [#1308](https://www.github.com/tauri-apps/tauri/pull/1308)) ([#1333](https://www.github.com/tauri-apps/tauri/pull/1333)) on 2021-03-12
- Fixed missing 'App' variant & string promise instead of void promise.
  - [44fc65c](https://www.github.com/tauri-apps/tauri/commit/44fc65c723f638f2a1b2ecafb79b32d509ed2f35) Fixing TS API typings ([#1451](https://www.github.com/tauri-apps/tauri/pull/1451)) on 2021-04-11
  - [aea6145](https://www.github.com/tauri-apps/tauri/commit/aea614587bddab930d552512b54e18624fbf573e) refactor(repo): add /tooling folder ([#1457](https://www.github.com/tauri-apps/tauri/pull/1457)) on 2021-04-12
- The HTTP API was improved with client caching and better payload and response types.
  - [a7bc472](https://www.github.com/tauri-apps/tauri/commit/a7bc472e994730071f960d09a12ac85296a080ae) refactor(core): improve HTTP API, closes [#1098](https://www.github.com/tauri-apps/tauri/pull/1098) ([#1237](https://www.github.com/tauri-apps/tauri/pull/1237)) on 2021-02-15
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- Added new Javascript API to extract `name`, `version`, `tauri version` from the running application. We exposed `relaunch` and `exit` as well to control your application state.
  - [e511d39](https://www.github.com/tauri-apps/tauri/commit/e511d3991041a974273a2674a9bf60230b7519ee) feat(api): Expose application metadata and functions to JS api - fix [#1387](https://www.github.com/tauri-apps/tauri/pull/1387) ([#1445](https://www.github.com/tauri-apps/tauri/pull/1445)) on 2021-04-08
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- The event listener `once` kind was moved to a dedicated function.
  - [372036c](https://www.github.com/tauri-apps/tauri/commit/372036ce20ac7f103dea05bae7e8686858d096a4) refactor(api): move event's `once` to its own function ([#1276](https://www.github.com/tauri-apps/tauri/pull/1276)) on 2021-02-23
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- Use ``JSON.parse(String.raw`{arg}`)`` for communicating serialized JSON objects and arrays < 1 GB to the Webview from Rust.

https://github.com/GoogleChromeLabs/json-parse-benchmark

- [eeb2030](https://www.github.com/tauri-apps/tauri/commit/eeb20308acdd83029abb6ce94fb5d0c896759060) Use JSON.parse instead of literal JS for callback formatting ([#1370](https://www.github.com/tauri-apps/tauri/pull/1370)) on 2021-04-07
- [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- Update all code files to have our license header.
  - [bf82136](https://www.github.com/tauri-apps/tauri/commit/bf8213646689175f8a158b956911f3a43e360690) feat(license): SPDX Headers ([#1449](https://www.github.com/tauri-apps/tauri/pull/1449)) on 2021-04-11
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
  - [aea6145](https://www.github.com/tauri-apps/tauri/commit/aea614587bddab930d552512b54e18624fbf573e) refactor(repo): add /tooling folder ([#1457](https://www.github.com/tauri-apps/tauri/pull/1457)) on 2021-04-12
- Added support to multiple windows.
  - [07208df](https://www.github.com/tauri-apps/tauri/commit/07208dff6c1e8cff7c10780f4f7f8cee9de44a2e) feat(core): add mult-window support ([#1217](https://www.github.com/tauri-apps/tauri/pull/1217)) on 2021-02-11
- Adds `productName` and `version` configs on `tauri.conf.json > package`.
  - [5b3d9b2](https://www.github.com/tauri-apps/tauri/commit/5b3d9b2c07da766f81981ba7c4961cd354d51340) feat(config): allow setting product name and version on tauri.conf.json ([#1358](https://www.github.com/tauri-apps/tauri/pull/1358)) on 2021-03-22
  - [aea6145](https://www.github.com/tauri-apps/tauri/commit/aea614587bddab930d552512b54e18624fbf573e) refactor(repo): add /tooling folder ([#1457](https://www.github.com/tauri-apps/tauri/pull/1457)) on 2021-04-12
- Plugins are now configurable through a `tauri.conf.json > "plugins" > $pluginName` object.
  - [2058cc3](https://www.github.com/tauri-apps/tauri/commit/2058cc39c9ac9d9d442802db2c2f3be34a85acc4) feat(tauri): add plugin `initialize` (with config) API, run in parallel ([#1194](https://www.github.com/tauri-apps/tauri/pull/1194)) on 2021-02-10
- Renamed the `Plugin` trait `init_script` to `initialization_script`.
  - [5c5d8f8](https://www.github.com/tauri-apps/tauri/commit/5c5d8f811fc094cca1b441ff966f15c7bf5d2e90) refactor(tauri): rename `init_script` to `initialization_script` ([#1200](https://www.github.com/tauri-apps/tauri/pull/1200)) on 2021-02-10
- The plugin instance is now mutable and must be `Send`.
  - [fb607ee](https://www.github.com/tauri-apps/tauri/commit/fb607ee97a912d1e23f6d7dd6dd3c28aac9b4527) refactor(tauri): plugin trait with mutable references ([#1197](https://www.github.com/tauri-apps/tauri/pull/1197)) on 2021-02-10
  - [1318ffb](https://www.github.com/tauri-apps/tauri/commit/1318ffb47c5f2fb696d6323fbcee4f840396c6b3) refactor(core): remove async from app hooks, add InvokeMessage type ([#1392](https://www.github.com/tauri-apps/tauri/pull/1392)) on 2021-03-26
- Fixes the event system usage on the plugin `ready` hook.
  - [23132ac](https://www.github.com/tauri-apps/tauri/commit/23132acf765ab8b6a37b74151a4c175b68390657) fix(tauri): run plugin::ready without webview.dispatch ([#1164](https://www.github.com/tauri-apps/tauri/pull/1164)) on 2021-01-29
- The `allowlist` configuration now has one object per module.
  - [e0be59e](https://www.github.com/tauri-apps/tauri/commit/e0be59ea26df17fe2e31224759f21fb1d0cbdfd3) refactor(core): split allowlist configuration per module ([#1263](https://www.github.com/tauri-apps/tauri/pull/1263)) on 2021-02-20
- The Tauri script is now injected with the webview `init` API, so it is available after page changes.
  - [4412b7c](https://www.github.com/tauri-apps/tauri/commit/4412b7c438c2b10e519bf8b696e3ef827e9091f2) refactor(tauri): inject script with webview init API ([#1186](https://www.github.com/tauri-apps/tauri/pull/1186)) on 2021-02-05
  - [8bdd894](https://www.github.com/tauri-apps/tauri/commit/8bdd8949254d63bfc57ad67ce2592d40a0b44bf8) refactor(core): move bundle script to /tauri crate ([#1377](https://www.github.com/tauri-apps/tauri/pull/1377)) on 2021-03-23
- Removed the `no-server` mode, the `inliner`, the `dev` server proxy and the `loadAsset` API.
  - [84d7cda](https://www.github.com/tauri-apps/tauri/commit/84d7cdae632eeb02a66f8d1d7577adfa65917a34) refactor(core): remove `no-server` and its APIs ([#1215](https://www.github.com/tauri-apps/tauri/pull/1215)) on 2021-02-11
  - [aea6145](https://www.github.com/tauri-apps/tauri/commit/aea614587bddab930d552512b54e18624fbf573e) refactor(repo): add /tooling folder ([#1457](https://www.github.com/tauri-apps/tauri/pull/1457)) on 2021-04-12
- Adds a global shortcut API.
  - [855effa](https://www.github.com/tauri-apps/tauri/commit/855effadd9ebfb6bc1a3555ac7fc733f6f766b7a) feat(core): globalShortcut API ([#1232](https://www.github.com/tauri-apps/tauri/pull/1232)) on 2021-02-14
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
- Added `async` support to the Tauri Rust core on commit [#a169b67](https://github.com/tauri-apps/tauri/commit/a169b67ef0277b958bdac97e33c6e4c41b6844c3).
  - [2bf55f8](https://www.github.com/tauri-apps/tauri/commit/2bf55f80564f5c31d89384bd4a82dd55307f8c75) chore: add changefile on 2021-02-03
  - [e02c941](https://www.github.com/tauri-apps/tauri/commit/e02c9419cb8c66f4e43ed598d2fc74d4b19384ec) refactor(tauri): support for building without environmental variables ([#850](https://www.github.com/tauri-apps/tauri/pull/850)) on 2021-02-09
- Alpha version of tauri-updater. Please refer to the `README` for more details.
  - [6d70c8e](https://www.github.com/tauri-apps/tauri/commit/6d70c8e1e256fe839c4a947375bb529d7b4f7301) feat(updater): Alpha version ([#643](https://www.github.com/tauri-apps/tauri/pull/643)) on 2021-04-05
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
  - [aea6145](https://www.github.com/tauri-apps/tauri/commit/aea614587bddab930d552512b54e18624fbf573e) refactor(repo): add /tooling folder ([#1457](https://www.github.com/tauri-apps/tauri/pull/1457)) on 2021-04-12
- The Tauri integration with Webview was refactored to use traits, which allows custom implementations by developers and simplifies changes on the webview implementation.
  - [b9ce7b9](https://www.github.com/tauri-apps/tauri/commit/b9ce7b94c4eb027bcbbd4ee600b75a7407f108ca) refactor(tauri): Webview traits ([#1183](https://www.github.com/tauri-apps/tauri/pull/1183)) on 2021-02-05
- Added window management and window creation APIs.
  - [a3d6dff](https://www.github.com/tauri-apps/tauri/commit/a3d6dff2163c7a45842253edd81dbc62248dc65d) feat(core): window API ([#1225](https://www.github.com/tauri-apps/tauri/pull/1225)) on 2021-02-13
  - [641374b](https://www.github.com/tauri-apps/tauri/commit/641374b15343518cd835bd5ada811941c65dcf2e) feat(core): window creation at runtime ([#1249](https://www.github.com/tauri-apps/tauri/pull/1249)) on 2021-02-17
- Use [WRY](https://github.com/tauri-apps/wry) as Webview interface, thanks to @wusyong.
  - [99ecf7b](https://www.github.com/tauri-apps/tauri/commit/99ecf7bb3e8da6e611b57c6680a14b65179f8a35) feat(tauri): use WRY as webview engine ([#1190](https://www.github.com/tauri-apps/tauri/pull/1190)) on 2021-02-08

## \[0.11.1]

- Update webview-official dependency which fix compatibility on macOS.
  - [692312a](https://www.github.com/tauri-apps/tauri/commit/692312a0f51a05dd418d9cad553a695f3347b943) chore(deps) Update webview-official ([#1152](https://www.github.com/tauri-apps/tauri/pull/1152)) on 2021-01-24

## \[0.11.0]

- Match writeBinaryFile command name between js and rust
  - [486bd92](https://www.github.com/tauri-apps/tauri/commit/486bd920f899905bec0f690092aa1e3cac2c78f3) Fix: writeBinaryFile to call the correct command (fix [#1133](https://www.github.com/tauri-apps/tauri/pull/1133)) ([#1136](https://www.github.com/tauri-apps/tauri/pull/1136)) on 2021-01-06

## \[0.10.0]

- Adds missing APIs features from `allowlist` to the tauri crate's manifest file.
  - [2c0f09c](https://www.github.com/tauri-apps/tauri/commit/2c0f09c85c8a60c2fa304fb25174d5020663f0d7) fix(tauri) add missing API features, closes [#1023](https://www.github.com/tauri-apps/tauri/pull/1023) ([#1052](https://www.github.com/tauri-apps/tauri/pull/1052)) on 2020-10-17
  - [72996be](https://www.github.com/tauri-apps/tauri/commit/72996be1bd3eb878c4cf30bfec79058071c26d7a) apply version updates ([#1024](https://www.github.com/tauri-apps/tauri/pull/1024)) on 2020-10-21
- Adds a path resolution API (e.g. getting the download directory or resolving a path to the home directory).
  - [771e401](https://www.github.com/tauri-apps/tauri/commit/771e4019b8cfd1973015ffa632c9d6c6b82c5657) feat: Port path api to js ([#1006](https://www.github.com/tauri-apps/tauri/pull/1006)) on 2020-09-24
  - [72996be](https://www.github.com/tauri-apps/tauri/commit/72996be1bd3eb878c4cf30bfec79058071c26d7a) apply version updates ([#1024](https://www.github.com/tauri-apps/tauri/pull/1024)) on 2020-10-21
- Update minimum Rust version to 1.42.0 due to a dependency update.
  - [d13dcd9](https://www.github.com/tauri-apps/tauri/commit/d13dcd9fd8d30b1db147a78cecb878e924382274) chore(deps) Update Tauri Bundler ([#1045](https://www.github.com/tauri-apps/tauri/pull/1045)) on 2020-10-17
  - [72996be](https://www.github.com/tauri-apps/tauri/commit/72996be1bd3eb878c4cf30bfec79058071c26d7a) apply version updates ([#1024](https://www.github.com/tauri-apps/tauri/pull/1024)) on 2020-10-21
- Minimum Rust version updated to 1.47.0. Run `$ rustup update` to update to the latest version.
  - [b4544b6](https://www.github.com/tauri-apps/tauri/commit/b4544b63f268dc6f3f47a4bfbad5d72cceee8698) chore(deps) Update Tauri API ([#1072](https://www.github.com/tauri-apps/tauri/pull/1072)) on 2020-11-07

## \[0.9.2]

- Bump all deps as noted in #975, #976, #977, #978, and #979.
  - [06dd75b](https://www.github.com/tauri-apps/tauri/commit/06dd75b68a15d388808c51ae2bf50554ae761d9d) chore: bump all js/rust deps ([#983](https://www.github.com/tauri-apps/tauri/pull/983)) on 2020-08-20

## \[0.9.1]

- Adjust payload formatting to handle multibyte characters in front-end message
  payloads.
  \- [df70ca5](https://www.github.com/tauri-apps/tauri/commit/df70ca51965665952a74161cc6eb1ff19eae45e2) Fix [#912](https://www.github.com/tauri-apps/tauri/pull/912) multibyte character breaks message ([#914](https://www.github.com/tauri-apps/tauri/pull/914)) on 2020-08-01

## \[0.9.0]

- Make sure CSS content loaded with the `loadAsset` API is inside a template string and not injected raw.
  - [e3e2e39](https://www.github.com/tauri-apps/tauri/commit/e3e2e3920833627400ee7a5b000dc6e51d8d332b) fix(tauri) ensure css content is loaded inside a string ([#884](https://www.github.com/tauri-apps/tauri/pull/884)) on 2020-07-22
  - [b96b1fb](https://www.github.com/tauri-apps/tauri/commit/b96b1fb6b8a4f565fb946847bb9a29d9d939e2cb) inject css with template string to allow for line breaks ([#894](https://www.github.com/tauri-apps/tauri/pull/894)) on 2020-07-25
- Pin the `tauri-api` dependency on the `tauri` crate so updates doesn't crash the build.
  - [ad717c6](https://www.github.com/tauri-apps/tauri/commit/ad717c6f33b4d6e20fbb13cbe30e06946dbb74f6) chore(tauri) pin tauri-api dep version ([#872](https://www.github.com/tauri-apps/tauri/pull/872)) on 2020-07-21
- Fixes the Webview initialization on Windows.
  - [4abd12c](https://www.github.com/tauri-apps/tauri/commit/4abd12c2a42b5ace8527114ab64da38f4486754f) fix(tauri) webview initialization on windows, fixes [#879](https://www.github.com/tauri-apps/tauri/pull/879) ([#885](https://www.github.com/tauri-apps/tauri/pull/885)) on 2020-07-23

## \[0.8.0]

- Use native dialog on `window.alert` and `window.confirm`.
  Since every communication with the webview is asynchronous, the `window.confirm` returns a Promise resolving to a boolean value.
  \- [0245833](https://www.github.com/tauri-apps/tauri/commit/0245833bb56d5462a4e1249eb1e2f9f5e477592d) feat(tauri) make `window.alert` and `window.confirm` available, fix [#848](https://www.github.com/tauri-apps/tauri/pull/848) ([#854](https://www.github.com/tauri-apps/tauri/pull/854)) on 2020-07-18
  \- [dac0ae9](https://www.github.com/tauri-apps/tauri/commit/dac0ae976ea1b419ed5af078d00106b1476dee04) chore(changes) add tauri-api to JS dialogs changefile on 2020-07-19
- The notification's `body` is now optional, closes #793.
  - [dac1db3](https://www.github.com/tauri-apps/tauri/commit/dac1db39831ecbcf23c630351d5753af01ccd500) fix(tauri) notification body optional, requestPermission() regression, closes [#793](https://www.github.com/tauri-apps/tauri/pull/793) ([#844](https://www.github.com/tauri-apps/tauri/pull/844)) on 2020-07-16
- Fixes a regression on the storage of requestPermission response.
  ß
  \- [dac1db3](https://www.github.com/tauri-apps/tauri/commit/dac1db39831ecbcf23c630351d5753af01ccd500) fix(tauri) notification body optional, requestPermission() regression, closes [#793](https://www.github.com/tauri-apps/tauri/pull/793) ([#844](https://www.github.com/tauri-apps/tauri/pull/844)) on 2020-07-16
- Plugin system added. You can hook into the webview lifecycle (`created`, `ready`) and extend the API adding logic to the `invoke_handler` by implementing the `tauri::plugin::Plugin` trait.
  - [78afee9](https://www.github.com/tauri-apps/tauri/commit/78afee9725e0e372f9de7edeaac523011a1c02a3) feat(tauri) add plugin system for rust ([#494](https://www.github.com/tauri-apps/tauri/pull/494)) on 2020-07-12
- Renaming `whitelist` to `allowlist` (see #645).
  - [a6bb3b5](https://www.github.com/tauri-apps/tauri/commit/a6bb3b59059e08a844d7bb2b43f3d1192954d890) refactor(tauri) rename `whitelist` to `allowlist`, ref [#645](https://www.github.com/tauri-apps/tauri/pull/645) ([#858](https://www.github.com/tauri-apps/tauri/pull/858)) on 2020-07-19
- Moving the webview implementation to [webview](https://github.com/webview/webview), with the [official Rust binding](https://github.com/webview/webview_rust).
  This is a breaking change.
  IE support has been dropped, so the `edge` object on `tauri.conf.json > tauri` no longer exists and you need to remove it.
  `webview.handle()` has been replaced with `webview.as_mut()`.
  \- [cd5b401](https://www.github.com/tauri-apps/tauri/commit/cd5b401707d709bf8212b0a4c34623f902ae40f9) feature: import official webview rust binding ([#846](https://www.github.com/tauri-apps/tauri/pull/846)) on 2020-07-18

## \[0.7.5]

- Fixes Edge blank screen on Windows when running tauri dev (Tauri crashing window due to Edge reloading app because of missing Content-Type header).
  - Bumped due to a bump in tauri-api.
  - [fedee83](https://www.github.com/tauri-apps/tauri/commit/fedee835e36daa4363b91aabd43143e8033c9a5c) fix(tauri.js) windows Edge blank screen on tauri dev ([#808](https://www.github.com/tauri-apps/tauri/pull/808)) on 2020-07-11

## \[0.7.4]

- Ignoring non UTF-8 characters on the loopback command output.
  - [f340b29](https://www.github.com/tauri-apps/tauri/commit/f340b2914dc9c3a94ca8606f4663964fa87b95ea) fix(tauri) addition to the previous commit on 2020-07-10

## \[0.7.3]

- Properly run the loopback command on Windows.
- Properly ignore the ${distDir}/index.html asset from the asset embbeding. Previously every asset with name matching /(.+)index.html$/g were ignored.

## \[0.7.2]

Bumped due to dependency.

## \[0.7.1]

- Fixes the assets embedding into the binary.

## \[0.7.0]

- The execute_promise and execute_promise_sync helpers now accepts any tauri::Result<T> where T: impl Serialize.
  This means that you do not need to serialize your response manually or deal with String quotes anymore.
  As part of this refactor, the event::emit function also supports impl Serialize instead of String.

## \[0.6.2]

- Fixes the Windows build with the latest Windows SDK.

## \[0.6.1] - (Not Published)

## \[0.6.0]

- Adds a command line interface option to tauri apps, configurable under tauri.conf.json > tauri > cli.
- Fixes no-server mode not running on another machine due to fs::read_to_string usage instead of the include_str macro.
  Build no longer fails when compiling without environment variables, now the app will show an error.
- Adds desktop notifications API.
- Properly reflect tauri.conf.json changes on app when running tauri dev.
