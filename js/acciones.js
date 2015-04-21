// JavaScript Document
$(document).ready(function(e) {
// document.addEventListener("deviceready",function(){
$('#btndatos') .on  ('click', function () {
	 //alert ('hola');
	 $ ('body').pagecontainer ("change", "#datos", {transition: "flip"});
	  
});// alerta de java
$('#btnresultado') .on  ('click', function () {
	 
	 $ ('body').pagecontainer ("change", "#resultado", {transition: "flip"});
	 var imc; 
	 var peso = $('#txtpeso').val ();
	 var talla = $('#txttalla').val ();
	 imc =(peso/(talla * talla));
	 $('#imc').text ('Nombre ' +  $('#txtnombre').val () + ' imc= ' + imc);
	 
	 
	 
});// alerta de java	  

//}); 
});

