$(document).ready(function(){


       $(".content").hide();
       $("#content-paris").show();


    $(".nav-link").click(function(){

        var val = $(this).attr("id")
        var currentid="content-"+val
       $(".content").hide();
       $("#"+currentid).show();





    });
  
  });