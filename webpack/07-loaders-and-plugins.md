# Loaders & Plugins 列表

下面列出了开发环境和生产环境可能使用到的一些 Loaders 和 Plugins。

## 一、Loaders

- `style-loader`：
- `css-loader`：
- `sass-loader` / `less-loader`：
- postcss-loader
- `babel-loader`：
- `eslint-loader`：
- `autoprefixer`（插件） + `postcss-loader`：低版本浏览器/特定内核浏览器 css 语法支持，要配置 `browserslist` 选项
- typescript + `ts-loader` TS 支持

## 二、Plugins

- `html-webpack-plugin`：
- `mini-css-extract-plugin`：抽离 CSS 样式到单独文件（开发环境）
- `css-minimizer-webpack-plugin`：压缩 CSS 代码（生产环境）
- `terser-webpack-plugin`：压缩 js 代码
- `webpack-dev-server`：搭建开发服务器（开发环境）
- `workbox-webpack-plugin`：配置 PWA
- `ModuleFederationPlugin`：模块联邦使用的插件，webpack 自带
