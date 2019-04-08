<?php

/**
 * Класс для работы с шахматной доской
 * Class Board
 */
class Board
{
    public $storage;
    public function __construct(Storage $storage)
    {
        $this->storage = $storage;
    }

    /**
     * Метод для постановления фигур в первоначальное положение
     * @param $storage
     * @return
     */
    public function newFigures($storage)
    {
       $this->$storage->save('rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR');
        return $this->$storage->load();
    }

    /**
     * Метод для отображения фигур на доске
     * @param $storage
     * @return mixed
     */
    public function getFigures($storage)
    {
        return $this->$storage->load();
    }

    /**
     * Метод для перемещения фигур на доске
     * @param $storage
     * @param $frCoord
     * @param $toCoord
     * @return
     */
    public function moveFigure($storage, $frCoord, $toCoord)
    {
        $figures = $this->$storage->load();
        $figure = $figures[$frCoord];
        $figures[$frCoord] = '1';
        $figures[$toCoord] = $figure;
        $this->$storage->save($figures);
        return $this->$storage->load();
    }
}