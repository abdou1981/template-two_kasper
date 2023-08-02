//progress number
let stat = document.querySelector(".stats");
let mySpan = document.querySelectorAll(".progre");
let started = false;

window.addEventListener("scroll" , () => {
  if (window.scrollY >= stat.offsetTop - 600) {
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

//progress skilles
let skills = document.querySelector(".skills");
let spans = document.querySelectorAll(".prog span");

window.addEventListener("scroll", function() {
  if (window.scrollY >= skills.offsetTop) {
    spans.forEach(span => {
      span.style.width = span.dataset.progress;
    })
  }
})