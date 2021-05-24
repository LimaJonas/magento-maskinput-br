require(['jquery', 'jquery/ui'], function($){ 
// ============================================
    // CEP na página de usuário
    $('#zip').simpleMask({
        'mask': ['########']
    });

    // CEP na pagina de Cart/Carrinho e Checkout
    $(document).on("keydown",'input[name="postcode"]', function() {
        $('input[name="postcode"]').simpleMask({
            'mask': ["########"]
        });
    });
// ============================================
    // Telefone Celular/Fixo
    // Essa função verifica quantos números estão digitado para saber qual máscara usar, também usada no CPF/CNPJ.
    $("#telephone").keydown(function(){
        try {
            $("#telephone").unmask();
        } catch (e) {}
            var tamanho = $("#telephone").val().length;
            
            if(tamanho > 13){
                $("#telephone").simpleMask({
                    'mask': ["(##) #####-####"] //Telefone Celular
                });
            } else{
                $("#telephone").simpleMask({
                    'mask': ["(##) ####-####"] //Telefone Fixo
                });
            }  
            // ajustando foco
            var elem = this;
            setTimeout(function(){
                // mudo a posição do seletor
                elem.selectionStart = elem.selectionEnd = 10000;
            }, 0);
            // reaplico o valor para mudar o foco
            var currentValue = $(this).val();
            $(this).val('');
            $(this).val(currentValue);
    });

    // Telene Celular/Fixo no Checkout
    $(document).on("keydown",'input[name="telephone"]', function() {
        try {
            $('input[name="telephone"]').unmask();
        } catch (e) {}
            var tamanho = $('input[name="telephone"]').val().length;
            
            if(tamanho > 13){
                $('input[name="telephone"]').simpleMask({
                    'mask': ["(##) #####-####"] //Telefone Celular
                });
            } else{
                $('input[name="telephone"]').simpleMask({
                    'mask': ["(##) ####-####"] //Telefone Fixo
                });
            }  
            // ajustando foco
            var elem = this;
            setTimeout(function(){
                // mudo a posição do seletor
                elem.selectionStart = elem.selectionEnd = 10000;
            }, 0);
            // reaplico o valor para mudar o foco
            var currentValue = $(this).val();
            $(this).val('');
            $(this).val(currentValue);
    });
// ============================================
    // CPF/CNPJ
    $("#taxvat").keydown(function(){
        try {
            $("#taxvat").unmask();
        } catch (e) {}
            var tamanho = $("#taxvat").val().length;
            
            if(tamanho > 14){
                $("#taxvat").simpleMask({
                    'mask': ["##.####.###/####-##"]  //CNPJ
                });
            } else{
                $("#taxvat").simpleMask({
                    'mask': ["###.###.###-#######"] //CPF
                });
            }  
            // ajustando foco
            var elem = this;
            setTimeout(function(){
                // mudo a posição do seletor
                elem.selectionStart = elem.selectionEnd = 10000;
            }, 0);
            // reaplico o valor para mudar o foco
            var currentValue = $(this).val();
            $(this).val('');
            $(this).val(currentValue);
    });
// ============================================

    // CEP na página de usuário
    $('#dob').simpleMask({
        'mask': ['##/##/####']
    });

// ============================================
});