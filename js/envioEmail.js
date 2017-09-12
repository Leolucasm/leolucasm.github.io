$(document).ready(function () {
	$("#telefone").mask("(99) 99999-9999");
	
    $("#contatoForm").submit(function (event) {
        //event.preventDefault();		
		if (!validaEmail($("#email").val())) {
            alert("Informe um email válido!");
            $("#email").focus();
            event.preventDefault();
			return false;
        }
        
        var bodyEmail = "Temos uma nova solicitação de serviço, verifique: <br><br>" +
            "<br>Nome: " + $("#nome").val() +
            "<br>Email: " + $("#email").val() +
            "<br>Telefone: " + $("#telefone").val() +
            "<br>Área de Interesse: " + $("#areaInteresse").val() +
            "<br>Entrega do Projeto: " + $("#dataLimite").val() +
            "<br><br>Descrição do Projeto: " + $("#descricao").val();

        Email.send("leolucasm@edu.univali.br",
            "leolucasm@edu.univali.br",
            "Solicitação de Trabalho: " + $("#nome").val(),
            bodyEmail,
            { token: "0ef51d54-88a0-4e44-a09b-6b1720a3540f" });

    });
	
	function validaEmail(email) {
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return regex.test(email);
    }

});