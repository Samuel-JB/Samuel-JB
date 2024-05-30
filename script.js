    function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "info@samuelbyalugaba.site",
        Password : "4992BD5CCD8197128986268E4EA96534A832",
        To : 'sammyjerry5@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact Form: " + document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value + 
              "<br> Email: " + document.getElementById("email").value +
              "<br> Phone: " + document.getElementById("phone").value +
              "<br> Message: " + document.getElementById("message").value,
    }).then(
      message => alert("Your Message Was Sent Successfully")
    );
    }