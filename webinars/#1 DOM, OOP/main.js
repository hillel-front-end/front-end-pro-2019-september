// class

// query -> set className, set attr
class MarkSomething {
    constructor(selector){
        var elem = document.querySelector(selector);

        if(elem) {
            this.element = elem;
        }
    }

    setSpecialClassName(options) {
        if(!options.selector && this.element) {
            this.element.classList.add(options.className);

            return;
        }
        var elem = document.querySelector(options.selector);
        if(!elem) {
            return;
        }
        elem.classList.add(options.className);
    }

    setSpecialAttr(options) {
        if(!options.attrName) {
            return;
        }

        if(!options.selector && this.element) {
            this.element.setAttribute(options.attrName,  options.attrValue);

            return;
        }

        var elem = document.querySelector(options.selector);
        if(!elem){
            return;
        }
        elem.setAttribute(options.attrName,  options.attrValue);
    }
}

window.onload = function() {
    mark = new MarkSomething('.block-example');

    mark.setSpecialAttr({
        attrName: 'title',
        attrValue: 'Example attribute test'
    });

    mark.setSpecialAttr({
        attrName: 'title',
        attrValue: 'Fofo FaFa',
        selector: '.block'
    });

    mark.setSpecialClassName({
        className: 'last-elem',
        selector: 'ul.root > li:last-of-type'
    });
    mark.setSpecialClassName({
        selector: '.block-example',
        className: 'last-elem'
    });
    mark.setSpecialClassName({
        selector: '.sub-tree li:first-child',
        className: 'first-elem'
    });

    // mark.setSpecialAttr({
    //     attrName: 'title',
    //     attrValue: 'Example attribute test',
    //     selector: 'ul > li:first-child'
    // });
}