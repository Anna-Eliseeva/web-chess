// Вставка блоков в HTML код
let divSquare = '<div id="s$coord" class="square $color"></div>';
let divFigure = '<div id="f$coord" class="figure">$figure</div>';
$(function () {
   addSquares();
   showFigures('rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR');
});

// Функция для отрисовок клеток на шахматной доске
function addSquares() {
    console.log('addSquares');
    $('.board').html('');
    for (let coord = 0; coord < 64; coord++) {
        $('.board').append(divSquare
            .replace('$coord', coord)
            .replace('$color',
            isBlackSquareAt(coord) ? 'black' : 'white'));
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
    $('#s' + coord).html(divFigure
        .replace('$coord', coord)
        .replace('$figure', getChessSymbole(figure)));

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

// Функция для проверки цвета квадрата и его отрисовки
function isBlackSquareAt(coord) {
    return (coord % 8 + Math.floor(coord / 8)) % 2;
}


