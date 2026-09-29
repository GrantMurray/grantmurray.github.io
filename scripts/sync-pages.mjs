import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

cpSync(join(dist, 'index.html'), join(root, 'index.html'))

const assets = join(root, 'assets')
rmSync(assets, { recursive: true, force: true })
mkdirSync(assets)
cpSync(join(dist, 'assets'), assets, { recursive: true })

for (const name of ['favicon.png', 'icons.svg']) {
  const from = join(dist, name)
  if (existsSync(from)) cpSync(from, join(root, name))
}

for (const dir of ['images', 'download']) {
  const from = join(dist, dir)
  if (!existsSync(from)) continue
  const dest = join(root, dir)
  rmSync(dest, { recursive: true, force: true })
  cpSync(from, dest, { recursive: true })
}
