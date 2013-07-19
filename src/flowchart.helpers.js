function _defaults(options, defaultOptions) {
  if (!options || typeof options === 'function') {
    return defaultOptions;
  }

  var merged = {};
  for (var attrname in defaultOptions) { merged[attrname] = defaultOptions[attrname]; }
  for (attrname in options) { if (options[attrname]) merged[attrname] = options[attrname]; }
  return merged;
}

function _inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}

// move dependent functions to a container so that
// they can be overriden easier in no jquery environment (node.js)
var f = {
  defaults: _defaults,
  inherits: _inherits
};