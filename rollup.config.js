/**
 * @desc rollup 默认配置文件
 * rollup -c 打包指令
 */
import { version } from './package.json';
import json from 'rollup-plugin-json'; // Rollup 从 JSON 文件中读取数据
import resolve from 'rollup-plugin-node-resolve'; // 帮助 Rollup 查找外部模块，然后导入
import babel from '@rollup/plugin-babel'; // rollup babel插件（使用es6新特性来编写代码）
import commonjs from 'rollup-plugin-commonjs'; // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import { terser } from 'rollup-plugin-terser'; // 代码压缩
import alias from 'rollup-plugin-alias'; // 将模块中’@'别名替换为’src’目录；
import path from 'path';

const pathResolve = (p) => path.resolve(__dirname, p);

export default {
  input: ['./src/index.js'], // 包的入口点
  output: [
    {
      name: 'experience', // 开发版-不使用`terser`插件进行压缩，插件的对外全局变量（在index.html页面中引入打包的js文件后可以通过这个变量去调用内部的方法）
      banner: '/* experience v' + version + ' | (c) 2021 by zh */', // banner、footer 字符串以 前置/追加 到文件束(bundle)
      footer: '/* follow me on Twitter! @rich_harris */',
      file: './dist/bundle.js',
      /**
       * @desc 生成包的格式
       * 1.amd – 异步模块定义，用于像RequireJS这样的模块加载器
       * 2.cjs – CommonJS，适用于 Node 和 Browserify/Webpack
       * 3.esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
       * 4.iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
       * 5.umd – 通用模块定义，以amd，cjs 和 iife 为一体（一般我们采用这个）
       * 6.system - SystemJS 加载器格式
       */
      format: 'umd',
      sourcemap: true // 生成bundle.map.js文件，方便调试
    },
    {
      banner: '/* experience v' + version + ' | (c) 2021 by zh */',
      footer: '/* follow me on Twitter! @rich_harris */',
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
    commonjs(), // 应该用在其他插件转换你的模块之前，不使用的话打包出的代码中会有 require(...) 这种 commonjs 的语法导入代码
    babel({
      babelHelpers: 'runtime', // 使plugin-transform-runtime生效 https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
      exclude: 'node_modules/**' // 防止打包node_modules下的文件
    })
  ]
};
