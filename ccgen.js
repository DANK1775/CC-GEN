let bin = ""

let mes = 0

let año = 0

let cvv;

let cantidad = 0;

let cc = 0;

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  // bin valor
  bin = document.getElementById("bin").value;

  // mes valor
  mes = document.getElementById("mes").value;

  // año valor
  año = document.getElementById("año").value;

  // cvv valor
  cvv = document.getElementById("cvv").value;

  // cantidad valor
  cantidad = document.getElementById("cantidad").value;


  // comprobacio de espacios bin , cvv y cantidad
  if (bin.length >= 6) {

    let x = 16 - bin.length;

    for (let i = 0; i < x; i++) {
      bin = bin + "x";
    }

    document.getElementById("bin").value = bin
  }
  else if (bin.length <= 5) {

    swal("ERROR", "el bin debe tener al menos 6 dígitos", "error");
    event.preventDefault();
  }
  else if (cvv.length < 3 && cvv.length !== 0) {
    swal("ERROR", "el cvv debe tener almenos 3 digitos", "error");
    event.preventDefault();
  }
  else if (cantidad <= 0) {
    swal("ERROR", "la catidad generada no puede ser 0 o menor", "error");
    event.preventDefault();
  }



  if (bin.length == 16) {


    for (let r = 0; r < cantidad; r++) {

      fechaMes = mes

      if (fechaMes == 0) {
        fechaMes = Math.floor(Math.random() * 12) + 1;
        if (fechaMes < 10) {
          fechaMes = "0" + fechaMes;
        }
      } else if (fechaMes < 10) {
        fechaMes = "0" + fechaMes;
      } 

      fechaAño = año 

      if (fechaAño == 0) {
        fechaAño = Math.floor(Math.random() * 8) + 2023;
      }

      code = cvv
      if (code == 0) {
        code = (Math.floor(Math.random() * 999)).toString().padStart(3, "0");
      } else {
        code = cvv
      }


      let cc = bin;

      while (cc.indexOf("x") !== -1) {
        const index = cc.indexOf("x");
        cc = cc.substring(0, index) + Math.floor(Math.random() * 10) + cc.substring(index + 1);
      }

      // Crear un elemento div para mostrar el número generado
      const numeroGenerado = document.createElement("div");
      numeroGenerado.textContent = cc + "|" + fechaMes + "|" + fechaAño + "|" + code;
      document.body.appendChild(numeroGenerado); // Agregar al final del body
    }
  }

});
