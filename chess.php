<?php
require_once __DIR__ . '/class/Storage.php';
require_once __DIR__ . '/class/SessionStorage.php';
require_once __DIR__ . '/class/Board.php';

$storage = new SessionStorage('map');
$board = new Board($storage);

if(isset($_GET['newFigures'])) {
    echo $board->newFigures();
}

if(isset($_GET['getFigures'])){
    echo $board->getFigures();
}

if(isset($_GET['moveFigure'])) {
    echo $board->moveFigures($_GET['frCoord'], $_GET['toCoord']);
}

