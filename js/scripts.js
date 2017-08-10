$(document).ready(function(){
  $(".menu").click(function(){
    if($(".ul-navbar").css("height")=='0px')
        {
            $(".ul-navbar").css({
                                                "height":'auto'
                                            });
        }
    else{
            $(".ul-navbar").css({
                                                "height":''
                                            });
        }
  });
});

