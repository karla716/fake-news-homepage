document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".main-nav button");
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const subscribeBtn = document.querySelector(".subscribe-btn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      subscribeBtn.textContent = "Subscribed";
      subscribeBtn.disabled = true;
    });
  }
});
