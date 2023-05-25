function validate() {
    var retVal = true;

    var nome = document.getElementById("Nome");
    var nomeError = document.getElementById("NomeError");
    if (nome.value.trim().length < 3) {
        retVal = false;
        nomeError.classList.add("d-block");
        nomeError.classList.remove("d-none");
    } else {
        nomeError.classList.remove("d-block");
        nomeError.classList.add("d-none");
    }

    var email = document.getElementById("Email");
    var emailError = document.getElementById("EmailError");
    if (email.value.trim().length < 3) {
        retVal = false;
        emailError.classList.add("d-block");
        emailError.classList.remove("d-none");
    } else {
        emailError.classList.remove("d-block");
        emailError.classList.add("d-none");
    }
    var assunto = document.getElementById("Assunto");
    var assuntoError = document.getElementById("AssuntoError");
    if (assunto.value.trim().length < 3) {
        retVal = false;
        assuntoError.classList.add("d-block");
        assuntoError.classList.remove("d-none");
    } else {
        assuntoError.classList.remove("d-block");
        assuntoError.classList.add("d-none");
    }
    var Mensagem = document.getElementById("Mensagem");
    var MensagemError = document.getElementById("MensagemError");
    if (Mensagem.value.trim().length < 3) {
        retVal = false;
        MensagemError.classList.add("d-block");
        MensagemError.classList.remove("d-none");
    } else {
        MensagemError.classList.remove("d-block");
        MensagemError.classList.add("d-none");
    }

    return retVal;

    if ("retVal" == true) {
        window.location.href = 'msgenviada.html'
    }
}