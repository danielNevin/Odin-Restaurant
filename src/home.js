import _, { toUpper, upperCase } from 'lodash';
import './style.css';

function contentHome() {
  let div = document.createElement('div');
  div.setAttribute('id', 'contentHome');

  return div;
}

function contentHomeBlurbOne() {
  let div = document.createElement('div');
  div.innerHTML = 'The best Chip Shop in all of New Zealand!*';
  div.setAttribute('id', 'contentHomeBlurbOne');
  div.classList.add('content-home-div');

  return div;
}

function contentHomeBlurbTwo() {
  let div = document.createElement('div');
  div.innerHTML = 'Order Online or swing by and see us in person!';
  div.setAttribute('id', 'contentHomeBlurbOne');
  div.classList.add('content-home-div');

  return div;
}

function contentHomeOrderOnline() {
  let button = document.createElement('button');
  button.innerHTML = toUpper('Order Online');
  button.setAttribute('id', 'orderOnlineButton');
  button.classList.add('content-home-button');

  return button;
}

function contentHomeImage() {
  let img = new Image();
  img.src = '/img/fish-and-chips.jpg';

  return img;
}

export {contentHome, contentHomeBlurbOne, contentHomeBlurbTwo, contentHomeOrderOnline, contentHomeImage }