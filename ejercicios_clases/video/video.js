document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
    var infoPanel = document.getElementById('info-panel');
    var showInfoPanel = false;

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    video.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showInfoPanel = !showInfoPanel;
        if (showInfoPanel) {
            var totalSeconds = Math.floor(video.duration);
            var minutes = Math.floor(totalSeconds / 60);
            var seconds = totalSeconds % 60;
            infoPanel.textContent = 'Duración: ' + minutes + ' minutos ' + seconds + ' segundos';
            infoPanel.style.display = 'block';
        } else {
            infoPanel.style.display = 'none';
        }
    });
});