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
     * @param $name
     */
    function __construct($name)
    {
        session_start();
    }

    /**
     * Сохранение фигур
     * @param $figures
     */
    public function save($figures)
    {

        $_SESSION[$name] = $figures;
    }

    /**
     * Возвращение фигур в исходное положение
     */
    function load()
    {
        
        return $_SESSION[$name];
    }
}