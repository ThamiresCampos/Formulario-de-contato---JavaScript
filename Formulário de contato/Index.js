function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        telefone: document.getElementById("telefone").value,
    }


    const serviceID = "service_f435fig";
    const templateID = "template_erj2c3c";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("telefone").value = "";
                console.log(res);
                alert("Mensagem enviada com sucesso!");
            })
            
        .catch((err) => console.log(err));
}