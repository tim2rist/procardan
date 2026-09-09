<?php
header('Content-Type: text/plain; charset=utf-8');

// Recipient address — move to env.php (gitignored) before deploying to shared hosting.
// Create /public/env.php: <?php define('MAIL_TO', 'your@email.com');
// Then replace the line below with: require __DIR__ . '/env.php';
define('MAIL_TO', 'tim2rist@gmail.com');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'error';
    exit;
}

$name    = isset($_POST['name'])    ? htmlspecialchars(strip_tags(trim($_POST['name'])),    ENT_QUOTES, 'UTF-8') : '';
$phone   = isset($_POST['phone'])   ? htmlspecialchars(strip_tags(trim($_POST['phone'])),   ENT_QUOTES, 'UTF-8') : '';
$message = isset($_POST['message']) ? htmlspecialchars(strip_tags(trim($_POST['message'])), ENT_QUOTES, 'UTF-8') : '';

if (empty($name) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo 'error';
    exit;
}

$subject = "Nowe zapytanie od: {$name} (procardan.pl)";

$body = "
<html>
<head><title>Nowa wiadomość ze strony procardan.pl</title></head>
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

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: ProCardan Serwis <no-reply@procardan.pl>\r\n";
$headers .= "Reply-To: {$name} <no-reply@procardan.pl>\r\n";

echo mail(MAIL_TO, $subject, $body, $headers) ? 'success' : 'error';
