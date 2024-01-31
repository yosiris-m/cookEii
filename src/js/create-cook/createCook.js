"use strict";
// function handleSetFormTitle(action) {
//     const titleElement = document.getElementById('title-createC');
//     if (action === 'create') {
//       titleElement.textContent = 'Crear nueva Receta';
//     } else if (action === 'update') {
//       titleElement.textContent = 'Actualizar Receta';
//     }
//   }


function handleSubmitForm(event) {
  event.preventDefault();
  
  const title = document.getElementById("title").value
  const quantity = document.getElementById("quantity").value;
  const timePreparation = document.getElementById("timePreparation").value;
  const author = document.getElementById("author").value;
  const fileInput = document.getElementById("fileInput").value;
  const state = document.querySelector('input[name="state"]:checked').id;
  const ingredientElements = document.querySelectorAll(
    "#element-Ing .input-focu1"
  );
  const preparationList = document.querySelectorAll(
    "#element-prep .input-prep"
  );


  let ingredient = Array.from(ingredientElements).map((input) => input.value);

  const preparations = Array.from(preparationList).map((prep) => {
    const text = prep.querySelector(".input-focu").value;
    const fileInput = prep.querySelector("input[type=file]");
    const file = fileInput.files[0];

    return {
      text: text,
      fileName: file ? file.name : null,
      fileSize: file ? file.size : null,
      fileType: file ? file.type : null,
    };
  });

  
    createNewCook(
      title,
      quantity,
      timePreparation,
      author,
      fileInput,
      state,
      ingredient,
      preparations
    );
}

function createNewCook(
  title,
  quantity,
  timePreparation,
  author,
  fileInput,
  state,
  ingredient,
  preparations
) {
  console.log(
    "create cook-->",
    "title->",
    title,
    "comensales ->",
    quantity,
    "tiempo Preparation:",
    timePreparation,
    "autor;",
    author,
    "imagen principal:",
    fileInput,
    "stado:",
    state,
    "ingrediente:",
    ingredient,
    "preparation",
    preparations
  );


}

 
