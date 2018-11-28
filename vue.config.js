const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack(config) {
        config.resolve.alias
            .set('pages', resolve('src/pages'))
            .set('base', resolve('src/base'))
            .set('common', resolve('src/common'))
    }
}
