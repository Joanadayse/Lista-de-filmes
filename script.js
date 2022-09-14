// var filme1 = "Questão de tempo";
// var filme2 = "Interestelar";
// var filme3 = "A Chegada";

// document.write("<p>" + filme1 + "</p>");
// document.write("<p>" + filme2 + "</p>");
// document.write("<p>" + filme3 + "</p>");

// ou usando listas/ARRAYS
// var listaFilmes = ["Questão de tempo", "Interestelar", "A Chegada"];
// listaFilmes.push("Perdidos em Marte");

// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

// OU

// for (var indice = 0; indice < listaFilmes.length; indice = indice++){
//   document.write("<p>" + listaFilmes[indice] + "</p>");
// }

var listaFilmes = ["https://i0.wp.com/livetv.tube/wp-content/uploads/2020/07/476171.jpg?fit=683%2C1000&ssl=1","https://image.tmdb.org/t/p/original/iEPMEinBT6RO4IDHZPpHT1FFNTK.jpg","http://br.web.img3.acsta.net/pictures/16/12/21/20/45/071675.jpg"]

for (var i=0; i< listaFilmes.length; i++){
    document.write("<img src=" +listaFilmes[i]+">")
}
