# Changelog

## \[1.0.0-rc.3]

- Properly create the updater bundle for all generated Microsoft Installer files.
  - [6a6f1e7b](https://www.github.com/tauri-apps/tauri/commit/6a6f1e7bf922bc6fa56db2e8e40affbb0849731d) fix(bundler): build updater bundle for all .msi files ([#3520](https://www.github.com/tauri-apps/tauri/pull/3520)) on 2022-02-24
- Fixes the Microsoft Installer launch path.
  - [8d699283](https://www.github.com/tauri-apps/tauri/commit/8d699283a4741c83b476fb079dc0333c7bf4f919) fix(bundler): Auto-launch app from install location, closes [#3547](https://www.github.com/tauri-apps/tauri/pull/3547) ([#3553](https://www.github.com/tauri-apps/tauri/pull/3553)) on 2022-02-24

## \[1.0.0-rc.2]

- Fixes sidecar bundling on Windows.
  - [2ecbed8d](https://www.github.com/tauri-apps/tauri/commit/2ecbed8d59d9e1788170aa87b90ed9556a473425) fix(bundler): sidecar on Windows, closes [#3446](https://www.github.com/tauri-apps/tauri/pull/3446) ([#3482](https://www.github.com/tauri-apps/tauri/pull/3482)) on 2022-02-16

## \[1.0.0-rc.1]

- Change default value for the `freezePrototype` configuration to `false`.
  - Bumped due to a bump in tauri-utils.
  - [3a4c0160](https://www.github.com/tauri-apps/tauri/commit/3a4c01606184be762adee055ddac803de0d28527) fix(core): change default `freezePrototype` to false, closes [#3416](https://www.github.com/tauri-apps/tauri/pull/3416) [#3406](https://www.github.com/tauri-apps/tauri/pull/3406) ([#3423](https://www.github.com/tauri-apps/tauri/pull/3423)) on 2022-02-12

## \[1.0.0-rc.0]

- Provide a provider short name for macOS app notarization if your Apple developer account is connected to more than one team.
  - [8ab8d529](https://www.github.com/tauri-apps/tauri/commit/8ab8d529426b1ed7926daced16a45b077033bfe2) Fix [#3288](https://www.github.com/tauri-apps/tauri/pull/3288): Add provider_short_name for macOS ([#3289](https://www.github.com/tauri-apps/tauri/pull/3289)) on 2022-01-27

- Allow building AppImages on systems without FUSE setup.
  - [28dd9adb](https://www.github.com/tauri-apps/tauri/commit/28dd9adb266b97db0bf7179268269f8614ce78e8) feat(bundler): support building AppImage without FUSE ([#3259](https://www.github.com/tauri-apps/tauri/pull/3259)) on 2022-01-21

- Fixes AppImage crashes caused by missing WebKit runtime files.
  - [bec7833a](https://www.github.com/tauri-apps/tauri/commit/bec7833a6c29ed9d1a5ab53e1c2cdd80e66cd272) fix(bundler): bundle additional webkit files. patch absolute paths in libwebkit\*.so files. fixes [#2805](https://www.github.com/tauri-apps/tauri/pull/2805),[#2689](https://www.github.com/tauri-apps/tauri/pull/2689) ([#2940](https://www.github.com/tauri-apps/tauri/pull/2940)) on 2021-12-09

- Initialize the preselected installation path with the location of the previous installation.
  - [ac1dfd8c](https://www.github.com/tauri-apps/tauri/commit/ac1dfd8c3039d87bef1fa2d815876903d5cc07ae) feat(bundler): initialize msi install path with previous location ([#3158](https://www.github.com/tauri-apps/tauri/pull/3158)) on 2022-01-07

- Replaces usage of the nightly command `RUSTC_BOOTSTRAP=1 rustc -Z unstable-options --print target-spec-json` with the stable command `rustc --print cfg`, improving target triple detection.
  - [839daec7](https://www.github.com/tauri-apps/tauri/commit/839daec7ab79c3ff2f552dd7579069bc64e83625) fix(bundler): Use `arch` instead of `llvm_target`. fix [#3285](https://www.github.com/tauri-apps/tauri/pull/3285) ([#3286](https://www.github.com/tauri-apps/tauri/pull/3286)) on 2022-02-05

- Fixes a deadlock on the `ResourcePaths` iterator.
  - [4c1be451](https://www.github.com/tauri-apps/tauri/commit/4c1be451066612862363bc481910bd6c3da1e185) fix(bundler): deadlock on `ResourcePaths` iterator, closes [#3146](https://www.github.com/tauri-apps/tauri/pull/3146) ([#3152](https://www.github.com/tauri-apps/tauri/pull/3152)) on 2022-01-02

- Move the copying of resources and sidecars from `cli.rs` to `tauri-build` so using the Cargo CLI directly processes the files for the application execution in development.
  - [5eb72c24](https://www.github.com/tauri-apps/tauri/commit/5eb72c24deddf5a01093bea96b90c0d8806afc3f) refactor: copy resources and sidecars on the Cargo build script ([#3357](https://www.github.com/tauri-apps/tauri/pull/3357)) on 2022-02-08

- The minimum Rust version is now `1.56`.
  - [a9dfc015](https://www.github.com/tauri-apps/tauri/commit/a9dfc015505afe91281c2027954ffcc588b1a59c) feat: update to edition 2021 and set minimum rust to 1.56 ([#2789](https://www.github.com/tauri-apps/tauri/pull/2789)) on 2021-10-22

- **Breaking change:** The sidecar's target triple suffix is now removed at build time.
  - [3035e458](https://www.github.com/tauri-apps/tauri/commit/3035e4581c161ec7f0bd6d9b42e9015cf1dd1d77) Remove target triple from sidecar bin paths, closes [#3355](https://www.github.com/tauri-apps/tauri/pull/3355) ([#3356](https://www.github.com/tauri-apps/tauri/pull/3356)) on 2022-02-07

- When building Universal macOS Binaries through the virtual target `universal-apple-darwin`:

- Expect a universal binary to be created by the user

- Ensure that binary is bundled and accessed correctly at runtime

- [3035e458](https://www.github.com/tauri-apps/tauri/commit/3035e4581c161ec7f0bd6d9b42e9015cf1dd1d77) Remove target triple from sidecar bin paths, closes [#3355](https://www.github.com/tauri-apps/tauri/pull/3355) ([#3356](https://www.github.com/tauri-apps/tauri/pull/3356)) on 2022-02-07

- Allow setting the localization file for WiX.
  - [af329f27](https://www.github.com/tauri-apps/tauri/commit/af329f2722d6194c6d70e976fc970dc2c9e4de2b) feat(bundler): wix localization, closes [#3174](https://www.github.com/tauri-apps/tauri/pull/3174) ([#3179](https://www.github.com/tauri-apps/tauri/pull/3179)) on 2022-02-05

- Fix registry keys on the WiX template.
  - [2be1abd1](https://www.github.com/tauri-apps/tauri/commit/2be1abd112cc3d927c235b6d00a508e6d35be49e) fix(bundler) wix template escape character ([#2608](https://www.github.com/tauri-apps/tauri/pull/2608)) on 2021-09-21

- Configure WiX to add an option to launch the application after finishing setup.
  - [feb3a8f8](https://www.github.com/tauri-apps/tauri/commit/feb3a8f896802ff274333012c3b399beb5c86f41) feat(bundler): configure WiX to add launch option, closes [#3015](https://www.github.com/tauri-apps/tauri/pull/3015) ([#3043](https://www.github.com/tauri-apps/tauri/pull/3043)) on 2021-12-09

- Sign WiX installer in addition to the executable file.
  - [d801cc89](https://www.github.com/tauri-apps/tauri/commit/d801cc89b8bfa9beba347ebcd48cfccf890ff5bb) wix installer is also signed ([#3266](https://www.github.com/tauri-apps/tauri/pull/3266)) on 2022-01-23

## \[1.0.0-beta.4]

- Merge Tauri-generated Info.plist with the contents of `src-tauri/Info.plist` if it exists.
  - [537ab1b6](https://www.github.com/tauri-apps/tauri/commit/537ab1b6d5a792c550a535619965c9e4126292e6) feat(core): inject src-tauri/Info.plist file on dev and merge on bundle, closes [#1570](https://www.github.com/tauri-apps/tauri/pull/1570) [#2338](https://www.github.com/tauri-apps/tauri/pull/2338) ([#2444](https://www.github.com/tauri-apps/tauri/pull/2444)) on 2021-08-15
- Change the WiX config to allow upgrading installation with same version instead of duplicating the application.
  - [dd5e1ede](https://www.github.com/tauri-apps/tauri/commit/dd5e1ede32ab8c10849fe6583d93ef493dd6f184) fix(bundler): `AllowSameVersionUpgrades` on WiX, closes [#2211](https://www.github.com/tauri-apps/tauri/pull/2211) ([#2428](https://www.github.com/tauri-apps/tauri/pull/2428)) on 2021-08-14
- Check target architecture at runtime running `$ RUSTC_BOOTSTRAP=1 rustc -Z unstable-options --print target-spec-json` and parsing the `llvm-target` field, fixing macOS M1 sidecar check until we can compile the CLI with M1 target on GitHub Actions.
  - [5ebf389f](https://www.github.com/tauri-apps/tauri/commit/5ebf389f6c6805ccd2b15d81fe12416770e39222) feat(bundler): check target arch at runtime, closes [#2286](https://www.github.com/tauri-apps/tauri/pull/2286) ([#2422](https://www.github.com/tauri-apps/tauri/pull/2422)) on 2021-08-13
- Added `banner_path` field to the `WixSettings` struct.
  - [13003ec7](https://www.github.com/tauri-apps/tauri/commit/13003ec761b1530705d6129519dc4e226eb992c7) feat(bundler): add config for WiX banner path, closes [#2175](https://www.github.com/tauri-apps/tauri/pull/2175) ([#2448](https://www.github.com/tauri-apps/tauri/pull/2448)) on 2021-08-16
- Added `dialog_image_path` field to the `WixSettings` struct.
  - [9bfdeb42](https://www.github.com/tauri-apps/tauri/commit/9bfdeb42effeeec27aa15bbc5b05040eadfda5ba) feat(bundler): add config for WiX dialog image path ([#2449](https://www.github.com/tauri-apps/tauri/pull/2449)) on 2021-08-16
- Only convert package name and binary name to kebab-case, keeping the `.desktop` `Name` field with the original configured value.
  - [3f039cb8](https://www.github.com/tauri-apps/tauri/commit/3f039cb8a308b0f18deaa37d7cfb1cc50d308d0e) fix: keep original `productName` for .desktop `Name` field, closes [#2295](https://www.github.com/tauri-apps/tauri/pull/2295) ([#2384](https://www.github.com/tauri-apps/tauri/pull/2384)) on 2021-08-10
- Use `linuxdeploy` instead of `appimagetool` for `AppImage` bundling.
  - [397710b2](https://www.github.com/tauri-apps/tauri/commit/397710b2c5699dab78118f58760dda07e276d4c2) refactor(bundler): use linuxdeploy instead of appimagetool, closes [#1986](https://www.github.com/tauri-apps/tauri/pull/1986) ([#2437](https://www.github.com/tauri-apps/tauri/pull/2437)) on 2021-08-15

## \[1.0.0-beta.3]

- Fix WIX uninstaller by using unique `GUID` shortcut.
  - [caa8fcc9](https://www.github.com/tauri-apps/tauri/commit/caa8fcc93e5b56dacf042b9e7c6e7c56a1609310) fix(windows): use random `Guid` for uninstaller (wix) ([#2208](https://www.github.com/tauri-apps/tauri/pull/2208)) on 2021-07-14
- Run powershell commands with `-NoProfile` flag
  - [3e6f3416](https://www.github.com/tauri-apps/tauri/commit/3e6f34160deab4f774d90aba28122e5b6b6f9db2) fix(cli.rs): run powershell kill command without profile ([#2130](https://www.github.com/tauri-apps/tauri/pull/2130)) on 2021-06-30

## \[1.0.0-beta.2]

- Properly detect target platform's architecture.
  - [628a53eb](https://www.github.com/tauri-apps/tauri/commit/628a53eb6176f811d22d7730f08a99e5c370dbf4) fix(cli): properly detect target architecture, closes [#2040](https://www.github.com/tauri-apps/tauri/pull/2040) ([#2102](https://www.github.com/tauri-apps/tauri/pull/2102)) on 2021-06-28
- Properly bundle resources with nested folder structure.
  - [a6157212](https://www.github.com/tauri-apps/tauri/commit/a61572127df839ed23e34e9b49b2bada5f18f7fb) fix(bundler): resources bundling on Windows with nested folder structure ([#2081](https://www.github.com/tauri-apps/tauri/pull/2081)) on 2021-06-25

## \[1.0.0-beta.1]

- The process of copying binaries and resources to `project_out_directory` was moved to the Tauri CLI.
  - [8f29a260](https://www.github.com/tauri-apps/tauri/commit/8f29a260e67aa111f6aeb262bd846a46d2858ce9) fix(cli.rs): copy resources and binaries on dev, closes [#1298](https://www.github.com/tauri-apps/tauri/pull/1298) ([#1946](https://www.github.com/tauri-apps/tauri/pull/1946)) on 2021-06-04
- Allow setting a path to a license file for the Windows Installer (`tauri.conf.json > bundle > windows > wix > license`).
  - [b769c7f7](https://www.github.com/tauri-apps/tauri/commit/b769c7f7da4064b6133bf39a82127863d0d35531) feat(bundler): windows installer license, closes [#2009](https://www.github.com/tauri-apps/tauri/pull/2009) ([#2027](https://www.github.com/tauri-apps/tauri/pull/2027)) on 2021-06-21
- Configure app shortcut on the Windows Installer.
  - [f0603fcc](https://www.github.com/tauri-apps/tauri/commit/f0603fccb389620e105a5927a9e4b84b5e6853f4) feat(bundler): desktop shortcut on Windows ([#2052](https://www.github.com/tauri-apps/tauri/pull/2052)) on 2021-06-23
- Allow setting the Windows installer language and using project names that contains non-Unicode characters.
  - [47919619](https://www.github.com/tauri-apps/tauri/commit/47919619815900fc3af47ec5873e31afb778b0ad) feat(bundler): allow setting wix language, closes [#1976](https://www.github.com/tauri-apps/tauri/pull/1976) ([#1988](https://www.github.com/tauri-apps/tauri/pull/1988)) on 2021-06-15
- Fixes resource bundling on Windows when there is nested resource folders.
  - [35a20527](https://www.github.com/tauri-apps/tauri/commit/35a2052771fc0897064ed146d9557527a0a76453) fix(bundler): windows resources bundling with nested folders ([#1878](https://www.github.com/tauri-apps/tauri/pull/1878)) on 2021-05-21

## \[1.0.0-beta.0]

- Fixes the `Installed-Size` value on the debian package.
  - [8e0d4f6](https://www.github.com/tauri-apps/tauri/commit/8e0d4f666c2fbcc3452db9edf87aa726c9ebe4b8) fix(bundler): debian package `Installed-Size` value ([#1735](https://www.github.com/tauri-apps/tauri/pull/1735)) on 2021-05-07
- Use `armhf` as Debian package architecture on `arm` CPUs.
  - [894643c](https://www.github.com/tauri-apps/tauri/commit/894643cdcd7446f63c4a0ab157be3cb8c242952a) feat(bundler): use `armhf` as Debian package architecture on arm CPUs ([#1663](https://www.github.com/tauri-apps/tauri/pull/1663)) on 2021-04-30
- Adds basic library documentation.
  - [fcee4c2](https://www.github.com/tauri-apps/tauri/commit/fcee4c25fc2e83a587e096b26d9f7c374c3db057) refactor(bundler): finish initial documentation, reorganize modules ([#1662](https://www.github.com/tauri-apps/tauri/pull/1662)) on 2021-04-30
- The `PackageTypes` enum now includes all options, including Windows packages.
  - [fcee4c2](https://www.github.com/tauri-apps/tauri/commit/fcee4c25fc2e83a587e096b26d9f7c374c3db057) refactor(bundler): finish initial documentation, reorganize modules ([#1662](https://www.github.com/tauri-apps/tauri/pull/1662)) on 2021-04-30
- Adds `icon_path` field to the `WindowsSettings` struct (defaults to `icons/icon.ico`).
  - [314936e](https://www.github.com/tauri-apps/tauri/commit/314936efbeb3ecaece244da5a1a4a59341d4f76f) feat(bundler): add icon path config instead of enforcing icons/icon.ico ([#1698](https://www.github.com/tauri-apps/tauri/pull/1698)) on 2021-05-03
- Pull latest changes from `create-dmg`, fixing unmount issue.
  - [f1aa120](https://www.github.com/tauri-apps/tauri/commit/f1aa12075f9f649ff6baebc0f8e7a10f1e616cc6) fix(bundler): update create-dmg, fixes [#1571](https://www.github.com/tauri-apps/tauri/pull/1571) ([#1729](https://www.github.com/tauri-apps/tauri/pull/1729)) on 2021-05-06
- Fixes DMG volume icon.
  - [e37e187](https://www.github.com/tauri-apps/tauri/commit/e37e187d4a3c7568463c2546099d03dd5a314f40) fix(bundler): dmg volume icon ([#1730](https://www.github.com/tauri-apps/tauri/pull/1730)) on 2021-05-06
- Added the \`#\[non_exhaustive] attribute where appropriate.
  - [e087f0f](https://www.github.com/tauri-apps/tauri/commit/e087f0f9374355ac4b4a48f94727ef8b26b1c4cf) feat: add `#[non_exhaustive]` attribute ([#1725](https://www.github.com/tauri-apps/tauri/pull/1725)) on 2021-05-05

## \[1.0.0-beta-rc.1]

- Find best available icon for AppImage, follow `.DirIcon` spec.
  - [fbf73f3](https://www.github.com/tauri-apps/tauri/commit/fbf73f3ab53387e68c8cbf9e788820bea0f2f111) fix(bundler): find icon for AppImage, define `.DirIcon`, closes [#749](https://www.github.com/tauri-apps/tauri/pull/749) ([#1594](https://www.github.com/tauri-apps/tauri/pull/1594)) on 2021-04-23
- Allow including custom files on the debian package.
  - [9e87fe6](https://www.github.com/tauri-apps/tauri/commit/9e87fe6a69a8f74c8e61221e36e15b7eb1d19432) feat(bundler): allow including custom files on debian package, fix [#1428](https://www.github.com/tauri-apps/tauri/pull/1428) ([#1613](https://www.github.com/tauri-apps/tauri/pull/1613)) on 2021-04-25
- Adds support to custom WiX template.
  - [ebe755a](https://www.github.com/tauri-apps/tauri/commit/ebe755ac5c37025bae0cf8860e9b04b507f71949) feat: [#1528](https://www.github.com/tauri-apps/tauri/pull/1528) wix supports custom templates ([#1529](https://www.github.com/tauri-apps/tauri/pull/1529)) on 2021-04-25
- Adds support to `wix` fragments for custom .msi installer functionality.
  - [69ea51e](https://www.github.com/tauri-apps/tauri/commit/69ea51ec93a6d4fa90f3482a51f0c6d20c97fa29) feat(bundler): implement wix fragments, closes [#1528](https://www.github.com/tauri-apps/tauri/pull/1528) ([#1601](https://www.github.com/tauri-apps/tauri/pull/1601)) on 2021-04-23
- Adds `skip_webview_install` config under `windows > wix` to disable Webview2 runtime installation after the app install.
  - [d13afec](https://www.github.com/tauri-apps/tauri/commit/d13afec20402b8ddbbf3ceb4349edb1956ed79bc) feat(bundler): add option to skip webview2 runtime installation, closes [#1606](https://www.github.com/tauri-apps/tauri/pull/1606) ([#1612](https://www.github.com/tauri-apps/tauri/pull/1612)) on 2021-04-24

## \[1.0.0-beta-rc.0]

- Append app version and OS architecture on AppImage output filename.
  - [ae76c60](https://www.github.com/tauri-apps/tauri/commit/ae76c60a615602fcb8c1dd824a6ad9fa8f48fe69) fix(bundler): appimage paths and filename ([#1227](https://www.github.com/tauri-apps/tauri/pull/1227)) on 2021-02-13
- The Tauri bundler is now a general purpose library instead of a Cargo custom subcommand.
  - [b1e6b74](https://www.github.com/tauri-apps/tauri/commit/b1e6b74a4f624b623a840686fb1abe1d23593867) refactor(cli): decouple bundler from cargo ([#1269](https://www.github.com/tauri-apps/tauri/pull/1269)) on 2021-02-21
- Rename macOS bundle settings from `osx` to `macOS`.
  - [080f639](https://www.github.com/tauri-apps/tauri/commit/080f6391bac4fd59e9e71b9785d7a2f835703805) refactor(bundler): specific settings on dedicated structs, update README ([#1380](https://www.github.com/tauri-apps/tauri/pull/1380)) on 2021-03-25
- The `dev` and `build` pipeline is now written in Rust.
  - [3e8abe3](https://www.github.com/tauri-apps/tauri/commit/3e8abe376407bb0ca8893602590ed9edf7aa71a1) feat(cli) rewrite the core CLI in Rust ([#851](https://www.github.com/tauri-apps/tauri/pull/851)) on 2021-01-30
  - [aea6145](https://www.github.com/tauri-apps/tauri/commit/aea614587bddab930d552512b54e18624fbf573e) refactor(repo): add /tooling folder ([#1457](https://www.github.com/tauri-apps/tauri/pull/1457)) on 2021-04-12
- Update all code files to have our license header.
  - [bf82136](https://www.github.com/tauri-apps/tauri/commit/bf8213646689175f8a158b956911f3a43e360690) feat(license): SPDX Headers ([#1449](https://www.github.com/tauri-apps/tauri/pull/1449)) on 2021-04-11
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
  - [aea6145](https://www.github.com/tauri-apps/tauri/commit/aea614587bddab930d552512b54e18624fbf573e) refactor(repo): add /tooling folder ([#1457](https://www.github.com/tauri-apps/tauri/pull/1457)) on 2021-04-12
- Alpha version of tauri-updater. Please refer to the `README` for more details.
  - [6d70c8e](https://www.github.com/tauri-apps/tauri/commit/6d70c8e1e256fe839c4a947375bb529d7b4f7301) feat(updater): Alpha version ([#643](https://www.github.com/tauri-apps/tauri/pull/643)) on 2021-04-05
  - [a6def70](https://www.github.com/tauri-apps/tauri/commit/a6def7066eec19c889b0f14cc1e475bf209a332e) Refactor(tauri): move tauri-api and tauri-updater to tauri ([#1455](https://www.github.com/tauri-apps/tauri/pull/1455)) on 2021-04-11
  - [aea6145](https://www.github.com/tauri-apps/tauri/commit/aea614587bddab930d552512b54e18624fbf573e) refactor(repo): add /tooling folder ([#1457](https://www.github.com/tauri-apps/tauri/pull/1457)) on 2021-04-12
- Bundle Visual C++ redistributable files with VC142\_CRT merge modules.
  - [3047a18](https://www.github.com/tauri-apps/tauri/commit/3047a18975db07abdf49985f531c3925f68a0db9) feat(bundler): add visual c++ redistributable files with MSM ([#1368](https://www.github.com/tauri-apps/tauri/pull/1368)) on 2021-03-22
- Automatically install Webview2 runtime alongside app.
  - [8e9752b](https://www.github.com/tauri-apps/tauri/commit/8e9752bb8bad5c56b55a3750876e0073efdc6d39) feat(bundler/wix): install webview2 runtime ([#1329](https://www.github.com/tauri-apps/tauri/pull/1329)) on 2021-03-07
- Fixes the bundler workspace detection.
  - [e34ee4c](https://www.github.com/tauri-apps/tauri/commit/e34ee4c29c7fde02e09685a3100f0b2ef6380c98) fix(bundler): workspace detection, closes [#1007](https://www.github.com/tauri-apps/tauri/pull/1007) ([#1235](https://www.github.com/tauri-apps/tauri/pull/1235)) on 2021-02-14

## \[0.9.4]

- `dirs` crate is unmaintained, now using `dirs-next` instead.
  - [82cda98](https://www.github.com/tauri-apps/tauri/commit/82cda98532975c6d4b1c93bf2f326173f39e0964) chore(tauri) `dirs` crate is unmaintained, use `dirst-next` instead ([#1057](https://www.github.com/tauri-apps/tauri/pull/1057)) on 2020-10-17
  - [72996be](https://www.github.com/tauri-apps/tauri/commit/72996be1bd3eb878c4cf30bfec79058071c26d7a) apply version updates ([#1024](https://www.github.com/tauri-apps/tauri/pull/1024)) on 2020-10-21
- Force IPv4 on `wget` so AppImage bundling doesn't hang.
  - [6f5667b](https://www.github.com/tauri-apps/tauri/commit/6f5667bf72d58972b8d05ee2e42a031c85f95ed4) fix: [#1018](https://www.github.com/tauri-apps/tauri/pull/1018) Force IPv4 on wget requests ([#1019](https://www.github.com/tauri-apps/tauri/pull/1019)) on 2020-10-11
  - [72996be](https://www.github.com/tauri-apps/tauri/commit/72996be1bd3eb878c4cf30bfec79058071c26d7a) apply version updates ([#1024](https://www.github.com/tauri-apps/tauri/pull/1024)) on 2020-10-21
- Set the Windows installer (WiX) `WorkingDirectory` field to `INSTALLDIR` so the app can read paths relatively (previously resolving to `C:\Windows\System32`).
  - [5cf3402](https://www.github.com/tauri-apps/tauri/commit/5cf3402735ac2e88fc4aae5fe39fc0a41262b6fa) fix: add working directory to wix's shortcut ([#1021](https://www.github.com/tauri-apps/tauri/pull/1021)) on 2020-09-24
  - [72996be](https://www.github.com/tauri-apps/tauri/commit/72996be1bd3eb878c4cf30bfec79058071c26d7a) apply version updates ([#1024](https://www.github.com/tauri-apps/tauri/pull/1024)) on 2020-10-21

## \[0.9.3]

- Improve checking for Xcode command line tools to allow builds on mac
  - [7a788fd](https://www.github.com/tauri-apps/tauri/commit/7a788fdceebc2bf6b7b46ebe54e98597d4a71529) fix: improve checking for Rez (fix [#994](https://www.github.com/tauri-apps/tauri/pull/994)) ([#995](https://www.github.com/tauri-apps/tauri/pull/995)) on 2020-08-28
- add a newline after Categories in deb .desktop file generation to fix issues #899 and #925.
  - [37bcf5f](https://www.github.com/tauri-apps/tauri/commit/37bcf5fea154bdefbca2692b69aafaabba8c23e2) fix(bundler) missing newline in deb desktop file generation (fix: [#899](https://www.github.com/tauri-apps/tauri/pull/899), [#925](https://www.github.com/tauri-apps/tauri/pull/925)) ([#998](https://www.github.com/tauri-apps/tauri/pull/998)) on 2020-08-27

## \[0.9.2]

- Bump all deps as noted in #975, #976, #977, #978, and #979.
  - [06dd75b](https://www.github.com/tauri-apps/tauri/commit/06dd75b68a15d388808c51ae2bf50554ae761d9d) chore: bump all js/rust deps ([#983](https://www.github.com/tauri-apps/tauri/pull/983)) on 2020-08-20

## \[0.9.1]

- Hide external scripts output unless `--verbose` is passed.
  - [78add1e](https://www.github.com/tauri-apps/tauri/commit/78add1e79ef42ed61e988a0012be87b428439332) feat(bundler): hide output from shell scripts unless --verbose is passed (fixes [#888](https://www.github.com/tauri-apps/tauri/pull/888)) ([#893](https://www.github.com/tauri-apps/tauri/pull/893)) on 2020-07-26
- Fixes the target directory detection, respecting the `CARGO_TARGET_DIR` and `.cargo/config (build.target-dir)` options to set the Cargo output directory.
  - [63b9c64](https://www.github.com/tauri-apps/tauri/commit/63b9c6457233d777b698b53cd6661c6cd9a0d67b) fix(bundler) properly detect the target directory ([#895](https://www.github.com/tauri-apps/tauri/pull/895)) on 2020-07-25
- Bundling every DLL file on the binary directory.
  - [a00ac02](https://www.github.com/tauri-apps/tauri/commit/a00ac023eef9f7b3a508ca9acd664470382d7d06) fix(bundler) webview dll not being bundled, fixes [#875](https://www.github.com/tauri-apps/tauri/pull/875) ([#889](https://www.github.com/tauri-apps/tauri/pull/889)) on 2020-07-24

## \[0.9.0]

- Fixes the AppImage bundling on containers.
  - [53e8dc1](https://www.github.com/tauri-apps/tauri/commit/53e8dc1880b78994e17bf769d60e13f9e13dbf99) fix(bundler) support AppImage bundling on containers [#822](https://www.github.com/tauri-apps/tauri/pull/822) on 2020-07-13
  - [bd0118f](https://www.github.com/tauri-apps/tauri/commit/bd0118f160360e588180de3f3518ef47a4d86a46) fix(changes) covector status pass on 2020-07-14
- Bundler output refactor: move Windows artifacts to the `bundle/wix` folder and use a standard output name `${bundleName}_${version}_${arch}.${extension}`.
  - [9130f1b](https://www.github.com/tauri-apps/tauri/commit/9130f1b1a422121fa9f3afbeeb87e851568e995f) refactor(bundler) standard output names and path ([#823](https://www.github.com/tauri-apps/tauri/pull/823)) on 2020-07-13

## \[0.8.5]

- Ignoring non UTF-8 characters on the loopback command output.
  - [f340b29](https://www.github.com/tauri-apps/tauri/commit/f340b2914dc9c3a94ca8606f4663964fa87b95ea) fix(tauri) addition to the previous commit on 2020-07-10

## \[0.8.4]

- Properly run the loopback command on Windows.

## \[0.8.3]

- Fixes the unbound variable issue on the DMG bundler script.

## \[0.8.2]

- Fixes the AppImage bundler script.

## \[0.8.1]

- Improves the logging of child processes like bundle_appimage.sh and bundle_dmg.sh.

## \[0.8.0]

- The bundler now bundles all binaries from your project (undefined) and undefined.
  When multiple binaries are used, make sure to use the undefined config field.
- Check if mksquashfs is installed before bundling AppImage

## \[0.7.0]

- Fixes AppImage bundler (appimagetool usage, build script running properly, proper AppRun and .desktop files).
