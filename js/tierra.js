var rutaJson="";
var intid=1;
var carga=0;

$(document).ready(function(){
	
	//Cuando se seleccione el boton de cargar noticias
	rutaJson="http://localhost/vidaterrestre/data/news1.json";
	$(window).scroll(function(){
		if($(window).scrollTop()+$(window).height()>$(document).height()-1){
			if(carga!=2){
				$.getJSON(rutaJson,function(jsonData){
					generarNew(jsonData);
					carga++;
				});
			}
		}
	});
	
	$("#mas").click(function(){
		$.getJSON(rutaJson,function(jsonData){
			generarNew(jsonData);
			carga++;
		});
	});
});

function generarNew(json){
	$.each(json,function(i,noticia){
		$("#newsrow").append($("<div>",{id:"json1_new"+intid,class:"col-sm-4 new"}));//Contenedor de noticias
		$("#json1_new"+intid).append($("<div>",{id:"cuerponew_"+intid,class:"divcuerpo"}));//DivCuerpo
		$("#cuerponew_"+intid).append($("<div>",{id:"divimg_"+intid,class:"divimg"}));//DivImg
		$("#divimg_"+intid).append($("<img>",{src:noticia.img,class:"img-responsive center-block"}));//Imagen
		$("#cuerponew_"+intid).append($("<h3>",{text:noticia.title}));//Titulo
		$("#cuerponew_"+intid).append($("<h4>",{text:noticia.publicado}));//Publicacion
		$("#cuerponew_"+intid).append($("<p>",{text:noticia.descripcion}));//Descripcion
		intid++;
	});
	if(rutaJson=="http://localhost/vidaterrestre/data/news2.json"){
		$("#mas").hide();
	}
	rutaJson="http://localhost/vidaterrestre/data/news2.json";
}