const data = [
  {
    title: "Pollo al horno",
    cuantity: "4",
    state: "Remisón",
    image:
      "https://1.bp.blogspot.com/-FZXLk2jGajE/VsCU8vVL9pI/AAAAAAAAWfU/yVHGFkDosQg/s1600/blogs%2Bcomida%2Bsana%2B%25283%2529.jpg",
    ingredient: " 1 huevo, 1 chorro de aceite de oliva",
    preparation:
      "Para hacer los panqueques, calienta una sartén a fuego medio-bajo con un poquito de aceite o mantequilla. Cuando la sartén esté caliente, añade una cucharada de mezcla y déjala al fuego hasta que empiecen a salir burbujas en la superficie, entonces dale la vuelta y cocina por el otro lado.",
  },
  {
    title: "Arroz a la marinera",
    cuantity: "Brote",
    state: "brote",
    image:
      "https://www.lacocinasana.com/static/7b3046853e27aba28891d12702dea4a5/5e630/pasta_sin_gluten_sana_b67511ab23.jpg",
    ingredient: "1 taza de harina leudante o harina de repostería",
    preparation:
      "Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).",
  },
  {
    title: "Pollo al horno",
    cuantity: "2",
    state: "remision",
    image: " url_de_la_imagen.jpg",
    ingredient: " 1 huevo, 1 chorro de aceite de oliva",
    preparation:
      "Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).",
  },
  {
    title: "Pollo al horno",
    cuantity: "8",
    state: "remision",
    image:
      "https://www.cardamomo.news/__export/1642903893262/sites/debate/img/2022/01/22/comida_saludable.png_976912859.png",
    ingredient: "1 taza de harina leudante o harina de repostería",
    preparation:
      "Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).",
  },
  {
    title: "Pollo al horno",
    cuantity: "2",
    state: "Brote",
    image:
      "https://laverdadnoticias.com/__export/1626547403735/sites/laverdad/img/2021/07/17/receta_comida_saludable.jpg_478486366.jpg",
    ingredient: "1 taza de harina leudante o harina de repostería",
    preparation:
      "Hacer la receta de panqueques es súper fácil. Primero, reúne todos los ingredientes. Si no tienes harina leudante o preparada, que es harina de trigo que ya incluye levadura (también se llama harina de repostería), puedes usar harina de trigo normal y añadir una cucharadita de levadura química en polvo (polvo de hornear).",
  },
];

console.log(data);
class Home extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <section>
             <ul>
                ${data.map(
                  (item) => `
                  <li>
                    <img class="img" src=${item.image} alt=${item.title}/>  
                  </li>
                  <li>Title: <span>${item.title}</span> </li>
                  <li>comensales: <span>${item.cuantity}</span> </li>
                  <li>Estado: <span>${item.state}</span> </li>
                  <li>Ingredientes: <span>${item.ingredient}</span> </li>
                  <li>Preparacion: <span>${item.preparation}</span> </li>
                  `
                )}
                </ul>
              </nav>
          </section>
        `;
  }
}
customElements.define("common-home", Home);
