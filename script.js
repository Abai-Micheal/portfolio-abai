menu = document.querySelector(".menu i");
navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

// navigation
const navList = document.querySelectorAll(".navbar a");
console.log(navList);
navList.forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    console.log(e.target);
    e.preventDefault();
    const targetId = anchor.getAttribute("href");
    console.log(targetId);
    if (targetId === "#") return;
    const targetEl = document.querySelector(targetId);
    console.log(targetEl);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

document.querySelector(".logo").addEventListener("click", function (e) {
  e.preventDefault();
  const targetid = this.getAttribute("href");
  const targetEl = document.querySelector(targetid);
  if (targetEl) {
    targetEl.scrollIntoView({
      behavior: "smooth",
    });
  }
});

const flexBtn = document.querySelectorAll(".flex-btn a");
console.log(flexBtn);
flexBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const tarId = this.getAttribute("href");
    const tarEl = document.querySelector(tarId);
    if (tarEl) {
      tarEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Contact
const submit = document.querySelector("#sub-btn");

submit.addEventListener("click", function (e) {
  const name = document.querySelector("#name").value;
  console.log(name);
  if (name) {
    alert(
      `Thank you, ${name}! Your message has been sent. I'll get back to you soon.`
    );
    location.reload();
  }
});
