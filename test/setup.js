require('jsdom-global')()
global.expect = require('expect')
window.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};