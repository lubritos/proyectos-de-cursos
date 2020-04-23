$(document).ready(function(){
    let cursos = getStorage();
    console.log(cursos);
    agregarTitulo(cursos['cursos'][1].title);
    mostrarTarjeta(cursos);

    function agregarTitulo(titulo){
       $("#listado").append(`
       <div class="col-md-12">
        <h1>${titulo}</h1>
       </div>
      `);
    }
    function mostrarTarjeta(tarjetas){
        if (tarjetas){
            $.each(tarjetas['cursos'][1].lista, function (position, item){
                agregarTarjeta(item);
            });
        }

    }


    
 });

