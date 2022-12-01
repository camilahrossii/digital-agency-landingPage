
$(function() {
    openWindow();
    checkClickClose();

    function openWindow(){
        $('#btnContact').click(function(e) {
            e.stopPropagation();
            $('.contact').fadeIn();
        });
    }

    function checkClickClose() {
        var toClose = $('#closeBtn');

        toClose.click(function() {
            $('.contact').fadeOut();
        });

        $('form').click(function(e) {
            e.stopPropagation();
        })
    }
})