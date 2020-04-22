$(document).ready(function(){
   let cursos = getStorage();
   console.log(cursos);

   mostrarTarjetas(cursos);

   function mostrarTarjetas(tarjetas) {
       if (tarjetas) {
            $.each(tarjetas['cursos'][0].lista, function(position, item) {
                console.log(item);
                agregarTarjeta(item);
            });
       }
   }

   function agregarTarjeta(item){
    console.log(item);
       $('#listado').append(`
            <div class="col-md-4">
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

});