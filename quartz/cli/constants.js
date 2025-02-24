import path from "path"
import { readFileSync } from "fs"
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * All constants relating to helpers or handlers
 */
export const ORIGIN_NAME = "origin"
export const UPSTREAM_NAME = "upstream"
export const QUARTZ_SOURCE_BRANCH = "v4"
export const packageRootPath = path.join(__dirname, '..', '..')
export const cacheDir = path.join(packageRootPath, ".quartz-cache")
export const cacheFile = path.join(packageRootPath, "quartz/.quartz-cache/transpiled-build.mjs")
export const fp = path.join(packageRootPath, "quartz/build.ts")
export const contentCacheFolder = path.join(packageRootPath, cacheDir, "content-cache")
export const { version } = JSON.parse(readFileSync(path.join(packageRootPath, "./package.json")).toString())
