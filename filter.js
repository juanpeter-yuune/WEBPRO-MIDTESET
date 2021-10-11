$("#selfaculty").change(function () {
    var id = $(this).val();
	var options = $(this).data('options').filter('[class=' + id + ']' || '[class="0"]');
	$('#selprodi').html(options);
}); 

