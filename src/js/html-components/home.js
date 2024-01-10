const data = [
  {
    id:1,
    title: "Ensalada tropical",
    cuantity: "4",
    state: "Remisón",
    like:"liked",
    author:"John Smith",
    image:
      "https://1.bp.blogspot.com/-FZXLk2jGajE/VsCU8vVL9pI/AAAAAAAAWfU/yVHGFkDosQg/s1600/blogs%2Bcomida%2Bsana%2B%25283%2529.jpg",
    ingredient: " 1 huevo, 1 chorro de aceite de oliva",
    preparation:
      "Para hacer los panqueques, calienta una sartén a fuego medio-bajo con un poquito de aceite o mantequilla. Cuando la sartén esté caliente, añade una cucharada de mezcla y déjala al fuego hasta que empiecen a salir burbujas en la superficie, entonces dale la vuelta y cocina por el otro lado.",
  },
  {
    id:2,
    title: "Espirales al tomate",
    cuantity: "6",
    state: "brote",
    like:"liked",
    author: "Alvar carrasco",
    image:
      "https://www.lacocinasana.com/static/7b3046853e27aba28891d12702dea4a5/5e630/pasta_sin_gluten_sana_b67511ab23.jpg",
    ingredient: "1 taza de harina leudante o harina de repostería",
    preparation:
      "Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).",
  },
  {
    id:3,
    title: "Pollo al horno con queso",
    cuantity: "2",
    state: "remision",
    like:"liked",
    author: "Luna carrasco",
    image:
    "https://laverdadnoticias.com/__export/1626547403735/sites/laverdad/img/2021/07/17/receta_comida_saludable.jpg_478486366.jpg",
    ingredient: " 1 huevo, 1 chorro de aceite de oliva",
    preparation:
      "Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).",
  },
  {
    id:4,
    title: "Pollo con verduras",
    cuantity: "8",
    state: "remision",
    like:"liked",
    author: "Alvar Antonio silva",
    image:
      "https://www.cardamomo.news/__export/1642903893262/sites/debate/img/2022/01/22/comida_saludable.png_976912859.png",
    ingredient: "1 taza de harina leudante o harina de repostería",
    preparation:
      "Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).",
  },
  {
    id:5,
    title: "Pechuga a la plancha ",
    cuantity: "2",
    state: "Brote",
    like:"liked",
    author: "Alvar carrasco",
    image:
      "https://laverdadnoticias.com/__export/1626547403735/sites/laverdad/img/2021/07/17/receta_comida_saludable.jpg_478486366.jpg",
    ingredient: "1 taza de harina leudante o harina de repostería",
    preparation:
      "Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).",
  },
  {
    id:6,
    title: "Pasta al tomate ",
    cuantity: "6",
    state: "brote",
    like:"Notliked",
    author: "Carlo luna",
    image:
      "https://www.lacocinasana.com/static/7b3046853e27aba28891d12702dea4a5/5e630/pasta_sin_gluten_sana_b67511ab23.jpg",
    ingredient: "1 taza de harina leudante o harina de repostería",
    preparation:
      "Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).",
  },

];

console.log(data);
class Home extends HTMLElement {
  constructor() {
    super();
    this.likeStates = {};
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="hearder-search">
      <form class="form-search" method="post" action>
        <div class="icon-search"><i class="fa-solid fa-magnifying-glass"></i></div>
          <input type="text" class="input-search" placeholder="Buscar recetas por...">
        <div class="icon-delete"><i class=""><i class="fa-solid fa-xmark"></i></i></div>
      </form>
    </header>
    <section class="box-card">
    <ul class="container-list">
        ${data.map(
          (item) => `
            <li class="list-item">
              <a class="link-detail" href="components/detail.html">
                <div class="box-img-tile">
                  <img class="img-card" src=${item.image} alt=${item.title}/>
                    <span class="title-card">${item.title}</span>
                </div>
                <p class="user-card">
                    <i class="fa-solid fa-user fa-1x ico-card"></i>
                      <span>${item.author}</span>
                </p>
              </a>              
              <div class="state-like">
                <span>
                  <i class="fa-solid fa-circle fa-xs ico-card"></i>
                  ${item.state}
                </span>
                <div class="ico-like" id="like${item.id}"  onclick="this.closest('common-home').toggleLiked(${item.id})">
                  <i id="ico-heart" class="fa-solid fa-heart fa-sm "></i>
                </div>
              </div>
            </li>
          `
        ).join('')}
      </ul>
  </section>
    `;
  }
  
  toggleLiked(itemId) {
    const likeIcon = document.getElementById(`like${itemId}`);
    this.likeStates[itemId] = !this.likeStates[itemId];

    if (this.likeStates[itemId]) {
      likeIcon.classList.add("liked");
      likeIcon.style = "liked";
    } else {
      likeIcon.classList.remove("liked");
      likeIcon.style = "notLiked)";
    }
  }
  


}

customElements.define("common-home", Home);

