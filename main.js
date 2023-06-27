let stat = document.querySelector(".stats");
let mySpan = document.querySelectorAll(".progre");
let started = false;

window.addEventListener("scroll" , () => {
  if (window.scrollY >= stat.offsetTop) {
    if (!started) {
      mySpan.forEach(el => startCount(el));
    }
    started = true;
  };
});

function startCount(el) {
  let goal = el.dataset.coun;
  let count = setInterval(() => {
    el.textContent++;
    if(el.textContent == goal) {
      clearInterval(count);
    };
  }, 7500 / goal)
};