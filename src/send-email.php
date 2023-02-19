<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "abraham.lillol@gmail.com";
  $firstName = $_POST["firstName"];
  $lastName = $_POST["lastName"];
  $phone=$_POST["phone"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $subject = "Nuevo mensaje de " . $name;
  $body = "Nombre: " . $name . "\nEmail: " . $email . "\nMensaje: " . $message;
  mail($to, $subject, $body);
  echo "Email sent successfully!";
}
?>
