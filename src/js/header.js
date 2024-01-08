function addEventsToHeader() {
  const open = document.getElementById('open');
  const close = document.querySelector(".close");
  const options = document.querySelector(".options-menu");

  open?.addEventListener("click", openMenu);
  close?.addEventListener("click", closeMenu);

  function openMenu() {
    open.style.display = "none";
    close.style.display = "block";
    options.style.display = "block";

    if (options) {
      options.style.top = "0px";
    }
  }

  function closeMenu() {
    open.style.display = "block";
    close.style.display = "none";
    options.style.display = "none";

    if (options) {
      options.style.top = "-100%";
    }
  }
}
