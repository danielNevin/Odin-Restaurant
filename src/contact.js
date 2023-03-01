import _ from 'lodash';
import './style.css';

function contentContact() {
  let div = document.createElement('div');
  div.setAttribute('id', 'contentContact');

  return div;
}

function contentContactItems(SVG, String) {
  let container = document.createElement('div');
  container.classList.add('content-contact-container');

  let contactSVG = document.createElement('img');
  contactSVG.classList.add('contact-svg');
  contactSVG.src = SVG;
  container.appendChild(contactSVG);

  let contactString = document.createElement('div');
  contactString.classList.add('contact-string');
  contactString.innerHTML = String;
  container.appendChild(contactString);

  return container;
}

export { contentContact, contentContactItems };