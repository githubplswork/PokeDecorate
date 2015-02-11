randomQuote = ['<font color="#0701AD"><strong>Redew:</strong></font> wow ur cool', '<font color="#0701AD"><strong>Redew:</strong></font> "good game"<br /><font color="#62159D"><strong>testingnewpokes2:</strong></font> gg<br /><font color="#0701AD"><strong>Redew:</strong></font> shut up<br /><font color="#0701AD"><strong>Redew:</strong></font> fuck', '<font color="#0701AD"><strong>Redew:</strong></font> i hope u think ur a good player', '<font color="#62159D"><strong>testingnewpokes2:</strong></font> ˙͜>˙', '<font color="#62159D"><strong>testingnewpokes2:</strong></font>: was easy']
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
    var easter_egg = new Konami(function() { 
        alert('dont make me relive this')
        $('.shedinja').show("slow");
    });
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
    $('#quote-box').html(randomQuote[quote]);
});
