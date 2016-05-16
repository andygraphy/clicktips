
// JavaScript Document


$(function() {
	
    $( "#accordion" ).accordion({
      collapsible: true
    });
	
	$( "#accordion1" ).accordion({
      collapsible: true
    });
	
	$("#slider-range-max").slider({
    	range: "max",
      	min: 1.5,
      	max: 22.5,
      	value: 0.5,
      	slide: function( event, ui ) {
        	$( "#amount" ).val( ui.value );
		}
    });
	
	$("#slider-range-max1").slider({
    	range: "max",
      	min: -30,
      	max: 4000,
      	value: 1,
      	slide: function( event, ui ) {
        	$( "#amount1" ).val( ui.value );
		}
    });
});