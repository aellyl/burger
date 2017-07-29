$(document).ready(function() {
    var count = $("#displayAteBurger ul").children().length;
    if(count <= 0)
        {
            $("#displayAteBurger .panel-body").text("You didn't eat any burger yet!");
        }


});