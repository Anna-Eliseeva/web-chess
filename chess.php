<?php
session_start();
if(isset($_GET['newFigires'])) {
    $_SESSION['map'] = 'rnbqkbnrpppppppp1111111111111111111111111111111PPPPPPPPR1NBQKBNR';
}

if(isset($_GET['getFigures'])){
    echo $_SESSION['map'];
}

if(isset($_GET['moveFigure'])) {
    $frCoord = $_GET['frCoord'];
    $toCoord = $_GET['toCoord'];
    $figure = $_SESSION['map'][$frCoord];
    $_SESSION['map'][$frCoord] = 1;
    $_SESSION['map'][$toCoord] = $figure;
    echo $_SESSION['map'];
  // echo 'rnbqkbnrpppppppp1111111111111111111111111111111PPPPPPPPR1NBQKBNR';
}

