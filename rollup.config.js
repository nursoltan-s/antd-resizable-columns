import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.tsx', // Entry point of your library
  output: [
    {
      file: packageJson.main, // Output for CommonJS (for Node)
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module, // Output for ES Modules (for bundlers)
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Automatically externalize peerDependencies
    resolve({ extensions }), // Locates modules using the Node resolution algorithm
    commonjs(), // Converts CommonJS modules to ES6
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true, // Uses outDir from tsconfig for declarations
      clean: true, // Clean the output directory before building
    }),
    babel({
      extensions,
      babelHelpers: 'bundled', // Recommended way to handle Babel helpers
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    // Add other plugins like terser for minification if needed for production
    // import terser from '@rollup/plugin-terser';
    // terser()
  ],
  // External dependencies that Rollup should not bundle
  // external: ['react', 'react-dom', 'antd'], // Handled by peerDepsExternal
};
