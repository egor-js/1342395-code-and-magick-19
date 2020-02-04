'use strict';

document.querySelector('.setup').classList.remove('hidden');
var wizards = [];
wizards.length = 4;
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLOR = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var generateName = function () {
  return Math.random() > 0.5 ? WIZARD_NAMES[Math.round(Math.random() * (WIZARD_NAMES.length - 1))] + ' ' + WIZARD_SURNAMES[Math.round(Math.random() * (WIZARD_SURNAMES.length - 1))] : WIZARD_SURNAMES[Math.round(Math.random() * (WIZARD_SURNAMES.length - 1))] + ' ' + WIZARD_NAMES[Math.round(Math.random() * (WIZARD_NAMES.length - 1))];
};
var generateCoatColor = function () {
  return WIZARD_COATS_COLOR[Math.round(Math.random() * 5)];
};
var generateEyesColor = function () {
  return WIZARD_EYES_COLOR[Math.round(Math.random() * 4)];
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
  var str = wizard.coatColor;
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = str.replace(' ', '');
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
