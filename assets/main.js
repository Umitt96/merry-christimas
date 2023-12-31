document.addEventListener('DOMContentLoaded', function () {
    var snowfallTriggered = false;  // Flag to track snowfall triggering
    var triggerTime   = 2024;
    

    // Clock and date
    function updateClock() {
        var now = new Date();
        var seconds = now.getSeconds();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var year = now.getFullYear();


         // Check if the year is 2024 to trigger snowfall
         if (year >= triggerTime && !snowfallTriggered) {
            snowfallTriggered = true;
            triggerSnowfall();
            
        } else if (seconds !== triggerTime) 
            snowfallTriggered = false;
        
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        var timeString = hours + ':' + minutes + ':' + seconds;
        document.getElementById('clock').innerText = timeString;

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var dateString = now.toLocaleDateString('tr-TR', options);
        document.getElementById('date').innerText = dateString;
    }

    // Snowfall effect
    function createSnowflake() {
        var snowflake = document.createElement('div');
        var container = document.getElementById('container');

        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.marginTop= Math.random() * 5 + 2 + 'px';
        snowflake.style.marginLeft= Math.random() * 10 + 'px';
        snowflake.style.opacity= Math.random(0.0,1) + 0.8;
        snowflake.style.animationDuration = Math.random() * 3 + 4 + 's';

        var size = Math.random() * 8 + 4; 
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';

        container.style.background = 'rgba(0, 255,0, 0.35)';


        document.body.appendChild(snowflake);

        setTimeout(function () {
            snowflake.remove();
        }, 5000);
    }

    function triggerSnowfall() {
        if (snowfallTriggered) {
            for (var i = 0; i < 70; i++) {
                createSnowflake();
                }
            }
    }

    function updateCountdown() {
        var now = new Date();
        var newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0); // Yeni yılın başlangıcı

        var timeRemaining = newYear - now;
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        var countdownString = hours + ' saat ' + minutes + ' dakika ' + seconds + ' saniye';
        document.getElementById('countdown').innerText = countdownString;

        if (seconds === 0 && minutes === 0) {
            document.getElementById('remaining').style.display = 'none';

            var newElement = document.createElement('div');
            newElement.id = 'newElementId';
            newElement.className = 'newElementClass';
            
            var newText = document.createTextNode('Tamam, artık uyuyabilirsin!');
            newElement.appendChild(newText);
            document.getElementById('new_year').appendChild(newElement);
            
        }
    }

setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);
});
