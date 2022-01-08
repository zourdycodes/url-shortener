/* eslint-disable indent */

// *************
//  ITEM CONTROLLER
// *************

interface Item {
  id: number;
  url: string;
  shortUrl: string;
}

export class ItemControl {
  public id: number;
  public url: string;
  public shortUrl: string;
  public data: {
    item: Item[];
    currentItem: null;
  };

  constructor(id: number, url: string, shortUrl: string) {
    this.id = id;
    this.url = url;
    this.shortUrl = shortUrl;
    this.data = {
      item: [
        {
          id: 0,
          url: 'http://hello.com',
          shortUrl: 'http://sho.link/7nkhf',
        },
        {
          id: 1,
          url: 'http://google.com',
          shortUrl: 'http://sho.link/8jmhf',
        },
      ],
      currentItem: null,
    };
  }

  public logData() {
    return this.data;
  }
}

// *************
//  USER INTERFACE CONTROLLER
// *************

export class UIControl {
  public ui_selectors: {
    linkInput: string;
    shortBtn: string;
    linkContainer: string;
    errorMessage: string;
    copyLink: string;
  };

  constructor() {
    this.ui_selectors = {
      linkInput: '#shortener',
      shortBtn: '#submit__btn',
      linkContainer: '.links__container',
      errorMessage: '.error__msg',
      copyLink: '.copy__btn',
    };
  }

  public getSelectors() {
    return this.ui_selectors;
  }

  public getLinkInput() {
    return {
      longLink: document.querySelector(
        this.ui_selectors.linkInput,
      ) as HTMLInputElement,
    };
  }
}

export class App {
  UIControl: UIControl;
  ItemControl: ItemControl;

  constructor(UIControl: UIControl, ItemControl: ItemControl) {
    this.UIControl = UIControl;
    this.ItemControl = ItemControl;
  }

  loadEventListeners() {
    const UISelectors = this.UIControl.getSelectors();
    document
      .querySelector(UISelectors.shortBtn)
      ?.addEventListener('click', this.addLink);
  }

  private addLink(e: Event) {
    e.preventDefault();
    // get form input from UI Controller
    const input = this.UIControl.getLinkInput().longLink.value;
    console.log(input);
  }

  init() {
    this.loadEventListeners();
  }
}

const initializeApp = new App(
  new UIControl(),
  new ItemControl(666, 'ajdajd', 'asjajs'),
);

initializeApp.init();
