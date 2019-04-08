<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2019-04-08
 * Time: 21:04
 */

/**
 * Хранение данных в сессиях
 * Class SessionStorage
 */
class SessionStorage implements Storage
{
    public $name;

    /**
     * SessionStorage constructor.
     * @param string $name
     */
    public function __construct($name)
    {
        session_start();
        $this->name = $name;
    }

    /**
     * Сохранение фигур
     * @param $figures
     */
    public function save($figures)
    {
        
        $_SESSION[$this->name] = $figures;
    }

    /**
     * Возвращение фигур в исходное положение
     */
    function load()
    {

        return $_SESSION[$this->name];
    }
}