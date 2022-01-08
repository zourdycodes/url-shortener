// *************
//  ITEM CONTROLLER
// *************

const ItemCtrl = (function () {
  // constructor
  const Item = function (id, url, shortUrl) {
    this.id = id;
    this.url = url;
    this.shortUrl = shortUrl;
  };

  // data structures
  const data = {
    items: [],
    currentItem: null,
  };

  // public methods
  return {
    logData: () => {
      return data;
    },
  };
})();

// *************
//  USER INTERFACE CONTROLLER
// *************

const UICtrl = (function () {
  const UI_SELECTORS = {
    linkInput: '#shortener',
    shortBtn: '#submit__btn',
    linkContainer: '.links__container',
  };
})();
