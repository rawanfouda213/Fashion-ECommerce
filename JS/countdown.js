const countdownDate = new Date("Feb 25, 2024 15:37:25").getTime();

const countdownTimer = setInterval(function() {
  const now = new Date().getTime();

  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown-time").textContent = "Countdown has ended";
  }
}, 1000);
////////////////////////////////////////////////////////////////////////////////////////////^
function search() {
  var input = document.getElementById('myinput').value.toLowerCase();
  var x = document.getElementsByClassName('card-title');
  
  for (var i = 0; i < x.length; i++) {
    var cardTitle = x[i].innerHTML.toLowerCase();
    
    if (cardTitle.includes(input)) {
      x[i].parentNode.parentNode.style.display = "block";
    } else {
      x[i].parentNode.parentNode.style.display = "none";
    }
  }
}