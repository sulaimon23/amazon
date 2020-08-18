// module.exports = {
//   module: {
//     rules: [{
//       test: /\.js$,.css$/i,
//       exclude: /node_modules/,
//       use: {
//         loader: "'babel-loader','style-loader', 'css-loader'"
//       }
//     }]
//   }
// }

module.exports = {
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['css-loader']
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
    ]
  }
}
