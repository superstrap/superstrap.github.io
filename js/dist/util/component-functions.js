/*!
  * SuperStrap component-functions.js v1.0.1 (undefined)
  * Copyright 2023 The superStrap Authors (https://github.com/superstrap/superstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/gtoy1118/superstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('../dom/event-handler.js'), require('../dom/selector-engine.js'), require('./index.js')) :
  typeof define === 'function' && define.amd ? define(['exports', '../dom/event-handler', '../dom/selector-engine', './index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ComponentFunctions = {}, global.EventHandler, global.SelectorEngine, global.Index));
})(this, (function (exports, EventHandler, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * SuperStrap util/*
   * Licensed under MIT (https://github.com/gtoy1118/superstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
      if (index_js.isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };

  exports.enableDismissTrigger = enableDismissTrigger;

  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=component-functions.js.map
