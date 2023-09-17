const $input = document.querySelector(".input");
const $btnAgregar = document.querySelector(".boton-agregar");
const $container = document.querySelector(".container");

class Item {
  constructor(tarea) {
    this.crearDiv(tarea);
  }

  crearDiv(tarea) {
    const $inputItem = document.createElement("input");
    $inputItem.type = "text";
    $inputItem.value = tarea;
    $inputItem.disabled = true;
    $inputItem.classList.add("item-input");

    const $botonEditar = document.createElement("button");
    $botonEditar.innerHTML = `<i class="fas fa-lock"></i>`;
    $botonEditar.classList.add("boton-editar");

    const $botonRemover = document.createElement("button");
    $botonRemover.innerHTML = `<i class="fas fa-trash"></i>`;
    $botonRemover.classList.add("boton-remover");

    const $item = document.createElement("div");
    $item.appendChild($inputItem);
    $item.appendChild($botonEditar);
    $item.appendChild($botonRemover);
    $item.classList.add("item");
    $container.appendChild($item);

    $botonEditar.addEventListener("click", function () {
      if ($inputItem.disabled === true) {
        $inputItem.disabled = false;
        $botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
      } else {
        $inputItem.disabled = true;
        $botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
      }
    });

    $botonRemover.addEventListener("click", function () {
      $item.remove();
    });
  }
}

function chequearInput() {
  if ($input.value === "") {
    alert("Debe introducir una tarea");
  } else {
    new Item($input.value);
    $input.value = "";
  }
}

$btnAgregar.addEventListener("click", function () {
  chequearInput();
});

document.body.addEventListener("keydown", function (info) {
  if (info.key === "Enter") {
    chequearInput();
  }
});
