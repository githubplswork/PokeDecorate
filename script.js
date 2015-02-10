$(document).ready(function() {
    $('.balloon').draggable( {
        containment: 'window', 
        stack: '.minun'
    });
    $('.hat').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.shedinja').hide();
    var easter_egg = new Konami(function() { 
        $('.shedinja').show();
    });
});
