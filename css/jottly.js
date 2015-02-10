
$.ButtonClicked {
    background-color:red;
}
And then add the class on click:

$('#ButtonId').on('click',function(){
    !$(this).hasClass('ButtonClicked') ? addClass('ButtonClicked') : '';
});