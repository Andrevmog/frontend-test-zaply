$(document).ready(function() {

    var response;

    tabela();

    function tabela() {
        $(function() {

            $.ajax({
                    type: 'GET',
                    url: 'http://localhost:3000/',
                    dataType: "json",
                })
                .done(function(data) {
                    console.log(data)
                });
        })
    }


    
})