import { fileURLToPath } from 'url'
import path from "path"

const __filename = fileURLToPath(import.meta.url)
export const QUARTZ = path.join(path.dirname(__filename), "..")
