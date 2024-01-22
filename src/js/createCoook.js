"use strict";
const createElementIngred = document.getElementById("element-Ing");
const createElementPrep = document.getElementById("element-prep");

const fileSelectButton = document.getElementById("fileSelectButton");
const fileInput = document.getElementById("fileInput");
const imgPreview = document.getElementById("imgPreview");

console.log("Assigning change event to fileInput");
fileInput.addEventListener("change", handleFiles, false);

fileSelectButton.addEventListener(
  "click",
  () => {
    fileInput.click();
  },
  false
);

function handleFiles() {
  // if (this.files.length === 0) {
  //   imgPreview.classList.add("img-preview");
  //   imgPreview.innerHTML = `<p>No has elegido una imagen</p> `;
  //   console.log("this.files.length en el if", this.files.length);
  // }

  imgPreview.innerHTML = "";

  const img = document.createElement("img");
  img.src = URL.createObjectURL(this.files[0]);
  img.classList.add("img-pr");
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  };

  imgPreview.appendChild(img);
  const info = document.createElement("span");
  info.innerHTML = `${this.files[0].name}: ${this.files[0].size} bytes`;
  imgPreview.appendChild(info);
}

function addNewIngredient() {
  const inputIngredient = document.createElement("p");
  inputIngredient.classList.add("input-ad");
  inputIngredient.innerHTML = `
    <label for="ingredient" class="delete"  id="label">
      <input type="text" class="delete" name="ingredient" value="" placeholder="Ej: 500ml agua">
    </label>
    <button type="delete" id="b" class="delete" name="delete"><i class="fa-regular fa-trash-can"></i></button>
  `;

  createElementIngred.appendChild(inputIngredient);
}

function handleDeleteClick(event) {
  const button = event.target;
  const inputClass = button.closest(".input-ad");

  if (inputClass) {
    inputClass.remove();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createElementIngred.addEventListener("click", handleDeleteClick);
});

function deletIputOne() {
  let elementDeleted = document.querySelector(".iput-delete1");
  elementDeleted.parentNode.removeChild(elementDeleted);
}

function deletIputTwo() {
  let elementDeleted = document.querySelector(".iput-delete2");
  elementDeleted.parentNode.removeChild(elementDeleted);
}

function addNewPreparation() {
  const inputPreparation = document.createElement("p");
  inputPreparation.classList.add("input-prep");

  inputPreparation.innerHTML = `
    <label for="ingredient">
        <input type="text" id="ingredient" name="ingredient" value="" placeholder="Ej: leche">
    </label>
    <label for="ingredient">
        <input type="file" id="ingredient" name="ingredient" value="" placeholder="Ej: 500ml agua">
    </label>
    <button type="delete" id="b" class="" name="delete"><i class="fa-regular fa-trash-can"></i></button>
  `;

  createElementPrep.appendChild(inputPreparation);
}
addNewPreparation();

function handleDeletePrep(event) {
  const button = event.target;
  const inputClass = button.closest(".input-prep");

  if (inputClass) {
    inputClass.remove();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createElementPrep.addEventListener("click", handleDeletePrep);
});

function deletIngrtOne() {
  let elementDeleted = document.querySelector(".inpu-pre-del1");
  elementDeleted.parentNode.removeChild(elementDeleted);
}

function deletIngrTwo() {
  let elementDeleted = document.querySelector(".inpu-pre-del2");
  elementDeleted.parentNode.removeChild(elementDeleted);
}
