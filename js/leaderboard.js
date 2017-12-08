$.ajax({
	url:"http://localhost:8000/getList/",
  	type: "GET", cache:false,
  	dataType: 'json',
  	success: function(ranks) 
  	{
      var original = $("#genericrow").removeAttr("id");
  		$(ranks).each(function(index,rank)
  		{
        console.log(index, rank)
        var clone = $(original).clone().show();
        clone.find(".username").html(rank.username)
        clone.find(".score").html(rank.scores)
        clone.insertAfter(".scorerow:last")
  			// if($('#row-'+rank.username).length == 0)
  			// {
  			// 	$("#leaderboard").append('<li><h1 style="display:inline" id="row-' + rank.username + '">'+rank.score+'</h1>');
  			// }
  			// else
  			// {
  			// 	$('#row-'+rank.username).html(rank.score);
  			// }
  		});

 
 	},
 	error: function()
 	{
 	}
  
	});
