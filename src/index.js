import './styles.css';
import {button, loadHome} from './home';

const content = document.querySelector('#content');



init();


function init() {
  loadHome(content);
}