function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('Focused');
}

function HtmlSelectElement() {
    this.items = [];

    this.addItem = function (array) {
        for (let element of array)
            this.items.push(element);
    }

    this.removeItem = function (target) {
        for (let i = 0; i < this.items.length; i++)
            if (target == this.items[i])
                this.items.splice(i, 1);
    }

    this.render = function () {
        return `<select>${this.items.map(element => `<option>${element}</option>`).join('')}</select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;

    this.render = function () {
        return `<img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;