
let data = {
    elementNode: {        
        searchElement: {},        
        createElement: {},
        insertElement: {}
    },
    attributeNode: {
        direct: {},
        indirect: {},
        classList: {}
    },
    textNode: {
        innerText: {},
        outerText: {},
        innerHTML: {},
        outerHTML: {}
    }
}



function treeDom (container, obj) {
    container.append(createTreeDom(obj))
}

function createTreeDom (obj) {
    if(!Object.keys(obj).length) return;  

    let ul = document.createElement('ul')
    for(let key in obj) {

        let li = document.createElement('li')
        li.innerHTML = key;
        let childUl = createTreeDom(obj[key])
        if(childUl) {

            li.append(childUl)
        }
        ul.append(li)
    }
    return ul
}

let container = document.getElementById('container')

treeDom (container, data)


// -------------------------------------------------

function cssElement() {
    let ul = document.querySelector('ul')
    ul.setAttribute('style', 'color:red')

    let ul2 = ul.querySelectorAll('li>ul')
    for(let key in ul2) {
        ul2[key].setAttribute('style', 'color:blue')

    }

}
cssElement()
