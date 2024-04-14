<?php

$username = $_POST["username"];
$from = $_POST["username"];
$subject = "Wiadomość ze strony www";
$to = "k.kolosowska@wp.pl";
$message = $_POST["msg"];
$message = &_POST["msg"];

$txt = "Imię: " = "Imię " . $name . "\r\n" . "Email: " . $from .  "\r\n" . "\r\n" "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status){
    header("Location: /contact.html?mail_status=sent");
    else{
        header("Location: /contact.html?mail_status=error")
    }
}