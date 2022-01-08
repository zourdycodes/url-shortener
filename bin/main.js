"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.UIControl = exports.ItemControl = void 0;
class ItemControl {
    constructor(id, url, shortUrl) {
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
    logData() {
        return this.data;
    }
}
exports.ItemControl = ItemControl;
class UIControl {
    constructor() {
        this.ui_selectors = {
            linkInput: '#shortener',
            shortBtn: '#submit__btn',
            linkContainer: '.links__container',
            errorMessage: '.error__msg',
            copyLink: '.copy__btn',
        };
    }
    getSelectors() {
        return this.ui_selectors;
    }
    getLinkInput() {
        return {
            longLink: document.querySelector(this.ui_selectors.linkInput),
        };
    }
}
exports.UIControl = UIControl;
class App {
    constructor(UIControl, ItemControl) {
        this.UIControl = UIControl;
        this.ItemControl = ItemControl;
    }
    loadEventListeners() {
        var _a;
        const UISelectors = this.UIControl.getSelectors();
        (_a = document
            .querySelector(UISelectors.shortBtn)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.addLink);
    }
    addLink(e) {
        e.preventDefault();
        const input = this.UIControl.getLinkInput().longLink.value;
        console.log(input);
    }
    init() {
        this.loadEventListeners();
    }
}
exports.App = App;
const initializeApp = new App(new UIControl(), new ItemControl(666, 'ajdajd', 'asjajs'));
initializeApp.init();
//# sourceMappingURL=main.js.map