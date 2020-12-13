
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
      dependOn: 'polaris.min.js'
    };
  }
  return acc
}, {});

entries['polaris.min.js'] = [
  './js/core/settings.js'
];
