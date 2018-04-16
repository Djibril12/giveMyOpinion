<?php

include dirname(__DIR__) . DIRECTORY_SEPARATOR . 'init.php';

require_once dirname(__DIR__) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

//include  dirname(__DIR__) . DIRECTORY_SEPARATOR .'views' . DIRECTORY_SEPARATOR . 'index.phtml' ; 
$loader = new Twig_Loader_Filesystem(array(VIEWS_BASE, VIEWS_INS, VIEWS_RECH ,VIEWS_CO,
 VIEWS_CONT));
$twig = new Twig_Environment($loader, array(
    'cache' => false,
    'debug' => true
        ));
$twig->addExtension(new Twig_Extension_Debug());
$twig->addExtension(new Twig_Extensions_Extension_Text());

$session = new Session();
$session->start();
$twig->addGlobal('session', $session);

