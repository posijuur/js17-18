;(function ($) {
$('.input').keypress(function(event){
  switch (event.keyCode) {
  case 13:
var i = 0;
  $('.list li').remove();
  $('.list a').remove();
  	function GoogleCallback (func, data) {
   	 window[func](data);
	}

var request = $('input').val();
	// change key!!!
$.getJSON("https://webhose.io/search?token=4f2f7afb-c519-43e7-900f-acd5b2d00c0e&format=json&q=" + request + "",
function(data){
    for (i = 0; i < data.posts.length; i++) {
    	var li = document.createElement("li");
    	li.innerHTML = '<a href="'+data.posts[i].url+'" title="'+data.posts[i].url+'" target="_blank">'+data.posts[i].title+"</a> <p>"+data.posts[i].text+"</p>";
    	$('.list').append(li);
    }
	if ($('.list li').length) {
		for (var j = 1; j < 10 + 1; j++) {
			$('.list').append('<a data-action="'+j+'" class="list_link">'+j+'</a>');
		}	
	}

	$('li').hide();
	var k = 0;
	while (k < 10) {
		$('li:eq('+k+')').show();
		k++;
	}

$('.list_link').on('click', function(event) {
	event.preventDefault();
	var target = event.target;
	var o = 0;
	var p = 10;
	var q = 20;
	var w = 30;
	var e = 40;
	var r = 50;
	var t = 60;
	var y = 70;
	var u = 80;
	var a = 90;
	var action = $(target).data('action');
	switch (action) {
		case 1:
			$('li').hide();
			while (o < 10) {
				$('li:eq('+o+')').show();
				o++;
			}
			event.stopImmediatePropagation();
			break;
		case 2:
			$('li').hide();
			while (p < 20) {
				$('li:eq('+p+')').show();
				p++;
			}
			event.stopImmediatePropagation();
			break;
		case 3:
			$('li').hide();
			while (q < 30) {
				$('li:eq('+q+')').show();
				q++;
			}
			event.stopImmediatePropagation();
			break;
		case 4:
			$('li').hide();
			while (w < 40) {
				$('li:eq('+w+')').show();
				w++;
			}
			event.stopImmediatePropagation();
			break;
		case 5:
			$('li').hide();
			while (e < 50) {
				$('li:eq('+e+')').show();
				e++;
			}
			event.stopImmediatePropagation();
			break;
		case 6:
			$('li').hide();
			while (r < 60) {
				$('li:eq('+r+')').show();
				r++;
			}
			event.stopImmediatePropagation();
			break;
		case 7:
			$('li').hide();
			while (t < 70) {
				$('li:eq('+t+')').show();
				t++;
			}
			event.stopImmediatePropagation();
			break;
		case 8:
			$('li').hide();
			while (y < 80) {
				$('li:eq('+y+')').show();
				y++;
			}
			event.stopImmediatePropagation();
			break;
		case 9:
			$('li').hide();
			while (u < 90) {
				$('li:eq('+u+')').show();
				u++;
			}
			event.stopImmediatePropagation();
			break;
		case 10:
			$('li').hide();
			while (a < 100) {
				$('li:eq('+a+')').show();
				a++;
			}
			event.stopImmediatePropagation();
			break;
	}
	
});

});
  break;
  }
})
})(jQuery);