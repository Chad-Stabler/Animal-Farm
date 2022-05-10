import { findById } from '../utils.js';
import { animals } from '../data.js';

const params = new URLSearchParams(window.location.search);
const animalName = document.getElementById('animal-name');
const imageEl = document.getElementById('animal-image');
const name = document.getElementById('name');
const type = document.getElementById('type');
const phrase = document.getElementById('phrase');

const animal = findById(params.get('id'), animals);

animalName.textContent = animal.name;
name.textContent = animal.name;
type.textContent = animal.type;
phrase.textContent = animal.says;
imageEl.src = `../assets/${animal.type}.svg`;

