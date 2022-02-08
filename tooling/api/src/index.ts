// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

/**
 * The Tauri API allows you to interface with the backend layer.
 *
 * This module exposes all other modules as an object where the key is the module name, and the value is the module exports.
 * @example
 * ```typescript
 * export { app, dialog, event, fs, globalShortcut } from '@tauri-apps/api'
 * ```
 * @module
 */

export * as app from './app'
export * as cli from './cli'
export * as clipboard from './clipboard'
export * as dialog from './dialog'
export * as event from './event'
export * as fs from './fs'
export * as globalShortcut from './globalShortcut'
export * as http from './http'
export * as notification from './notification'
export * as path from './path'
export * as process from './process'
export * as shell from './shell'
export * as tauri from './tauri'
export * as updater from './updater'
export * as window from './window'
export * as os from './os'
export { invoke } from './tauri'
