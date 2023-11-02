// varianles
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.querySelector('.ampm')
// functionality
function updateTime() {
    const now = new Date();
    let Hours = now.getHours().toString().padStart(2, '0');
    let Minutes = now.getMinutes().toString().padStart(2, '0');
    let Seconds = now.getSeconds().toString().padStart(2, '0');
    let Ampm = "AM";

    if (Hours > 12){
        Hours -= 12;
        Ampm = "PM";
    }
    hours.innerHTML = Hours;
    minutes.innerHTML = Minutes;
    seconds.innerHTML = Seconds;
    ampm.innerHTML = Ampm;
}
updateTime();
setInterval(updateTime, 1000);