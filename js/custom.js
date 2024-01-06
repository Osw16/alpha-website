// Custom JS

//burgermenu logic
const nav = document.querySelector("#nav")
const open = document.querySelector("#open")
const close = document.querySelector("#close")

open.addEventListener("click",()=>{
    nav.classList.add("visible")
})
close.addEventListener("click",()=>{
    nav.classList.remove("visible")
})

// accordion'faqs logic
document.addEventListener("DOMContentLoaded", function() {
 
    var lastChecked;

    document.querySelectorAll('#accordion input[type="radio"]').forEach(radio => {
        radio.addEventListener('click', function() {

            if (radio === lastChecked) {
                radio.checked = false;
                lastChecked = null;
            } else {
                lastChecked = radio;
            }
        });
    });
});

//countdown logic
function updateCountdown() {
    const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(interval);
    }
}
const interval = setInterval(updateCountdown, 1000);