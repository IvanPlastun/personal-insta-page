$(document).ready(function(){ 

    var userFeed = new Instafeed({
        get: 'user',
        userId: '8796691910',
        accessToken: '8796691910.1677ed0.21bccfcf75d94a779e082f9b65360d7f',
        resolution: 'standard_resolution',
        limit: 60
    });
    userFeed.run();

    setTimeout(function() {
        $('.instafeed').addClass('shadowed');
    }, 100)

});