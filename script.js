$(function () {

    $("#button").on('click', function () {
        $("#img-box").empty()
        $("#img-box").append("<div>loading</div>")
        $.get("https://dog.ceo/api/breeds/image/random", function (data) {
            $("#img-box").empty()
            console.log(data)
            $("#img-box").append("<img src='" + data.message + "'>");
        });
    });


}); 