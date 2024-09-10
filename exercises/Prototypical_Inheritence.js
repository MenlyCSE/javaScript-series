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
}

HtmlSelectElement.prototype = new HtmlElement();