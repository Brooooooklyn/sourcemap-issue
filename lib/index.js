const { SourceMapConsumer } = require('source-map')
const { SourceMapDecoder } = require('../native')
const fs = require('fs')
const path = require('path')

const sourcePath = path.join(process.cwd(), 'fixtures', 'main.js.map')

const sourcemapContent = fs.readFileSync(sourcePath, 'utf8')
const sourcemap = JSON.parse(sourcemapContent)

const jsDecoder = new SourceMapConsumer(sourcemap)
const rustDecoder = new SourceMapDecoder(sourcePath)

const jsResult = jsDecoder.originalPositionFor({
  line: 1,
  column: 113946
})

const rustResult = rustDecoder.parse(1, 113946)

console.log(jsResult, rustResult)
