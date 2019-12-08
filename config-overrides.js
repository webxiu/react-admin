const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    // 针对antd 实现按需打包, 根据import 来打包(使用babel-plugin-import)
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        // style: 'css' // 自动打包相关的样式
        style: true
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
)