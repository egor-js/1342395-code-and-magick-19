'use strict';

var wizards = new Array(4);
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var indexCoatColor = 1;
var indexColor = 1;
var openSetupButton = document.querySelector('.setup-open');
var closeSetupButton = document.querySelector('.setup-close');
var bigWizard = document.querySelector('.setup-wizard').querySelector('.wizard');
var bigWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var bigWizardFireball = document.querySelector('.setup-fireball-wrap');
var bigWizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

openSetupButton.querySelector('img').setAttribute('tabindex', '0');
openSetupButton.querySelector('img').setAttribute('aria-role', 'button');
closeSetupButton.setAttribute('tabindex', '0');
closeSetupButton.setAttribute('aria-role', 'button');
// console.log(closeSetupButton.querySelector('span'));
// функции открытия/закрытия окна и кликов по элементам
function onButtonOpenSetup() {
  document.querySelector('.setup').classList.remove('hidden');
  document.addEventListener('keydown', onKeyCloseSetup);
  closeSetupButton.addEventListener('keydown', onKeyEnterCloseSetup);
}
function onButtonCloseSetup() {
  document.querySelector('.setup').classList.add('hidden');
  document.removeEventListener('keydown', onKeyCloseSetup);
}
function onKeyOpenSetup(evt) {
  if (evt.key === ENTER_KEY) {
    document.querySelector('.setup').classList.remove('hidden');
    document.addEventListener('keydown', onKeyCloseSetup);
  }
}
function onKeyCloseSetup(evt) {
  if (evt.key === ESC_KEY) {
    document.querySelector('.setup').classList.add('hidden');
    document.removeEventListener('keydown', onKeyCloseSetup);
  }
}
function onKeyEnterCloseSetup(evt) {
  if (evt.key === ENTER_KEY) {
    document.querySelector('.setup').classList.add('hidden');
    document.removeEventListener('keydown', onKeyCloseSetup);
  }
}
function onButtonCoat() {
  bigWizard.querySelector('.wizard-coat').style.fill = WIZARD_COATS_COLOR[indexCoatColor++];
  if (indexCoatColor === WIZARD_COATS_COLOR.length) {
    indexCoatColor = 0;
  }
}
function onButtonFireball() {
  bigWizardFireball.style.background = FIREBALL_COLOR[indexColor++];
  if (indexColor === FIREBALL_COLOR.length) {
    indexColor = 0;
  }
}
function onButtonEyes() {
  bigWizardEyes.style.fill = WIZARD_EYES_COLOR[indexColor++];
  if (indexColor === WIZARD_EYES_COLOR.length) {
    indexColor = 0;
  }
}
openSetupButton.addEventListener('click', onButtonOpenSetup);
closeSetupButton.addEventListener('click', onButtonCloseSetup);
openSetupButton.addEventListener('keydown', onKeyOpenSetup);
bigWizardCoat.addEventListener('click', onButtonCoat);
bigWizardFireball.addEventListener('click', onButtonFireball);
bigWizardEyes.addEventListener('click', onButtonEyes);

var generateName = function () {
  return Math.random() > 0.5 ? WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)] : WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)] + ' ' + WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
};
var generateCoatColor = function () {
  return WIZARD_COATS_COLOR[Math.floor(Math.random() * WIZARD_COATS_COLOR.length)];
};
var generateEyesColor = function () {
  return WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)];
};
// собрал в цикл заполнение массива со свойствами волшебников
for (var i = 0; i < wizards.length; i++) {
  wizards [i] = {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyesColor(),
  };
}

var renderWizard = function (wizard) {
  var str = wizard.coatColor; // если цвет мантии волшебника задаётся с пробелом "rgb ( , , ,)"
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = str.replace(' ', '');
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
