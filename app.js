/*
MOOD		SONG						ENDPOINT

Happy		Good Life					https://api.spotify.com/v1/tracks/1fLdeDTrJWNkwOeFyAVLvF
Sad			Bound 2						https://api.spotify.com/v1/tracks/3sNVsP50132BTNlImLx70i
Mad			Blood on the Leaves			https://api.spotify.com/v1/tracks/42GcjriRK6srwHkfbkBqVl
Kanye		I am a Good					https://api.spotify.com/v1/tracks/0HMCdlOPJkAGlB0MlSWIcO

*/

/* EXAMPLE

$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

*/

// BAD CODE IS BAD, I KNOW

$(document).ready(function(){
    if($("#happy").click(function(){
       alert("Kanye is happy");
    }));
    if($("#mad").click(function(){
      alert("Kanye is mad");
    }));
    if($("#sad").click(function(){
      alert("Kanye is sad");
    }));
    if($("#kanye").click(function(){
      alert("Kanye is Kanye");
    }));
});

$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "https://api.spotify.com/v1/tracks/1fLdeDTrJWNkwOeFyAVLvF", success: function(result){
            $("#happy").html(result);
        }});
    });
});
