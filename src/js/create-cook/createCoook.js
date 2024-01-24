"use strict";
const createElementIngred = document.getElementById("element-Ing");
const createElementPrep = document.getElementById("element-prep");

function addNewIngredient() {
  const inputIngredient = document.createElement("p");
  inputIngredient.classList.add("input-ad");
  inputIngredient.innerHTML = `
     <i class="fa-solid fa-square squa-c"></i>
    <label for="ingredient" id="label" class="input-ing-prep input-width ">
      <input type="text" class="input-focus" name="ingredient" value="" placeholder="Ej: 500ml agua" required>
    </label>
    <button type="button" class="buttons buttons-delet" name="delete"><i class="fa-regular fa-trash-can"></i></button>

    `;

  createElementIngred.appendChild(inputIngredient);
}
addNewIngredient();
addNewIngredient();

function handleDeleteClick(event) {
  const clickedElement = event.target;
  const button = clickedElement.closest("button[name='delete']");
  if (button) {
    const inputClass = button.closest(".input-ad");

    if (inputClass) {
      inputClass.remove();
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createElementIngred.addEventListener("click", handleDeleteClick);
});

let preparationCount = 0;

function handleFilesPreparations() {
  const imgIngredientPreview = document.getElementById(
    "imgIngredientPreview" + preparationCount
  );
  imgIngredientPreview.innerHTML = "";

  for (const file of this.files) {
    const imgPreparation = document.createElement("img");
    imgPreparation.src = URL.createObjectURL(file);
    imgPreparation.classList.add("img-prepa");
    imgPreparation.onload = () => {
      URL.revokeObjectURL(imgPreparation.src);
    };

    imgIngredientPreview.appendChild(imgPreparation);

    const info = document.createElement("span");
    info.classList.add("info");
    info.innerHTML = `${file.name}: ${file.size} bytes`;
    imgIngredientPreview.appendChild(info);
  }
}

function addNewPreparation() {
  const inputPreparation = document.createElement("p");
  inputPreparation.classList.add("input-prep");
  preparationCount++;

  inputPreparation.innerHTML = `
    <div class="box-prep-inp">
    <i class="fa-solid fa-square squa-c"></i> 
    <label for="ingredient" class="input-ing-prep input-width">
        <input type="text" class=" input-focus  " id="ingredient" name="ingredient" value="" placeholder="Ej: Cortamos las patatas y las ponemos a cocinar" required>
    </label>
    <button type="delete" id="b" class="buttons buttons-delet" name="delete-preparation"><i class="fa-regular fa-trash-can"></i></button>
    </div>
    <div class="img-preparation">
    <input type="file" id="fileIngredient${preparationCount}" name="ingre-file" value="" name="file" accept="image/*" style="display: none">
    <div class="file-ingred" id="fileIngredientButton${preparationCount}">
      <div id="imgIngredientPreview${preparationCount}" class="img-text"></div>
        <button class="buton-img-file" type="button">
          <img
            class="img-prepa"
            src="/src/images/camara.png"
            alt="Foto del plato prepararacion"
          />  
        </button>
      
    </div>
    </div>
  `;

  createElementPrep.appendChild(inputPreparation);

  const fileIngredientButton = document.getElementById(
    `fileIngredientButton${preparationCount}`
  );
  const fileIngredientInput = document.getElementById(
    `fileIngredient${preparationCount}`
  );

  fileIngredientInput.addEventListener(
    "change",
    handleFilesPreparations,
    false
  );

  fileIngredientButton.addEventListener(
    "click",
    () => {
      fileIngredientInput.click();
    },
    false
  );
}
addNewPreparation();

function handleDeletePrep(event) {
  const clickedElement = event.target;
  const button = clickedElement.closest("button[name='delete-preparation']");
  if (button) {
    const inputClass = button.closest(".input-prep");

    if (inputClass) {
      inputClass.remove();
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createElementPrep.addEventListener("click", handleDeletePrep);
});
