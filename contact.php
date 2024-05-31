<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    $to = "tucorreo@example.com"; // Reemplaza esto con tu correo electrónico
    $subject = "Nuevo mensaje de contacto";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $body = "Has recibido un nuevo mensaje de contacto.\n\n";
    $body .= "Email: $email\n";
    $body .= "Mensaje:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado. Gracias por contactarme.";
    } else {
        echo "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
} else {
    echo "Método no permitido.";
}
?>
