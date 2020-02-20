'use strict';

(function () {

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
  var formInputs = document.querySelector('form.setup-wizard-form');
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var SETUP_WINDOW = document.querySelector('.setup');
  var USERNAME_INPUT = formInputs[1];
  var BUTTON_SUBMIT = formInputs[5];
  var UPOAD_BLOCK = document.querySelector('.upload');
  console.log(UPOAD_BLOCK);

  UPOAD_BLOCK.addEventListener('mousedown', moveSetupWindow);

  function moveSetupWindow(evt) {
    evt.preventDefault();
    if (evt.button === 0) {
      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      SETUP_WINDOW.style.top = (SETUP_WINDOW.offsetTop - shift.y) + 'px';
      SETUP_WINDOW.style.left = (SETUP_WINDOW.offsetLeft - shift.x) + 'px';
    }
  }

  formInputs.setAttribute('url', 'https://js.dump.academy/code-and-magick');
  USERNAME_INPUT.setAttribute('minlength', '2');
  BUTTON_SUBMIT.setAttribute('type', 'submit');
  openSetupButton.querySelector('img').setAttribute('tabindex', '0');
  openSetupButton.querySelector('img').setAttribute('aria-role', 'button');
  closeSetupButton.setAttribute('tabindex', '0');
  closeSetupButton.setAttribute('aria-role', 'button');
  // функции открытия/закрытия окна и кликов по элементам
  function onButtonOpenSetup() {
    SETUP_WINDOW.classList.remove('hidden');
    document.addEventListener('keydown', onKeyCloseSetup);
    closeSetupButton.addEventListener('click', onButtonCloseSetup);
    closeSetupButton.addEventListener('keydown', onKeyEnterCloseSetup);
  }
  function onKeyOpenSetup(evt) {
    if (evt.key === ENTER_KEY) {
      SETUP_WINDOW.classList.remove('hidden');
      document.addEventListener('keydown', onKeyCloseSetup);
      closeSetupButton.addEventListener('click', onButtonCloseSetup);
      closeSetupButton.addEventListener('keydown', onKeyEnterCloseSetup);
    }
  }
  function onButtonCloseSetup() {
    SETUP_WINDOW.classList.add('hidden');
    document.removeEventListener('keydown', onKeyCloseSetup);
    closeSetupButton.removeEventListener('click', onButtonCloseSetup);
    closeSetupButton.removeEventListener('keydown', onKeyEnterCloseSetup);
  }
  function onKeyCloseSetup(evt) {
    if (evt.key === ESC_KEY) {
      if (evt.target !== formInputs[1]) {
        SETUP_WINDOW.classList.add('hidden');
        document.removeEventListener('keydown', onKeyCloseSetup);
        closeSetupButton.removeEventListener('click', onButtonCloseSetup);
        closeSetupButton.removeEventListener('keydown', onKeyEnterCloseSetup);
      }
    }
  }
  function onKeyEnterCloseSetup(evt) {
    if (evt.key === ENTER_KEY) {
      SETUP_WINDOW.classList.add('hidden');
      document.removeEventListener('keydown', onKeyCloseSetup);
      closeSetupButton.removeEventListener('click', onButtonCloseSetup);
      closeSetupButton.removeEventListener('keydown', onKeyEnterCloseSetup);
    }
  }

  openSetupButton.addEventListener('click', onButtonOpenSetup);
  openSetupButton.addEventListener('keydown', onKeyOpenSetup);

  function onButtonCoat() {
    formInputs[2].value = WIZARD_COATS_COLOR[indexCoatColor];
    bigWizard.querySelector('.wizard-coat').style.fill = WIZARD_COATS_COLOR[indexCoatColor++];
    if (indexCoatColor === WIZARD_COATS_COLOR.length) {
      indexCoatColor = 0;
    }
  }
  function onButtonEyes() {
    formInputs[3].value = WIZARD_EYES_COLOR[indexColor];
    bigWizardEyes.style.fill = WIZARD_EYES_COLOR[indexColor++];
    if (indexColor === WIZARD_EYES_COLOR.length) {
      indexColor = 0;
    }
  }
  function onButtonFireball() {
    formInputs[4].value = FIREBALL_COLOR[indexColor];
    bigWizardFireball.style.background = FIREBALL_COLOR[indexColor++];
    if (indexColor === FIREBALL_COLOR.length) {
      indexColor = 0;
    }
  }

  bigWizardCoat.addEventListener('click', onButtonCoat);
  bigWizardFireball.addEventListener('click', onButtonFireball);
  bigWizardEyes.addEventListener('click', onButtonEyes);

  function generateName() {
    return Math.random() > 0.5 ? WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)] : WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)] + ' ' + WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
  }
  function generateCoatColor() {
    return WIZARD_COATS_COLOR[Math.floor(Math.random() * WIZARD_COATS_COLOR.length)];
  }
  function generateEyesColor() {
    return WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)];
  }
  // собрал в цикл заполнение массива со свойствами волшебников
  for (var i = 0; i < wizards.length; i++) {
    wizards [i] = {
      name: generateName(),
      coatColor: generateCoatColor(),
      eyesColor: generateEyesColor(),
    };
  }

  function renderWizard(wizard) {
    var str = wizard.coatColor; // если цвет мантии волшебника задаётся с пробелом "rgb ( , , ,)"
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = str.replace(' ', '');
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');

})();
