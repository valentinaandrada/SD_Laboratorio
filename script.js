var valoracion = document.getElementById("valoracion");
var numPais = document.getElementById("iban-pais");
var numControlIBAN = document.getElementById("iban-ctrl");
var numEntidad = document.getElementById("iban-entidad");
var numSucursal = document.getElementById("iban-sucursal");
var numDC = document.getElementById("iban-dc");
var numCuenta = document.getElementById("iban-cuenta");
var fecha = document.getElementById("fecha");

// Indicar en pantalla el valor que el usuario ha seleccionado en el elemento rango
function mostrarValoracion() {
  window.alert(`Has valorado con ${valoracion.value} puntos.`);
}

// Indicar en pantalla la cuenta bancaria introducida por el usuario
function mostrarCuenta() {
  var sonValoresNumericos = /^[0-9]+$/;

  if (
    numControlIBAN.value.length < 2 ||
    numControlIBAN.value === 0 ||
    numEntidad.value.length < 4 ||
    numEntidad.value === 0 ||
    numSucursal.value.length < 4 ||
    numSucursal.value === 0 ||
    numDC.value.length < 2 ||
    numDC.value === 0 ||
    numCuenta.value.length < 10 ||
    numCuenta.value === 0
  ) {
    window.alert(
      "Por favor, complete los datos de su cuenta bancaria correctamente."
    );
  } else if (
    !numControlIBAN.value.match(sonValoresNumericos) ||
    !numEntidad.value.match(sonValoresNumericos) ||
    !numSucursal.value.match(sonValoresNumericos) ||
    !numDC.value.match(sonValoresNumericos) ||
    !numCuenta.value.match(sonValoresNumericos)
  ) {
    window.alert(
      "Los datos introducidos en los campos de Cuenta Bancaria deben ser numericos"
    );
  } else {
    window.alert(
      `Le informamos que su cuenta bancaria es ${numPais.placeholder}-${numControlIBAN.value}-${numEntidad.value}-${numSucursal.value}-${numDC.value}-${numCuenta.value}`
    );
  }
}

// Indicar que día de la semana (Lunes a Domingo) corresponde la fecha introducida
function mostrarDiaDeSemana() {
  let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  let input = new Date(fecha.value);
  let diaElegido = input.getDay();
  let dia = diasSemana[diaElegido];

  window.alert(`La fecha seleccionada en el elemento fecha es un ${dia}`);
}

// VALIDACION DE FORMULARIO

// Variables para validar formulario
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const clear = document.getElementById("reset");
const mensaje = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");
const btnCerrar = document.getElementById("close-btn");
var result = document.getElementById("resultado");

// Reestablecer el campo de código postal
function resetCP() {
  document.getElementById("provincia").value = "";
}

// Reestablecer el campo de provincia
function resetProvincia() {
  document.getElementById("provincia").value = "";
}

// Mensaje pop-up para mostrar resultado
const mostrarMensaje = function (resultado) {
  result.innerHTML = resultado;
  mensaje.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // Cerrar pop-up
  btnCerrar.addEventListener("click", function () {
    mensaje.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  // Cerrar pop-up con tecla ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !mensaje.classList.contains("hidden")) {
      mensaje.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });

  // Cerrar pop-up con tecla ENTER
  document.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && !mensaje.classList.contains("hidden")) {
      e.preventDefault();
      mensaje.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
};

