$(document).ready(function() {
	$('#themeselect').find('a').click(function(){
		var value = $(this).attr('data-color');
		$('.navbar').removeClass().addClass('navbar '+ value);
		
		return false;
	});		
});
