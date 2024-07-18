import './styles.css';
import { Homebutton, loadHome } from './modules/home.js';
import { Menubutton } from './modules/menu.js';
import { Aboutbutton } from './modules/about.js';

const contentDiv = document.querySelector('#content');

init();

function init() {
  loadHome(contentDiv);
  Homebutton;
  Menubutton;
  Aboutbutton;
}