$(document).ready(function() {
    $('.balloon').draggable( {
        containment: 'window', 
        stack: '.minun'
    });
    $('.hat').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.shedinja').draggable({
        containment: 'window'
    });
});
