let map;
let divSquare = '<div id="s$coord" class="square $color"></div>';
let divFigure = '<div id="f$coord" class="figure">$figure</div>';
let isDragging = false;
let isFlipped = false;

$(function () {
    start();
    $('.buttonNew').click(newFiguresPHP);
    $('.buttonFlip').click(flipBoard);
    setInterval('showFiguresPHP()', 2000);
});

// Функция которая будет выполнять все в самом начале
function start() {
    map = new Array(64);
    addSquares();
    //showFigures('rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR');
    showFiguresPHP();
}

// Функция для переворота доски наоборот
function flipBoard() {
    isFlipped = !isFlipped;
    start();
}

// Функция для переноса переноса шахматных фигур
function setDraggable() {
    $('.figure').draggable({
        start: function (event, ui) {
            isDragging = true;
        }
    });
}

// Функция для остановки фигур
function setDroppable() {
    $('.square').droppable({
        drop: function(event, ui) {
            let frCoord = ui.draggable.atr('id').substring(1);
            let toCoord = ui.ihis.id.substring(1);
            moveFigure(frCoord, toCoord);
            moveFigurePHP(frCoord, toCoord);
            isDragging = false;
        }
    });
}

// Функция для перемещения фигур
function moveFigure(frCoord, toCoord) {
    figure = map[frCoord];
    console.log('move from' + frCoord + 'to' + toCoord);
    showFigureAt(frCoord, '1');
    showFigureAt(toCoord, figure);

}

// Функция для отрисовок клеток на шахматной доске
function addSquares() {
    console.log('addSquares');
    $('.board').html('');
    for (let coord = 0; coord < 64; coord++) {
        $('.board').append(divSquare
            .replace('$coord', isFlipped ? 63 - coord: coord)
            .replace('$color',
            isBlackSquareAt(coord) ? 'black' : 'white'));
        setDroppable();
    }
}

// Функция для расставления фигур на доске
function showFigures(figures) {
    for (let coord = 0; coord < 64; coord++){
        showFigureAt(coord, figures.charAt(coord));
    }
}

// Функция для отображения фигур на доске
function showFigureAt(coord, figure) {
   if(map[coord] == figure) return;
    map[coord] = figure;
    $('#s' + coord).html(divFigure
        .replace('$coord', coord)
        .replace('$figure', getChessSymbole(figure)));
    setDraggable();

}

// Функция для отображения шахматных символов
function getChessSymbole(figure) {
    switch (figure) {
        case 'K' :
            return '&#9812;';
        case 'Q' :
            return '&#9813;';
        case 'R' :
            return '&#9814;';
        case 'B' :
            return '&#9815;';
        case 'N' :
            return '&#9816;';
        case 'P' :
            return '&#9817;';
        case 'k' :
            return '&#9818;';
        case 'q' :
            return '&#9819;';
        case 'r' :
            return '&#9820;';
        case 'b' :
            return '&#9821;';
        case 'n' :
            return '&#9822;';
        case 'p' :
            return '&#9823;';
        default :
            return '';
    }
}

// Функция для постановления фигур в первоначальное положение
function newFiguresPHP() {
    $.get('chess.php?newFigures', showFigures);
}
// Функция для проверки цвета квадрата и его отрисовки
function isBlackSquareAt(coord) {
    return (coord % 8 + Math.floor(coord / 8)) % 2;
}

// Функция для перемещения фигур на сервере
function moveFigurePHP(frCoord, toCoord) {
    $.get('chess.php?moveFigure' +
        '&frCoord=' + frCoord +
        '$toCoord=' + toCoord,
        showFigures
    );
}
// Вызов всех функций 
function showFiguresPHP() {
    if(isDragging) return;
    $.get('chess.php?getFigures', showFigures)
}


