function verifica() {
    if (document.forms[0].email.value.length == 0) {
        alert('Por favor, informe o seu EMAIL !')
        document.formEnvia.email.focus()
        return false;
    }

    function checarEmail() {
        if (document.forms[0].email.value = '' ||
            document.forms[0].email.value.indexOf('@') == -1 ||
            document.forms[0].email.value.indexOf('.') == -1) {

            alert('Por favor, informe um E-mail válido!')
            return false;
        }
    }
    checarEmail();
}
