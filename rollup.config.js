/**
 * @desc rollup 默认配置文件
 * [rollup -c 打包指令](https://www.rollupjs.com/guide/big-list-of-options#%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BDcore-functionality)
 */
import { version } from './package.json';
import json from 'rollup-plugin-json'; // Rollup 从 JSON 文件中读取数据
import resolve from 'rollup-plugin-node-resolve'; // 帮助 Rollup 查找外部模块，然后导入
import babel from '@rollup/plugin-babel'; // rollup babel插件（使用es6新特性来编写代码）
import commonjs from 'rollup-plugin-commonjs'; // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import { terser } from 'rollup-plugin-terser'; // [代码压缩](https://github.com/trysound/rollup-plugin-terser#using-as-output-plugin)
import alias from 'rollup-plugin-alias'; // 将模块中’@'别名替换为’src’目录；
import eslint from '@rollup/plugin-eslint'; //  [eslint js代码检测](https://github.com/rollup/plugins/tree/master/packages/eslint)
import path from 'path';

const pathResolve = (p) => path.resolve(__dirname, p);

export default {
  input: ['./src/index.js'], // 包的入口点
  external: [], // 指出应将哪些模块视为外部模块 external: ['lodash']
  globals: {}, // 全局模块 globals: {jquery: '$'}
  output: [
    {
      name: 'experience', // 开发版-不使用`terser`插件进行压缩，插件的对外全局变量（在index.html页面中引入打包的js文件后可以通过这个变量去调用内部的方法）
      banner: '/* experience v' + version + ' | (c) 2021 by zh */', // banner、footer 字符串以 前置/追加 到文件束(bundle)
      footer: '/* follow me on gitee! @zhangh-design */',
      file: './dist/bundle.js',
      format: 'umd', // [生成包的格式](https://www.rollupjs.com/guide/big-list-of-options#%E6%A0%BC%E5%BC%8Fformat--f--outputformat)
      sourcemap: true // 生成bundle.map.js文件，方便调试
    },
    {
      banner: '/* experience v' + version + ' | (c) 2021 by zh */',
      footer: '/* follow me on gitee! @zhangh-design */',
      name: 'experience', // 生产版
      file: './dist/bundle.min.js',
      format: 'umd',
      plugins: [
        terser({
          compress: {
            pure_funcs: ['console.log', 'console.info'] // 去掉console.log函数
          }
        })
      ]
    }
  ],
  // 插件
  plugins: [
    json(),
    resolve(),
    alias({
      '@': pathResolve('src')
    }),
    commonjs(), // [应该用在其他插件转换你的模块之前，不使用的话打包出的代码中会有 require(...) 这种 commonjs 的语法导入代码](https://www.rollupjs.com/guide/tools#rollup-plugin-commonjs)
    eslint({fix: false}),
    babel({
      babelHelpers: 'runtime', // [使plugin-transform-runtime生效](https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers)
      exclude: 'node_modules/**' // 防止打包node_modules下的文件
    }) // [roll配置babel](https://www.rollupjs.com/guide/tools#babel)
  ]
};
