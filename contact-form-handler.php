<?php
    $msg = '';
    $msgClass = '';
    // CHECK SUBMIT FOR CONTACT FORM
    if(filter_has_var(INPUT_POST, 'submit'))
    {
        $firstName = htmlspecialchars($_POST['firstName']);
        $lastName = htmlspecialchars($_POST['lastName']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
        
        // CHECK REQUIRED FIELDS
        if(!empty($email) && !empty($firstName) && !empty($lastName) && !empty($message))
        {
            if(filter_var($email, FILTER_VALIDATE_EMAIL) === false)
            {
                $msg = 'Enter a valid email address';
                $msgClass = 'alert-danger';
            }
            else
            {
                // SEND EMAIL
                $toMyEmail = 'emre.palandoken@hetic.net';
                $subject = 'Contact from '. $firstName . $lastName;
                $body = '
                    <h3>'.$firstName.$lastName.'</h3>
                    <h4>'.$message.'</h4>
                ';
                $headers = 'MIME-Version: 1.0' .'\r\n';
                $headers.= 'Content-Type:text/html;charset=UTF-8' .'\r\n';
                $headers.= 'From: ' .$firstName. '<'.$email.'>'. '\r\n';

                if(mail($toMyEmail, $subject, $body, $headers))
                {
                    $msg='Email sent';
                    $msgClass='alert-success';
                }
                else
                {
                    $msg='Email not sent';
                    $msgClass='alert-danger';
                }
            }
        }
        else
        {
            $msg = 'Fill all fileds';
            $msgClass = 'alert-danger';
        }
    }
?>
