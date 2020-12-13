const path = require( 'path' );
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

function isProd(environment) {
  if (environment === 'local') {
    return false;
  }
  return true;
}

module.exports = env => {

  return {
    // bundling mode
    mode: isProd(env.NODE_ENV) ? 'production' : 'development',
    entry: getDynamicEntries(),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: "[name]"
    },
    plugins: [
      new CleanWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            {
              loader: "css-loader",
              options: {
                sourceMap: isProd()
              }
            },
            // Compiles Sass to CSS
            {
              loader: "sass-loader",
              options: {
                sourceMap: isProd()
              }
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
};

function getDynamicEntries() {
  let entries = glob.sync('./js/blocks/**/*.js').reduce((acc, path) => {
    /**
     * The "[name]" placeholder in the "output" property will be replaced
     * with each key name in our "entry" object. We need to make sure the
     * keys are a path to the "index.js" file but without the actual file
     * name. This is why we replace the file name, "index.js", with a string
     */
    /**
     * Here we start building our object by placing the "entry" variable from
     * the previous line as a key and the entire path including the file name
     * as the value
     */
    if (!path.includes('.min')) {
      acc[path] = {
        import: path,
        filename: '[name]',
        dependOn: 'polaris.min.js'
      };
    }
    return acc
  }, {});

  entries['polaris.min.js'] = [
    './js/core/settings.js'
  ];
  return entries;
}
