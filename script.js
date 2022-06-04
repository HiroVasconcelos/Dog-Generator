$(function () {

    $("#button").on('click', function () {
        $("#box").animate({width: "0px", height: "0px"})
        $("#box").empty();
        $.get("https://dog.ceo/api/breeds/image/random", function (data) {
            $("#box").append("<img src='" + data.message + "'>");
            $("#box").animate({width: "315px", height: "315px"})
        });
    });


});