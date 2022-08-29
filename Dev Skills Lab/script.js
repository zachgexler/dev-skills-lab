$('#button').on("click", function () {
    let $input = $("#input").val()
    $('ul').append(`<li id = "language"><span>Remove</span>${$input}</li>`);
    $('#input').val("")
    })
$('.My-Skills').on("click", function (){
    let $text = $('#language')
    $text.remove()
})