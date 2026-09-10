import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'animations')
const files = fs.readdirSync(root).filter((file) => file.endsWith('.js'))

for (const file of files) {
  const filePath = path.join(root, file)
  const source = fs.readFileSync(filePath, 'utf8')
  const normalized = source.replace(/\\n(?=export default)/g, '\n').replace(/\\n$/g, '\n')

  if (normalized !== source) {
    fs.writeFileSync(filePath, normalized)
  }
}

for (const file of files) {
  const filePath = path.join(root, file)
  const source = fs.readFileSync(filePath, 'utf8')
  if (/\\nexport default/.test(source) || /\\n$/.test(source)) {
    throw new Error(`Malformed animation module: ${file}`)
  }
}
