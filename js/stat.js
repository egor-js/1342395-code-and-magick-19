'use strict';

var WINDOW_RESULTS_X = 100;
var WINDOW_RESULTS_Y = 0;
var WINDOW_RESULTS_WIDHT = 420;
var WINDOW_RESULTS_HEIGHT = 270;
var COLUMN_RESULT_X = 155;
var COLUMN_RESULT_Y = 230;
var COLUMN_GAP = 50;
var COLUMN_WIDHT = 40;
var COLUMN_HEIGHT_MAX = 150;
var TEXT_GAP_Y = 20;
var TEXT_GAP_X = 70;
var GAP_PX_5 = 5;
var GAP_PX_10 = 10;
var GAP_PX_20 = 20;

var renderWindow = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(WINDOW_RESULTS_X + 10, WINDOW_RESULTS_Y + 10, WINDOW_RESULTS_WIDHT, WINDOW_RESULTS_HEIGHT);
  ctx.fillStyle = '#fff';
  ctx.fillRect(WINDOW_RESULTS_X, WINDOW_RESULTS_Y, WINDOW_RESULTS_WIDHT, WINDOW_RESULTS_HEIGHT);
  ctx.fillStyle = '#000';
  ctx.font = '16px PTMono-Regular';
  ctx.fillText('Ура вы победили!', WINDOW_RESULTS_X + TEXT_GAP_X, WINDOW_RESULTS_Y + TEXT_GAP_Y);
  ctx.fillText('Список результатов: ', WINDOW_RESULTS_X + TEXT_GAP_X, WINDOW_RESULTS_Y + TEXT_GAP_Y * 2);
};

var renderResultPlayer = function (ctx, xscore, yscore, color) {
  ctx.fillStyle = color;
  ctx.fillRect(xscore + COLUMN_RESULT_X, COLUMN_RESULT_Y - yscore, COLUMN_WIDHT, yscore);
  ctx.fillStyle = '#000';
};

window.renderStatistics = function (ctx, names, times) {
  // Копируем массив times в массив sortedTimes
  var sortedTimes = times.slice(); // так лучше, чем через for
  // Сортируем массив от большего к меньшему
  sortedTimes.sort(function (a, b) {
    return b - a;
  }); // сортировка через .sort действительно короче ))

  renderWindow(ctx);
  var color = '';
  for (var i = 0; i < names.length; i++) {
    var yscore = Math.round(times[i] / sortedTimes[0] * COLUMN_HEIGHT_MAX);
    var xscore = i * (COLUMN_WIDHT + COLUMN_GAP);
    // выбираем цвет для колонки с результатами в зависимости от имени игрока
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      color = 'hsl(240 ' + Math.round(Math.random() * 100) + '% 50%)';
    }
    // names[i] === 'Вы' ? (color = 'rgba(255, 0, 0, 1)') : (color = 'hsl(240 ' + Math.round(Math.random() * 100) + '% 50%)');
    // рисуем столбцы с результатов для каждого игрока
    renderResultPlayer(ctx, xscore, yscore, color);
    // подписываем столбцы результатов числом миллисекунд сверху
    ctx.fillText(Math.round(times[i]), COLUMN_RESULT_X + GAP_PX_5 + (COLUMN_WIDHT + COLUMN_GAP) * i, COLUMN_RESULT_Y - yscore - GAP_PX_10);
    // подписываем столбцы результатов именами игроков снизу
    ctx.fillText(names[i], COLUMN_RESULT_X + (COLUMN_WIDHT + COLUMN_GAP) * i, WINDOW_RESULTS_HEIGHT - GAP_PX_20);
  }
};
