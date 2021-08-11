$(".nav-link").on("click", function(){
    console.log("click!")
    $(".nav-link").removeClass("active");

    $(this).addClass("active");
})