$(document).ready(function() {
    // IMAGES //
    // (most) everything should stack at '.minun'. some things look better not stacked.
    $('.balloon').draggable( {
        containment: 'window', 
        stack: '.minun'
    });
    $('.hat').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.b-must').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.w-must').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.beard').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.rock').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.lights').draggable({
        containment: 'window'
    });
    $('.tear').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.snowflake').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.sparksmaybe').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.flames').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.bluefire').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.fork').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.fart').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.purplefart').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.cashmoney').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.grayfart').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.spring').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.star').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.whydoesithaveawhiteoutline').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.sparkles').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    $('.othersparkles').draggable({
        containment: 'window', 
        stack: '.minun'
    });
    // IMAGES END //
    // KONAMI CODE//
    $('.shedinja').hide();
    var easter_egg = new Konami(function() { $('.shedinja').show();});
    // END KONAMI CODE //
    /* MINUN //
    // Minun resize is borken
    $('.minun').resizable({
      maxHeight: 30,
      maxWidth: 30,
      minHeight: 10,
      minWidth: 10
    });
    // MINUN END */
    $(function() {
    $( "#misc-container" ).resizable({
      maxHeight: 250,
      maxWidth: 350,
      minHeight: 150,
      minWidth: 200
    });
    });
});
