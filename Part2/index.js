function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('Focused');
}

function HtmlSelectElement(items, addItem, removeItem) {
    
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);