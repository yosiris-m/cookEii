"use strict";
/**detail */
function detail(itemId) {
  const selectedItem = data.find((item) => item.id === itemId);
  const detailCard = document.getElementById("detail-l");

  if (selectedItem) {
    console.log("detail", selectedItem);
    const liCard = document.createElement("section");
    liCard.classList.add("list-detail");
    liCard.dataset.id = selectedItem.id;
    liCard.innerHTML = `        
      <div class="box-head patrick-hand-regular"> 
        <img class="img-detail" src="${selectedItem.image}"
        alt="${selectedItem.title}"/> 
        <div class="box-title">    
          <h2 class="title-detail">${selectedItem.title}</h2> 
          <div class="flex-c-center"> 
          <span class="mg-lef display-row-center">
          <i class="fa-regular fa-clock"></i>
            ${selectedItem.timePreparation}
          </span>
        </div>
          <div class="box-icons-title display-row-center">
            <div class="display-row-center">
                <i class="fa-regular fa-user mg-lef icon"></i>
                <div class="flex-c-center"> 
                  <p class="icon-text">Raciones</p>
                  <span class="mg-lef display-row-center">
                    ${selectedItem.cuantity}
                    <span class="mg-lef">Personas</span>
                  </span>
                </div>
            </div>
            <div class="display-row-center mg-lef-M {
              margin-left: 1rem;
            }">
            <i class="fa-solid fa-chart-line mg-lef-M ico-font ${
              selectedItem.state === "Remisión" ? "icon-remision" : "icon-brote"
            }"></i>
                <div class="flex-c-center"> 
                  <p class="icon-text">Estado</p>
                  <span class="mg-lef">
                    ${selectedItem.state}
                  </span>
                </div>
            </div>
           
          </div>
        </div>
      </div> 
      <div class="box-butts">
      <button class="button-wit edit icon-size"><i class="fa-regular fa-pen-to-square"></i></button>
      <button class="button-wit  delete icon-size"><i class="fa-regular fa-trash-can"></i></button>
    </div>
      <article class="box-ingredient-preparation patrick-hand-regular"> 
        <div class="ingredient">
          <h3 class="mg-lef-M title-ing-prep">Ingredientes</h3>
          <ul class="list-d">
           ${selectedItem.ingredient
             .map(
               (ingredients) =>
                 `<li class="list-ingredient"><i class="fa fa-check icon-check "></i>${ingredients}</li>`
             )
             .join("")}
          </ul>
        </div> 
        <div class="box-preparation">
          <h3 class="mg-lef-M title-ing-prep">Preparación</h3>  
          <ol class="list-ol">
            ${selectedItem.preparation
              .map(
                (step) =>
                  `<li>
                   <p>${step.descripton}</p>
                   ${
                     step.image
                       ? `<img class="img-preparation" src="${step.image}" alt="Imagen de la preparación">`
                       : ""
                   }</li>`
              )
              .join("")}
          </ol>
        </div>  
      </article>
     `;
    detailCard.appendChild(liCard);
  } else {
    console.error(`No se encontró un elemento con el ID: ${itemId}`);
  }
}

function renderItem() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = Number.parseInt(urlParams.get("id"));

  detail(id);
}
