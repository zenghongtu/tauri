// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

import fg from 'fast-glob'
import { basename } from 'path'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const manualChunks = Object.fromEntries(
  fg.sync('./src/*.ts').map((p) => [basename(p, '.ts'), [p]])
)

export default [
  {
    input: 'src/index.ts',
    manualChunks,
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    output: [
      {
        format: 'esm',
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name].mjs',
        dir: './dist'
      },
      {
        format: 'cjs',
        entryFileNames: '[name].cjs',
        chunkFileNames: '[name].cjs',
        dir: './dist'
      }
    ],
    plugins: [typescript()]
  },
  {
    input: 'src/index.ts',
    output: {
      format: 'iife',
      name: '__TAURI__',
      file: '../../core/tauri/scripts/bundle.js',
    },
    plugins: [
      typescript(),
      terser()
    ]
  }
]
