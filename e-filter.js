//Plugin e-filter.js by Eduardo Torres, for more documentation visit: https://github.com/edukni/Search-input-jquery-plugin

$( "ul#eFilter.dropdown-menu li" ).on( "click", function() {
	$(this).parent().find("li").each(function( index ) {
		$( this ).removeClass('active');
	});

	$( this ).addClass('active');
	$(".containerItems div[data-filter]").hide();


	var stringCategoria = new Array();
	$("ul#eFilter.dropdown-menu > li.active").each(function( index ) {
		var attr = $(this).attr('data-catego');
		var string = attr.split(" ");

		for(var i =0; i < string.length; i++){
			if(string[i]){
	    		stringCategoria.push(string[i]);

			}
	    }



	});
if(stringCategoria.length >0){
	fadeInItem2(stringCategoria);


} else{
	$(".containerItems div[data-filter]").fadeIn();

}


});


function fadeInItem2(atributo) {
	 console.log(atributo);
	 var general="";
	for(var i =0; i < atributo.length; i++){
				 console.log(atributo[i]);
				var general= general + "[data-filter~="+atributo[i]+"]";
	 }
	 $(".containerItems" + " "+"div"+ general).fadeIn('fast');

}


