(function ($) {
    "use strict";
    $("#telefone").mask("(99) 99999-9999");

    
    $("#contatoForm").submit(function (event) {        
        if (!validaEmail($("#email").val())) {
            alert("Informe um email válido!");
            $("#email").focus();
            event.preventDefault();
        }

    });

    function validaEmail(email) {
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return regex.test(email);
    }

})(jQuery);