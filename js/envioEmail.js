$(document).ready(function () {

    $("#contatoForm").submit(function (event) {
        event.preventDefault();
        
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

});