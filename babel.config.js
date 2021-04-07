module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { // configuração para ultilizar o React dentro dos arquivos sem precisar usar o import
      runtime: 'automatic'
    }]
  ]
}