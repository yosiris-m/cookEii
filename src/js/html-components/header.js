class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header id="header" class="container-header">
        <img class="logo" src="/src/images/logo2.png" alt="logo" /> 
          <nav class="box-nav">
            <div class="botons"> 
              <span id="open" class="open"><i class="fa-solid fa-bars"></i></span>
              <span id="close" class="close"><i class="fa-solid fa-x"></i></span>
            </div>
              <ul class="options-menu">
                <li>
                    <a class="link" href="login/login.html">Iniciar sesión</a>
                <li>
                    <a class="link" href="login/createAcount.html">Crear cuenta</a>
                </li>
                <li><a class="link" href="#">Recetas favoritas</a></li>
                <li><a class="link" href="#">Crear receta</a></li>
              </ul>
            </nav>
        </header>
      `;

    this.addEventsToHeader();
  }

  addEventsToHeader() {
    const open = document.getElementById("open");
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
}

customElements.define("common-header", Header);
