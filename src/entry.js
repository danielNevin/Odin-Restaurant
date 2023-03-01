import { functionsIn, head, toUpper } from 'lodash';
import { contentHome, contentHomeBlurbOne, contentHomeBlurbTwo, contentHomeOrderOnline, contentHomeImage } from './home.js';
import { contentMenu, contentMenuItems } from './menu.js';
import { contentContact, contentContactItems } from './contact.js';

import callSVG from './img/call.svg';
import homeSVG from './img/home.svg';

function initalizePrimaryContainer() {
  let div = document.createElement('div');
  div.setAttribute('id','primaryContainer');
  document.body.appendChild(div);
}

function initalizeSecondaryContainers() {
  let div = document.getElementById('primaryContainer')

  let header = document.createElement('div');
  header.setAttribute('id','header');
  div.appendChild(header);

  let contentContainer = document.createElement('div');
  contentContainer.setAttribute('id','contentContainer');
  div.appendChild(contentContainer);

  let footer = document.createElement('div');
  footer.setAttribute('id','footer');
  footer.innerHTML = 'Copyright &#169; 2023 https://github.com/dnevin234';
  div.appendChild(footer);
}

function initalizeHeader() {
  let header = document.getElementById('header');

  let titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
  header.appendChild(titleContainer);
  titleContainer.setAttribute('id','titleContainer');

  let buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  header.appendChild(buttonContainer);
  buttonContainer.setAttribute('id','buttonContainer');
}

function initalizeHeaderContainers() {
  let buttonContainer = document.getElementById('buttonContainer');
  let titleContainer = document.getElementById('titleContainer');

  let title = document.createElement('div');
  title.innerHTML = toUpper('Bounty of the Pacific');
  title.classList.add('home-title');
  titleContainer.appendChild(title);
  
  let homeButton = document.createElement('button');
  homeButton.classList.add('entry-button');
  homeButton.setAttribute('id', 'homeButton');
  homeButton.innerHTML = 'HOME';
  buttonContainer.appendChild(homeButton);

  let menuButton = document.createElement('button');
  menuButton.classList.add('entry-button');
  menuButton.setAttribute('id', 'menuButton');
  menuButton.innerHTML = 'MENU';
  buttonContainer.appendChild(menuButton);

  let contactButton = document.createElement('button');
  contactButton.classList.add('entry-button');
  contactButton.setAttribute('id', 'contactButton');
  contactButton.innerHTML = 'CONTACT';
  buttonContainer.appendChild(contactButton);
}

function initalizeContent() {
  let contentContainer = document.getElementById('contentContainer');

  let content = document.createElement('div');
  content.setAttribute('id', 'content');
  contentContainer.appendChild(content);
}

window.onload = function() {
  initalizePrimaryContainer()
  initalizeSecondaryContainers();
  initalizeHeader();
  initalizeHeaderContainers();
  initalizeContent();

  let content = document.getElementById('content');
  content.appendChild(contentHome());

  document.getElementById('contentHome').appendChild(contentHomeBlurbOne());
  document.getElementById('contentHome').appendChild(contentHomeBlurbTwo());
  document.getElementById('contentHome').appendChild(contentHomeOrderOnline());

  document.getElementById('homeButton').onclick = function () {
    let div = document.getElementById('content');
    div.replaceChildren();
    div.appendChild(contentHome());
    document.getElementById('contentHome').appendChild(contentHomeBlurbOne());
    document.getElementById('contentHome').appendChild(contentHomeBlurbTwo());
    document.getElementById('contentHome').appendChild(contentHomeOrderOnline());

  }
  document.getElementById('menuButton').onclick = function () {
    let div = document.getElementById('content');
    div.replaceChildren();
    div.appendChild(contentMenu());
    document.getElementById('contentMenu').appendChild(contentMenuItems("Chips (1 Scoop) :", "$2.80"));
    document.getElementById('contentMenu').appendChild(contentMenuItems("Chips (1/2 Scoop) :", "$2.00"));
    document.getElementById('contentMenu').appendChild(contentMenuItems("Fish :", "$2.80"));
    document.getElementById('contentMenu').appendChild(contentMenuItems("Hotdog :", "$2.50"));
    document.getElementById('contentMenu').appendChild(contentMenuItems("Crab Stick :", "$2.20"));
    document.getElementById('contentMenu').appendChild(contentMenuItems("Potato Fritter :", "$1.50"));
    document.getElementById('contentMenu').appendChild(contentMenuItems("Kumara Fritter :", "$2.00"));
    document.getElementById('contentMenu').appendChild(contentMenuItems("Chicken Nuggets x 6 :", "$4.00"));
    document.getElementById('contentMenu').appendChild(contentMenuItems("Onion Ring :", "$2.40"));
    document.getElementById('contentMenu').appendChild(contentMenuItems("Kalamari Rings x 6 :", "5.80"));
  }
  document.getElementById('contactButton').onclick = function () {
    let div = document.getElementById('content');
    div.replaceChildren();
    div.appendChild(contentContact());
    document.getElementById('contentContact').appendChild(contentContactItems(callSVG, '06 659 7823'));
    document.getElementById('contentContact').appendChild(contentContactItems(homeSVG, '392 Ferguson Street, Palmerston North Central, Palmerston North 4410'));
  }
}
