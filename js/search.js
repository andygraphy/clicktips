// JavaScript Document
//$(function() {
//	
//    $("#slider-range-max").slider({
//      range: "max",
//      min: 1,
//      max: 10,
//      value: 2,
//      slide: function( event, ui ) {
//        $( "#amount" ).val( ui.value );
//		
//      }
//    });
//    var v = $( "#slider-range-max" ).slider( "value" );
//	$( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
//	
//	if(value= 1){
//		$(document).on('click', '#conteni', function(event) {
//    		$(".conteni").css({'-webkit-filter': 'brightness(200%)'});
//    	});
//	} else{
//		$(document).on('click', '#conteni', function(event) {
//    		$(".conteni").css({'-webkit-filter': 'brightness(150%)'});
//    	});
//	}
//	
//  });

$(function(){
	var v;
	var searchString = [
		"ISO",
		"Aperture",
		"Shutter Speed",
		"Composition",
		"Filters",
		];
	$("#inputlg1").autocomplete({
		source: searchString
		});
		
	//$( "#radio1" ).buttonset();
 	
	$( "#radio2" ).buttonset();

	$( "#radio3" ).buttonset();
	
	$( "#accordion" ).accordion({
      collapsible: true
    });
	
	$( "#accordion1" ).accordion({
      collapsible: true
    });
	
	$(document).on('click', '#conteni', function(event) {
    	$(".conteni").css({'-webkit-filter': 'brightness(100%)'});
    });
    
    $(document).on('click', '#conteni1', function(event) {
    	$(".conteni1").css({'-webkit-filter': 'brightness(110%)'});
    });
	
	$(document).on('click', '#conteni2', function(event) {
    	$(".conteni1").css({'-webkit-filter': 'brightness(140%)'});
    });
	
	$(document).on('click', '#conteni3', function(event) {
    	$(".conteni1").css({'-webkit-filter': 'brightness(170%)'});
    });
	
	$(document).on('click', '#conteni4', function(event) {
    	$(".conteni1").css({'-webkit-filter': 'brightness(200%)'});
    });
	
	$(document).on('click', '#conteni5', function(event) {
    	$(".conteni1").css({'-webkit-filter': 'brightness(250%)'});
    });
	
	$(document).on('click', '#conteni6', function(event) {
    	$(".conteni1").css({'-webkit-filter': 'brightness(300%)'});
    });
	
	$("#slider-range-max").slider({
    	range: "max",
      	min: 1.5,
      	max: 22.5,
      	value: 0.5,
      	slide: function( event, ui ) {
        	$( "#amount" ).val( ui.value );
			var selection = $( "#slider-range-max" ).slider( "value" );
			if (selection === 1.5){$(".blur").css({'-webkit-filter': 'blur(5px)'});}
			else if (selection === 2.5){$(".blur").css({'-webkit-filter': 'blur(4px)'});}
			else if (selection === 4.5){$(".blur").css({'-webkit-filter': 'blur(3px)'});}
			else if (selection === 7.5){$(".blur").css({'-webkit-filter': 'blur(2px)'});}
			else if (selection === 10.5){$(".blur").css({'-webkit-filter': 'blur(2.5px)'});}
			else if (selection === 14.5){$(".blur").css({'-webkit-filter': 'blur(1px)'});}
			else if (selection === 18.5){$(".blur").css({'-webkit-filter': 'blur(0.5px)'});}
			else if (selection === 22){$(".blur").css({'-webkit-filter': 'blur(0px)'});}
		}
    });
	
	
	$( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
	
	$("#slider-range-max1").slider({
    	range: "max",
      	min: -30,
      	max: 4000,
      	value: 1,
      	slide: function( event, ui ) {
        	$( "#amount1" ).val( ui.value );
		}
    });
	
	$( "#amount1" ).val( $( "#slider-range-max1" ).slider( "value" ) );
	
	 $('.box li a').click(function (e) {
        e.preventDefault();
        $(this).closest('li').addClass('iso-active').siblings().removeClass('iso-active');
    });
	
	$(".link").click(function(e) {
      e.preventDefault();
      $('.content-container div').fadeOut('slow');
      $('#' + $(this).data('rel')).fadeIn('slow');
	});
	
	
	
	//var imageLoader = document.getElementById('filePhoto');
//   	imageLoader.addEventListener('change', handleImage, false);
//
//	function handleImage(e) {
//    	var reader = new FileReader();
//    	reader.onload = function (event) {
//        
//        $('.uploader img').attr('src',event.target.result);
//    }
//    reader.readAsDataURL(e.target.files[0]);
//}
//////http://jsfiddle.net/ELcf6/4/
//	
//	
});
 