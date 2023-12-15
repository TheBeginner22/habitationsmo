<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // You can customize the email content and recipient here
    #$to = "your_email@example.com";
    $subject = "New Form Submission: $subject";
    $headers = "From: $name <$email>";

    // Send the email
    mail($to, $subject, $message, $headers);

    // You can redirect the user to a thank you page or display a thank you message here
    echo "Thank you for your submission!";
}
?>