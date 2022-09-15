/**
 * 
 * Save/Select all paragraphs by id. (or an object with each paragraph text)
 * Change each paragraph text. (func)
 * Read the text from a JSON file depending on language
 * 
 */
(function($) {
    
    let $window = $(window)
    
    $window.on('load', change_lan($, 'en'))
    $('#spa_button').click(function() {
        change_lan($, 'spa')
    })
    $('#en_button').click(function() {
        change_lan($, 'en')
    })
    
})(jQuery);

function change_lan(jQ, lan){
    jQ.getJSON('assets/js/languages.json', function(languages) {       
       sel_lan = languages[lan]
       jQ.each(sel_lan, function(key, value){
            jQ(`#${key}`).text(value)
       })
    });
    //failure check  
}