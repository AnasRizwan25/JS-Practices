let parentDiv = document.querySelector('.order-list');
let ul = document.createElement('ul');
parentDiv.appendChild(ul);

function onPress(value) {
  let count = 0;
  
  if (value === 'add') {

    let li = document.createElement('li');

    for (let i = 0; i < ul.childNodes.length; i++) {
      if (ul.childNodes[i].nodeName.toLowerCase() === 'li') {
        count++;
      }
    }

    li.innerText = `List ${count + 1}`;
    ul.appendChild(li);
  } else {

    for (let i = ul.childNodes.length - 1; i >= 0; i++) {
      if (ul.childNodes[i].nodeName.toLowerCase() === 'li') {
        ul.removeChild(ul.childNodes[i]);
        break;
      }
    }
  }


}