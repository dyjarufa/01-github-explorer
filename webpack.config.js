 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production', //modo develoment é mais rápido e evitar algumas otimizações que o modo production realiza

  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // apresenta o arquivo exato onde erro ocorreu

  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: { //resolve identifica os arquivos com as extensões jsx ou js
    extensions: ['.js', '.jsx'],
  },

  devServer: { // conf do fresh reload
    contentBase: path.resolve(__dirname, 'public', 'index.html'),
  },

  plugins: [ // insere o arquivo javascript no index sem precisar criar tag script com o arquivo bundle.js no body
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx$/, // verifica importação de arquivos com extensão jsx
        exclude: /node_modules/,
        use: 'babel-loader' //integração do babel com webpack (converte arquivo jsx usando babel)
      },
      {
        // configuração para utilizar css no projeto
        test: /\.scss$/, // verifica importação de arquivos com extensão css
        exclude: /node_modules/,
        use:['style-loader', 'css-loader', 'sass-loader' ] // loaders pega todo css da aplicação e aplica na página conforme necessário
      } 
    ]
  }

};