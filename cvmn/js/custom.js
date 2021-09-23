
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		    $('#send').click(function(){
		        var url = "datos_login.php";
		        $.ajax({                        
		           type: "POST",                 
		           url: url,                     
		           data: $("#contactForm").serialize(), 
		           success: function(data)             
		           {
		             //$('#resp').html(data);               
		             console.log(html(data));
		           }
		       });
		    });
		});


// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})
