// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT

// This script helps to keep the package.json `exports` section and the actually generated files in sync

import fg from 'fast-glob'
import { basename } from 'path'
import { readFileSync, writeFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

pkg.exports =  Object.assign(
  {},
  // if for some reason in the future we manually add something in the `exports` field
  // this will ensure it doesn't get overwritten by the logic above
  { ...(pkg.exports || {}) },
  ...fg.sync('./src/*.ts').map((p) => {
    const mod = basename(p, '.ts')

    return {
      [mod]: {
        import: `./dist/${mod}.mjs`,
        require: `./dist/${mod}.cjs`
      }
    }
  }),
)

writeFileSync('./package.json', JSON.stringify(pkg, undefined, 2))
