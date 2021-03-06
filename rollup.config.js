import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            name: pkg.name,
            file: pkg.browser,
            format: 'umd',
        },
        {
            name: pkg.name,
            file: pkg.main,
            format: 'cjs',
            exports: 'auto',
        },
        {
            name: pkg.name,
            file: pkg.module,
            format: 'esm',
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
        }),
    ],
};
