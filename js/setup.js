'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLOR = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var generateName = function () {
  return WIZARD_NAMES[Math.round(Math.random() * 7)] + ' ' + WIZARD_SURNAMES[Math.round(Math.random() * 7)];
};
var generateCoatColor = function () {
  return WIZARD_COATS_COLOR[Math.round(Math.random() * 5)];
};
var generateEyesColor = function () {
  return WIZARD_EYES_COLOR[Math.round(Math.random() * 4)];
};
var wizards = [
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyesColor()
  },
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyesColor()
  },
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyesColor()
  },
  {
    name: generateName(),
    coatColor: generateCoatColor(),
    eyesColor: generateEyesColor()
  }
];
/*
var generateWizard = function () {
  for (var i = 0; i < wizards.length; i++) {
    console.log(wizards[i]); //.name = generateName();
  }
}
generateWizard();
*/


for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  console.log(wizardElement);
  // wizardElement.querySelector('.wizard-coat').style.fill =  wizards[i].coatColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  console.log(wizardElement);
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
