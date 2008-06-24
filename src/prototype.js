<%= include 'HEADER' %>

var Prototype = {
  Version: '<%= PROTOTYPE_VERSION %>',
  
  Browser: {
    IE:     !!(window.attachEvent && navigator.userAgent.indexOf('Opera') === -1),
    Opera:  navigator.userAgent.indexOf('Opera') > -1,
    WebKit: navigator.userAgent.indexOf('AppleWebKit/') > -1,
    Gecko:  navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') === -1,
    MobileSafari: !!navigator.userAgent.match(/Apple.*Mobile.*Safari/)
  },

  BrowserFeatures: {
    XPath: typeof document.evaluate === 'function',
    SelectorsAPI: typeof document.querySelector === 'function',
    ElementExtensions: typeof window.HTMLElement === 'function' || typeof window.HTMLElement === 'object',
    SpecificElementExtensions: (function() {
      var proto1 = document.createElement('div')['__proto__'], proto2 = document.createElement('form')['__proto__'];
      return proto1 && proto2 && typeof proto1.appendChild === 'function' &&
        typeof proto2.appendChild === 'function' && proto1 !== proto2;
    })()
  },

  ScriptFragment: '<script[^>]*>([^\\x00]*?)<\/script>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,  
  
  emptyFunction: function() { },
  K: function(x) { return x }
};

if (Prototype.Browser.MobileSafari)
  Prototype.BrowserFeatures.SpecificElementExtensions = false;
  

<%= include 'base.js', 'string.js' %>

<%= include 'enumerable.js', 'array.js', 'number.js', 'hash.js', 'range.js' %>

<%= include 'ajax.js', 'dom.js', 'selector.js', 'form.js', 'event.js', 'deprecated.js' %>

Element.addMethods();
