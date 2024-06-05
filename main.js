$(document).ready(function(){

$('header button').click(function(){
    $('form').slideDown()
})

$('#botao-cancel').click(function(){
    $('form').slideUp()
})

$('form').on('submit', function(e) {

    e.preventDefault()
    const urlNovaImagem = $('#url-nova-img').val()
    const novoItem = $('<li style="display: none"></li>')
    $(`<img src="${urlNovaImagem}" />`).appendTo(novoItem)
    $(`
        <div class="overlay-img">
            <a href="${urlNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`
        
    ).appendTo(novoItem)
    $(novoItem).appendTo('ul')
    $(novoItem).fadeIn(700)
    $('#url-nova-img').val('')
})

})