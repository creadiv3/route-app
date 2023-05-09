'use strict';

const app = {
  initAOS() {
    AOS.init();
  },

  init() {
    this.initAOS();
  },
};
app.init();
