document.addEventListener('DomContentLoaded', () => {
const body = document.getElementById('body')
const div = document.createElement('form')
const input = document.createElement('input')
const button = document.createElement('button')
button.innerHTML = 'Add new items'

const listDiv = document.createElement('div')
const ul = document.createElement('ul')
const l1 = document.createElement('li')
const l2 = document.createElement('li')
l1.innerHTML ='List 1'
l2.innerHTML ='List 2'

ul.append(l1, l2)
listDiv.appendChild(ul);
body.append(form, listDiv);
 
const items = [];

     button.addEventListener('click', e => {
         e.preventDefault()
          if (items.length <= 9) {
             let value = input.value.trim();
               if(value !=='') {
                 const found = items.find(item => item === value) 
                 if (found) {
                     alert('items already added')
               } else {
                    items.push(value.trim());
                    const newItem = document.createElement()
                    newItem.innerHTML = value;
                    ul.appendChild(newItem)
               }
               input.value = ''
          }
     } else {
         alert('10 items maximum')
     }
  })
  
})
 




