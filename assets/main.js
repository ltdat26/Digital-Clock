function showClock() {
  const divClock = document.getElementById("NowTime");
  const now = new Date().toLocaleTimeString();

  divClock.innerHTML = now;

  setTimeout(showClock, 900); // 1000ms = 1s
}

showClock();