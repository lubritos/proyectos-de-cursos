$(document).ready(function() {

  $.getJSON("../api/cursos.json", function(data) {
      setStorage(data);
  });

});

function setStorage(cursos){
  localStorage.setItem('cursos', JSON.stringify(cursos));
}

function getStorage(){
  let item = localStorage.getItem('cursos');
  return JSON.parse(item);
}

function agregarTarjeta(item){
  console.log(item);
     $('#listado').append(`
          <div class="col-md-4 mt-4">
              <div class="card" style="width: 18rem;">
                  <img src="${item.cover}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="${item.title}"></h5>
                      <p class="card-text">Autor: ${item.author}</p>
                      <a href="${item.src}" class="btn btn-primary" target="_blank">Ir al curso</a>
                  </div>
              </div>
          </div>
     `);
 };