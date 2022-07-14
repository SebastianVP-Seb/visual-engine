const path=require('path');
const package=require('../package.json');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve( __dirname, '../dist'), //donde se encuentra el archivo, resolve para la ruta relativa
        filename: 'dist.js',
        libraryTarget: 'umd', //como se empaquetará la librería
        umdNamedDefine: true,
        library: package.name, //nombre
        globalObject: "typeof self !== 'undefine' ? self : this",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {   
                test: /\.(ts|js)x$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    },
                ],
            },
        ],
    },
}