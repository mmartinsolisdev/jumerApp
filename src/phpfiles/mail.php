<?php

$destino="juventudmercedariacancun@gmail.com";
$nombre=$_POST['nombre'];
$asunto=$_POST['asunto'];

$comentario="
 Email: $_POST[email]
 Comentario: $_POST[com]
";

$headers = 'From:'.$_POST['email']."\r\n".
		   'Reply-To:'.$_POST['email']."\r\n".
		   'X-Mailer: PHP/'.phpversion();

mail($destino,$asunto,$comentario,$headers);

?>