<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Adjust to your domain in production
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    $requiredFields = ['firstName', 'lastName', 'businessEmail', 'phoneNumber', 'companyName', 'primaryRole', 'venture', 'requestType'];
    foreach ($requiredFields as $field) {
        if (empty($data[$field])) {
            echo json_encode(['error' => 'All fields are required']);
            exit;
        }
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'kyndrasystems@gmail.com';
        $mail->Password = 'your-app-specific-password'; // Replace with your app-specific password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Office email
        $mail->setFrom('kyndrasystems@gmail.com', 'TLC Homes');
        $mail->addAddress('info@tlchomes.co.ke');
        $mail->Subject = 'New Stakeholder Onboarding Request';
        $mail->Body = "New Stakeholder Onboarding Request\n" .
                     "--------------------------------\n" .
                     "First Name: " . $data['firstName'] . "\n" .
                     "Last Name: " . $data['lastName'] . "\n" .
                     "Business Email: " . $data['businessEmail'] . "\n" .
                     "Phone Number: " . $data['phoneNumber'] . "\n" .
                     "Company Name: " . $data['companyName'] . "\n" .
                     "Primary Role: " . $data['primaryRole'] . "\n" .
                     "Venture: " . $data['venture'] . "\n" .
                     "Request Type: " . $data['requestType'] . "\n" .
                     "Submitted on: " . date('Y-m-d H:i:s', strtotime('Africa/Nairobi'));
        $mail->send();

        // User email
        $mail->clearAddresses();
        $mail->addAddress($data['businessEmail']);
        $mail->Subject = 'Thank You for Your Onboarding Request';
        $mail->Body = "Dear " . $data['firstName'] . " " . $data['lastName'] . ",\n\n" .
                     "Thank you for submitting your onboarding request with TLC Homes Services Kenya. We have received your details and will process your request for " . $data['requestType'] . " under " . $data['venture'] . ".\n\n" .
                     "Details Submitted:\n" .
                     "- Email: " . $data['businessEmail'] . "\n" .
                     "- Phone: " . $data['phoneNumber'] . "\n" .
                     "- Company: " . $data['companyName'] . "\n" .
                     "- Role: " . $data['primaryRole'] . "\n\n" .
                     "We will get back to you soon. For any queries, contact us at info@tlchomes.co.ke.\n\n" .
                     "Best regards,\n" .
                     "TLC Homes Services Kenya Team\n" .
                     "Submitted on: " . date('Y-m-d H:i:s', strtotime('Africa/Nairobi'));
        $mail->send();

        echo json_encode(['message' => 'Form submitted successfully, emails sent']);
    } catch (Exception $e) {
        echo json_encode(['error' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}
?>