$(document).ready(function(){

    var audio = $('#audioTrack')[0];
    var $playBtn = $('#audio-play'),
        $pauseBtn = $('#audio-pause'),
        $audioControls = $('[data-type="audio-control"]');
    setTimeout(initAudioPlayer, 800);
    function initAudioPlayer() {
        $playBtn.parent().show();
        audio.loop = true;
        audio.play();
        $audioControls.on('click', function() {
            if(audio.paused) {
                audio.play();
                $playBtn.parent().hide();
                $pauseBtn.parent().show();
            } else {
                audio.pause();
                $pauseBtn.parent().hide();
                $playBtn.parent().show();
            }
        });
    }

});
