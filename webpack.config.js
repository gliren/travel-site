module.exports = {
  entry: "./app/assets/scripts/App.js",
          // original file path
  output: {
  path: "./app/temp/scripts",
  filename: "App-bundle.js"
  // copy it to another dest and name the new file
  },
  module:{
    loaders:[
      {
        loader: 'babel',
        query:{
          presets: ['es2015']
        },
        test: /\.js$/, // only apply to .js file
        exclude: /node_modules/ // exclude js files in node_modules folder
      }
    ]
  }
}
