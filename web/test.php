<?php
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

//$w = stream_get_line(STDIN, 200 + 1, "\n");
$w = "www.codingame.com";
// Write an action using echo(). DON'T FORGET THE TRAILING \n
// To debug (equivalent to var_dump): error_log(var_export($var, true));
$ips = explode('.', $w);

//var_dump($ips);

$mot = '';
for ($i = 0; $i < count($ips); $i++) {
    $mot = $ips[$i];
  //  echo $mot . ' taille : '. strlen($mot);
    $somAcscii = 0;
     for ($j = 0; $j < strlen($mot); $j++) {
    //       echo ':'. $mot[$j];
           $somAcscii += ord($mot[$j]);
     }
     echo "$mot => $somAcscii\n";
}


