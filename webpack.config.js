const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'), // путь к dist
        publicPath: 'dist' // чтобы отслеживать изменения и делать reload
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        "plugins": ["@babel/plugin-transform-react-jsx"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // (style-loader добавляет стили в head, css-loader позволяет импортить файлы css)
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] // если не указываем формат файла по умолчанию ищет js и другие в массиве
    }
};
