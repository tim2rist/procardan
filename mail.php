<?php
// Set headers for CORS if needed, or simply return plain text
header('Content-Type: text/plain; charset=utf-8');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo 'error';
    exit;
}

// Target email address
$to = 'tim2rist@gmail.com';

// Retrieve and sanitize form data
$name = isset($_POST['name']) ? htmlspecialchars(strip_tags(trim($_POST['name']))) : '';
$phone = isset($_POST['phone']) ? htmlspecialchars(strip_tags(trim($_POST['phone']))) : '';
$message = isset($_POST['message']) ? htmlspecialchars(strip_tags(trim($_POST['message']))) : '';

// Validation
if (empty($name) || empty($phone) || empty($message)) {
    echo 'error';
    exit;
}

// Subject Line
$subject = "Nowe zapytanie od: " . $name . " (procardan.pl)";

// HTML Email Message Body
$emailMessage = "
<html>
<head>
    <title>Nowa wiadomość ze strony procardan.pl</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
    <h2 style='color: #e01e2b;'>Nowe zapytanie ofertowe (procardan.pl)</h2>
    <hr style='border: 0; border-top: 1px solid #eee; margin: 20px 0;'>
    <p><strong>Imię i nazwisko:</strong> {$name}</p>
    <p><strong>Numer telefonu:</strong> {$phone}</p>
    <p><strong>Wiadomość:</strong></p>
    <div style='background-color: #f9f9f9; border-left: 4px solid #e01e2b; padding: 15px; margin-top: 10px;'>
        " . nl2br($message) . "
    </div>
    <hr style='border: 0; border-top: 1px solid #eee; margin: 20px 0;'>
    <p style='font-size: 12px; color: #999;'>Wiadomość wysłana automatycznie z serwera procardan.pl</p>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: ProCardan Serwis <no-reply@procardan.pl>\r\n";
$headers .= "Reply-To: {$name} <no-reply@procardan.pl>\r\n";

// Execute native mail function
if (mail($to, $subject, $emailMessage, $headers)) {
    echo 'success';
} else {
    echo 'error';
}
?>
