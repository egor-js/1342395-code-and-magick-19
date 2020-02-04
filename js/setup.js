'use strict';

document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLOR = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var generateName = function () {
  return Math.random() > 0.5 ? WIZARD_NAMES[Math.round(Math.random() * 7)] + ' ' + WIZARD_SURNAMES[Math.round(Math.random() * 7)] : WIZARD_SURNAMES[Math.round(Math.random() * 7)] + ' ' + WIZARD_NAMES[Math.round(Math.random() * 7)];
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
// функцию конвертации rgb to HEX нагуглил =)
var convertRgbToHex = function (rgbColor) {
  var a = rgbColor;
  a = a.split('(')[1].split(')')[0];
  a = a.split(',');
  var b = a.map(function (x) {
    x = parseInt(x, 10).toString(16);
    return (x.length === 1) ? '0' + x : x;
  });
  return '#' + b.join('');
};
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = convertRgbToHex(wizard.coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