function validarCP() {
  let cp = document.getElementById("cp").value;
  let provincia = document.getElementById("provincia").value.toLowerCase();
  // Eliminar tildes y eñes para evitar problemas con la validacion
  provincia = provincia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Verificar que los campos de código postal y provincia mediante alertas
  if (cp === "") {
    alert("El campo CÓDIGO POSTAL es obligatorio.");
  } else if (isNaN(cp) === true) {
    alert(
      "El campo CÓDIGO POSTAL debe ser numérico. Por favor, introduzca un código postal válido."
    );
    resetCP();
  } else if (cp.length != 5) {
    alert(
      "El código postal debe contener 5 dígitos. Por favor, introduzca un código postal válido."
    );
    resetCP();
  } else if (provincia === "") {
    alert("El campo PROVINCIA es obligatorio.");
  } else if (isNaN(provincia) === false) {
    alert("Por favor, introduzca una provincia válida.");
    resetProvincia();
  } else {
    cpReducido = Math.floor(cp.substr(0, 2));

    // Listado de códigos postales con sus respectivas provincias
    const codigosPostales = new Map([
      [01, "alava"],
      [02, "albacete"],
      [03, "alicante"],
      [04, "almeria"],
      [05, "avila"],
      [06, "badajoz"],
      [07, "islas baleares"],
      [08, "barcelona"],
      [09, "burgos"],
      [10, "caceres"],
      [11, "cadiz"],
      [12, "catellon"],
      [13, "ciudad real"],
      [14, "cordoba"],
      [15, "la coruna"],
      [16, "cuenca"],
      [17, "gerona"],
      [18, "granada"],
      [19, "guadalajara"],
      [20, "guipuzcoa"],
      [21, "huelva"],
      [22, "huesca"],
      [23, "jaen"],
      [24, "leon"],
      [25, "lerida"],
      [26, "la rioja"],
      [27, "lugo"],
      [28, "madrid"],
      [29, "malaga"],
      [30, "murcia"],
      [31, "navarra"],
      [32, "orense"],
      [33, "asturias"],
      [34, "palencia"],
      [35, "las palmas"],
      [36, "pontevedra"],
      [37, "salamanca"],
      [38, "santa cruz de tenerife"],
      [39, "cantabria"],
      [40, "segovia"],
      [41, "sevilla"],
      [42, "soria"],
      [43, "tarragona"],
      [44, "teruel"],
      [45, "toledo"],
      [46, "valencia"],
      [47, "valladolid"],
      [48, "vizcaya"],
      [49, "zamora"],
      [50, "zaragoza"],
      [51, "ceuta"],
      [52, "melilla"],
    ]);

    // Verificar si el valor del campo provincia no corresponde a ninguna provincia de España
    if (Array.from(codigosPostales.values()).includes(provincia)) {
      if (cpReducido === 00 || cpReducido > 52) {
        alert(
          "El código postal introducido no corresponde a ninguna provincia."
        );
        resetCP();
      }
      // Mostrar mensaje de color verde si los campos de código postal y provincia coinciden
      else if (
        codigosPostales.has(cpReducido) &&
        provincia === codigosPostales.get(cpReducido)
      ) {
        mostrarMensaje(
          `El código postal introducido ${cp} para la provincia ${provincia} es correcto.`
        );
        mensaje.style.backgroundColor = "green";
        result.style.color = "white";
      }

      // Mostrar mensaje de color rojo si los campos de código postal y provincia no coinciden
      else {
        if (cpReducido < 10) {
          mostrarMensaje(
            `El código postal ${cp} introducido no corresponde con la provincia de ${provincia}. El prefijo 0${cpReducido} corresponde a la provincia de ${codigosPostales.get(
              cpReducido
            )}. El prefijo para la provincia de ${provincia} es ${getKey(
              codigosPostales,
              provincia
            )}.`
          );
        } else {
          mostrarMensaje(
            `El código postal ${cp} introducido no corresponde con la provincia de ${provincia}. El prefijo ${cpReducido} corresponde a la provincia de ${codigosPostales.get(
              cpReducido
            )}. El prefijo para la provincia de ${provincia} es ${getKey(
              codigosPostales,
              provincia
            )}.`
          );
        }

        // Buscar codigo postal para provincia introducida
        function getKey(map, value) {
          for (let [key, val] of map.entries()) {
            if (val === value) {
              if (key < 10) {
                return "0" + key;
              } else {
                return key;
              }
            }
          }
        }

        mensaje.style.backgroundColor = "red";
        result.style.color = "white";
        resetCP();
      }
    } else {
      alert("Por favor, introduzca una provincia válida.");
      resetProvincia();
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validarCP();
});
