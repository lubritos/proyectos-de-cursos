$(document).ready(function(){
   let cursos = getStorage();
   console.log(cursos);

    agregarTitulo(cursos['cursos'][0].title);
   mostrarTarjetas(cursos);

   function mostrarTarjetas(tarjetas) {
       if (tarjetas) {
            $.each(tarjetas['cursos'][0].lista, function(position, item) {
                console.log(item);
                agregarTarjeta(item);
            });
       }
   }
   function agregarTitulo(titulo){
       $('#listado').append(`
       <div class="col-md-12">
         <h1> ${titulo} </h1>
       </div>

       `);
   }

   

});