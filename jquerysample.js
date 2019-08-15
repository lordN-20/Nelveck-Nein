$(document).ready(function(){
	$("form[name='myform']").bind("submit", function(e){
		e.preventDefault();
		var username= $("input[name='name1']").val();
		var pass = $("input[name='password']").val();

		if(username == ""){
			alert("You can't be a Pokemon Master without a name!");
		}
		else if(pass == ""){
			alert("Password is required!");
		}
		else{
			$(this).submit();

		}
	});
});