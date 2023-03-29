// @ts-check

const promises = require('fs').promises;

const FILE_WITH_CELEBRATE = '/src/http/nodegen/routes/___op.ts.njk'

const render = (recipe, renderer) => {
  renderer.onFile(async (node) => {
    if (node.relativeSourcePath === FILE_WITH_CELEBRATE) {
      const originalFile = await readNodeFile(node.fullSourcePath)

      const cleanFile = removeCelebrate(originalFile)

      const outputPath = node.getGenerationTargets()[0]

      await writeFile(outputPath, cleanFile)

      node.skip = true
      node.outputs.push(outputPath) // Not sure what this does, ask Pat
    }
  })
}

// Utils
const readNodeFile = path => promises.readFile(path, 'utf8')
const writeFile = (path, file) => promises.writeFile(path, file)
const removeCelebrate = file => file.split('\n').filter(line => !line.includes('celebrate')).join('\n')

module.exports = render
