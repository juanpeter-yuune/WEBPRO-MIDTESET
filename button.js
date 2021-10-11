document.getElementById("formbtn").addEventListener("click", function() {
	if (formbtn.innerHTML == "Hide Form Add New Student") {
		 formbtn.innerHTML = "Show Form Add New Student"; 
	} else { 
		formbtn.innerHTML = "Hide Form Add New Student"; 
	}
    if ($("#selfaculty").data('options') === undefined) {
		$("#selfaculty").data('options', $('#selprodi option').clone());
	}
	var id = $("#selfaculty").val();
	var options = $("#selfaculty").data('options').filter('[class='+ id +']');
	$('#selprodi').html(options);
} );