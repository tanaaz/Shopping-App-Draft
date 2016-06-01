$(document).ready(function() {
	$('#userInput').submit(function(event) {
		event.preventDefault();//prevent default??//
		var something = $('#Box').val();
		if (something === "") {
			alert('Please enter an item.')
		}
		//otherwise, val should go into li shopping list 
		else {
			$('.Needli').append("<li class='currentItem");	
		}//how do i show that the item has been added? images that show its added? numbers counting? 
		// resets the textbox after item is entered
		$('#userInput')[0].reset();
	});
