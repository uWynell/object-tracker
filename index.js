/**
 * @typedef {Object} Options
 * @property {boolean} onlyPlain Recursively track only plain objects (default: `false`)
 * @property {boolean} recursive Recursive tracking (default: `true`)
 */

/**
 * @typedef {Function} Callback
 * @param {...Object[]} result Resulting objects starting from the outside
 * @returns {any}
 */

/**
 * Default tracking options
 * @type {Options}
 */
const defaultOptions = {
  onlyPlain: false,
  recursive: true,
};

/**
 * Example callback
 * @param {...Object[]} result Resulting objects starting from the outside
 * @returns {any}
 */
function defaultCallback(...result) {
  console.log(`Object was changed at ${result.length} indent level`);
  return true;
}

/**
 * Main function
 * @param {Object} data Object that you want to track
 * @param {Callback} callback Function that will be called on each object modification
 * @param {Options} options If you want to modify the function behaviour
 * @returns {Object} Tracked object
 */
function track(data, callback, options) {
  const { onlyPlain, recursive } = options;
  return new Proxy(data, {
    get(target, key) {
      const isObject = typeof target[key] === 'object' && target[key] !== null;
      const isSuitable = !onlyPlain || Object.getPrototypeOf(data) === Object;
      if (recursive && isObject && isSuitable) {
        return track(target[key], callback.bind(this, target), options);
      }
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      const result = callback(target);
      return result;
    },
    deleteProperty(target, key) {
      const result = delete target[key];
      callback(target);
      return result;
    },
  });
}

/**
 * Init function
 * @param {Object} data Object that you want to track
 * @param {Function} callback Function that will be called on each object modification
 * @param {Options} options If you want to modify the function behaviour
 * @returns {Object} Tracked object
 */
exports.track = function init(data, callback, options) {
  const trueOptions = Object.assign({}, defaultOptions, options);
  const trueCallback = callback ?? defaultCallback;
  return track(data, trueCallback, trueOptions);
};
