import _ from 'lodash';
import './style.css';

function contentMenu() {
  let div = document.createElement('div');
  div.setAttribute('id', 'contentMenu');

  return div;
}

function contentMenuItems(item, price) {
  let container = document.createElement('div');
  container.classList.add('content-menu-item-container');

  let menuItemDescription = document.createElement('div');
  menuItemDescription.classList.add('menu-item-description');
  menuItemDescription.innerHTML = item;
  container.appendChild(menuItemDescription)

  let menuItemPrice = document.createElement('div');
  menuItemPrice.classList.add('menu-item-price');
  menuItemPrice.innerHTML = price;
  container.appendChild(menuItemPrice)

  return container;
}

export { contentMenu, contentMenuItems };