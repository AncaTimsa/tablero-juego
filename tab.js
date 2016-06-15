$( document ).ready(function() {
    console.log( "123" );
    $(".mascara").fadeIn();
    $(".popup1").css("display","block");

});

$("button").click(function(){
	$(".popup1").css("display","none");
	console.log("345")
	$(".popup2").css("display","block")
});

	// $("#in_equipo1").keydown(function(){
	// 	console.log("pulsado")
 //    		$(".ant").addClass(".red");
	// }); 
	// $("#in_equipo1").Keyup(function(){
	// 	console.log("pulsado")
 //    		$(".ant").addClass(".red");
	// }); 

$("#in_equipo1").keydown(function(){
	console.log("pulsado")
	// console.log($("#in_equipo1").val();
	var equipo = $("#in_equipo1").val();
	if (equipo.length >= 3){
		$(".ant").addClass( "red" );
		console.log(888)
	}
});
// .keydown(function( event ) {
//   if ( event.equipo <= 3 ) {
//   	console.log(777)
//    	$(".ant").addClass( "red" );
//   }
// });

$("#in_equipo1").Keyup(function(){
	console.log("nopulsado")
})