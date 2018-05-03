require('jsdom-global')()
global.Vuetify = require("vuetify").default
global.expect = require('expect')
window.requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};