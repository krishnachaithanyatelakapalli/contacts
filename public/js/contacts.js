var dropdown_menu = $('ul#dropdown_menu');

function display_list(){
	var data = null;
	display_list(data);
}

function display_list(data){
	if(data === null || data === undefined){
		dropdown_menu.html("");
	} else {
		dropdown_menu.html("");
		data.forEach(function(contact){
			var html = "<li class='list-group-item'>" + contact.name + "</li>";
			dropdown_menu.append(html);
		});
	}
}

$('document').ready(function(){
	var text='';
	var contact_data = [];
	dropdown_menu.width(1039);
	$('#search_bar').on({
		click: function(){
			display_list();
		},

		keydown: function(event){
			if(event.keyCode === 8)	{
				// console.log(text.length-1);
				text = text.slice(0, text.length - 1);
				// console.log(text);
			} else {
				text += event.key;
				// console.log(event.keyCode);
			}
			// console.log(text);
			if(text.length != 0){
				$.get('http://localhost:8080/contacts/name/' + text, function(data, status){
					if(status === 'success'){
						contact_data = JSON.parse(data);
						display_list(contact_data);
					}
				});
			} else {
				display_list();
			}
		}
	});
	$('button#btn_save').click(function(){
		var save = $(this);
		var url = $(this).siblings('form').attr('action');
		var update = {
			name: $(this).siblings('form').find('.ip_name').val(),
			contact: {
				mobile: $(this).siblings('form').find('.ip_mobile').val(),
				email: $(this).siblings('form').find('.ip_email').val()
			},
			dob: $(this).siblings('form').find('.ip_dob').val()
		}
		// console.log(update);
		$.post($(this).siblings('form').attr('action'), update, function(data, status){
			if(status === 'success'){
				$.get(url.slice(0, 35) + 'id', function(data, status){
					var contact = JSON.parse(data);
					save.parent().siblings('div#info').find('#name').html("<strong>"+contact.name+"</strong>");
					save.parent().siblings('div#info').find('#info').find('#mobile').text(contact.contact.mobile);
					save.parent().siblings('div#info').find('#info').find('#email').text(contact.contact.email);
					save.parent().siblings('div#info').find('#dob').text(contact.dob);
					save.parent().siblings('div#info').removeClass('hide');
					save.parent().parent().siblings('div#btn_div').find('#btn_edit').removeClass('hide');
					save.parent().addClass('hide');
				});
			}
		});
	});
	$('#panel').css('margin-top', '20px');
	$('li').css('margin-bottom', '4px');
	$('img').css(
		{
			'margin-bottom': '0',
			'display': 'inline'
		}
	).width(110).height(110);
	$('.contact').css({'padding-left': '10px'});
	$('button#btn_edit').click(function(){
		$(this).parent().siblings('.contact').find('div#info').addClass('hide');
		$(this).parent().siblings('.contact').find('#form').removeClass('hide');
		$(this).addClass('hide');
	});
	$('button#btn_delete').click(function(){
		var del = $(this);
		var url = $(this).parent().siblings('div#contact_info').find('div#form').find('form').attr('action');
		// console.log(url.slice(0, 35)+'delete?_method=DELETE');
		// del.parent().parent().parent().remove();
		$.post(url.slice(0, 35)+'delete?_method=DELETE', function(data, status){
			if(status === 'success'){
				del.parent().parent().parent().remove();
			};
		});
	});
	$('button#btn_cancel').click(function(){
		$(this).parent().addClass('hide');
		$(this).parent().siblings('#info').removeClass('hide');
		$(this).parent().parent().siblings('#btn_div').find('#btn_edit').removeClass('hide');
	});
	$('button#add_new_cancel').click(function(){
		$('div#add_new_contact').removeClass('show');
		$('div#add_new_contact').addClass('hide');
	});
	$('button#add_new').click(function(){
		$('div#add_new_contact').removeClass('hide');
		$('div#add_new_contact').addClass('show');
	});
});
