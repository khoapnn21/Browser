
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


//---------------------------------------------------

function nameForm() {
    let form = document.getElementById('form-1')

    let input = form.querySelectorAll('input')[0]   

    let error = input.parentElement.querySelector('span')
    input.onblur = function() {
        let range = input.value.length
        if (range < 6 ) { 
          input.classList.add('invalid');
          error.innerHTML = 'Vui lòng nhập đầy đủ Họ và Tên'
        }
      };
      
      input.onfocus = function() {
        if (this.classList.contains('invalid')) {
          this.classList.remove('invalid');
          error.innerHTML = "";
        }
      };
}

nameForm();

function emailForm() {
    let form = document.getElementById('form-1')
    let input = form.querySelectorAll('input')[1]
    let error = input.parentElement.querySelector('span')
    input.onblur = function() {
        if (!input.value.includes('@')) { 
          input.classList.add('invalid');
          error.innerHTML = 'Email không đúng.'
        }
      };
      
      input.onfocus = function() {
        if (this.classList.contains('invalid')) {
          this.classList.remove('invalid');
          error.innerHTML = "";
        }
      };
}

emailForm();

function addressForm() {
    let form = document.getElementById('form-1')

    let input = form.querySelectorAll('input')[2]   

    let error = input.parentElement.querySelector('span')
    input.onblur = function() {
        let range = input.value.length
        if (range < 6 ) { 
          input.classList.add('invalid');
          error.innerHTML = 'Vui lòng nhập địa chỉ'
        }
      };
      
      input.onfocus = function() {
        if (this.classList.contains('invalid')) {
          this.classList.remove('invalid');
          error.innerHTML = "";
        }
      };
}

addressForm();

function phoneNumbersForm() {
    let form = document.getElementById('form-1')
    let input = form.querySelectorAll('input')[3]
    let error = input.parentElement.querySelector('span')
    input.onblur = function() {
        let range = input.value
        if (range.length < 10) { 
          input.classList.add('invalid');
          error.innerHTML = 'Số điện thoại gồm 10 số'
        }
      };
      
      input.onfocus = function() {
        if (this.classList.contains('invalid')) {
          this.classList.remove('invalid');
          error.innerHTML = "";
        }
      };
}
phoneNumbersForm();