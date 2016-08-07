(function (document) {
    'use strict';

    app.data = {page: "orders"};
    app._onPageSelected = function () {
        console.log("_onPageSelected");
        console.log(pages.selected);
        window[pages.selected].init();
    }
})(document);