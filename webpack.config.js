var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {   test : /\.s[ac]ss$/i, 
                use:[
                        'style-loader', 
                        'css-loader', 
                        {
                            loader: 'sass-loader',
                            options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                            },
                        },
                    ]}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ]

}