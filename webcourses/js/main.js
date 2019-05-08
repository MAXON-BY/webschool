
hljs.initHighlightingOnLoad();

var currentId;

$('h2').on('click', function(){
    var id = this.id;

    $('#'+currentId).removeClass('header-selected');
    $('#'+id).addClass('header-selected');
    currentId = id;

	var html = $('#code-'+id).html();
	$('#container-show-content').html(html);

	$('#container-show').animate({ scrollTop: 0 }, 400);

});



