/* Função de validação  */
function validate() {
    var retVal = true; /* Vamos partir do princípio de que o formulário está válido ... */
    if (document.getElementById("Nome").value.trim().length < 3) {
        retVal = false;
        document.getElementById("NomeError").classList.remove("d-none");
        document.getElementById("NomeError").classList.add("d-block");
    }
    if (document.getElementById("Morada").value.split(' ').length < 3) {
        retVal = false;
        document.getElementById("MoradaError").classList.remove("d-none");
        document.getElementById("MoradaError").classList.add("d-block");
    }

    if (document.getElementById("Curso").options[document.getElementById("Curso").selectedIndex].value == "") {
        retVal = false;
        document.getElementById("CursoError").classList.remove("d-none");
        document.getElementById("CursoError").classList.add("d-block");
    }

    if (document.querySelectorAll('input[name="vehicle"]:checked').length <= 1) {
        retVal = false;
        document.getElementById("VehicleError").classList.remove("d-none");
        document.getElementById("VehicleError").classList.add("d-block");
    }
    if (document.querySelectorAll('input[name="cor"]:checked').length == 0) {
        retVal = false;
        document.getElementById("CorError").classList.remove("d-none");
        document.getElementById("CorError").classList.add("d-block");
    }

    return retVal;
}