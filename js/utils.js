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