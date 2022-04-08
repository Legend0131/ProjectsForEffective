jQuery(document).ready(function() { //Функция будет исполнена только после того, как будет выведен весь код HTML.
	
	jQuery('button').on('click', function(){
		var name, number;

		name = jQuery('#name1').val();
		number = jQuery('#number1').val();
		
		if (!name || !number) {
			alert('Уважаемый пользователь, вы не указали как к вам обращаться или номер');
		} 
		else {
			alert('Уважаемый, ' + name + ', Наш менеджер позвонит вам на указаный номер: ' + number);
		}
	});
});
 