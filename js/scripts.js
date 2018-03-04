$(document).ready(function() {
    $("#mycarousel").carousel({interval: 1000});

    $("#carouselButtons").click(function() {
        if($("#carouselButtons").children("span").hasClass('fa-pause'))
        {
            $("#mycarousel").carousel('pause');
            $("#carouselButtons").children("span").removeClass('fa-pause');
            $("#carouselButtons").children("span").addClass('fa-play');
        }
        else
        {
            $("#mycarousel").carousel('cycle');
            $("#carouselButtons").children("span").removeClass('fa-play');
            $("#carouselButtons").children("span").addClass('fa-pause');
        }
        

    });

    $("#carouselPlay").click(function() {
        $("#mycarousel").carousel('cycle');
    });

    $("#login").click(function() { 
        $("#loginModal").modal();
    });

    $("#reserve").click(function() {
        $("#reserveModal").modal();
    });

});
