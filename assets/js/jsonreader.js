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

    /*$('#my_photo').mousedown(function(event) {
        switch (event.which) {
            case 1:
                change_lan($, 'en')
                break;
            case 2:
                change_lan($, 'spa')
                break;
        }
    });*/
    
})(jQuery);

function change_lan(jQ, lan){
    jQ.getJSON('assets/js/languages.json', function(languages) {       
       sel_lan = languages[lan]
       jQ('#nav_about_me').text(sel_lan.nav_about_me)
       jQ.each(sel_lan, function(key, value){
            jQ(`#${key}`).text(value)
       })
    });
    //failure check  
}