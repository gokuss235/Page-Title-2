$("#ocean").hide();
$("#trident").hide();
$("#dive").hide();
$("#goal").hide();
$("#man").hide();
$("#rival").hide();
$("#brother").hide();
$("#water").click(function(){
    $("#ocean").show();
    $("#dive").show();
    $("#lighthouse").hide();
    $("#water").hide();
});
$("#ocean").dblclick(function(){
    $("#goal").show();
    $("#man").show();
    $("#ocean").hide();
    $("#dive").hide();
    $("body").css("background , blue");
    $("#aqua").text("Let's find your weapon!");
}); 
$("#aqua").dblclick(function(){
    $("#trident").show();
    $("#goal").text("You have found the legendary trident held by the first Atlantean king.");
    $("#man").hide();
    $("#aqua").text("Your Trident!");
    $("#rival").show();
    
});
$("#rival").click(function(){
    $("#brother").show();
});

