randomQuote = ['Redew: wow ur cool', 'Redew: "good game"\r\ntestingnewpokes2: gg\r\nRedew: shut up\r\nRedew: fuck', 'Redew: i hope u think ur a good player', 'testingnewpokes2: ˙͜>˙', 'testingnewpokes2: was easy']
$(window).load(function() {
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
    $(function() {
        $('.minun').resizable({
            maxHeight: 125,
            maxWidth: 125,
            minHeight: 96,
            minWidth: 96
        });
    });
    var quote = Math.floor(Math.random()*randomQuote.length);
    $('#quote-box').text(randomQuote[quote]);
});
