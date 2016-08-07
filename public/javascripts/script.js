(function (document) {
    'use strict';

    app._pageData = {page: "orders"};
    app._onPageSelected = function () {
        console.log("_onPageSelected");
        console.log(pages.selected);
        window[pages.selected].init();
    }
})(document);