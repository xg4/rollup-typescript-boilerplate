import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  output: [
    {
      file: pkg.exports,
      format: 'esm',
    },
    {
      name: 'Boilerplate',
      file: pkg.browser,
      format: 'umd',
    },
  ],
  plugins: [
    json(),
    nodeResolve({ extensions }),
    commonjs(),
    babel({
      extensions,
    }),
    terser(),
  ],
}
