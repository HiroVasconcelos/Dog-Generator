$(function () {

    $("#button").on('click', function () {
        $("#box").empty()
        $("#box").append("<div id=loading-spinner></div>")
        $.get("https://dog.ceo/api/breeds/image/random", function (data) {
            $("#box").empty()
            console.log(data)
            $("#box").append("<img src='" + data.message + "'>");
        });
    });


}); 