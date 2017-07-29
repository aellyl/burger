$(document).ready(function() {
    var count = $("#displayAteBurger ul").children().length;
    if(count <= 0)
        {
            $("#displayAteBurger .panel-body").text("You have not eaten any burger yet!");
        }

    if ($("#displayBurger ul").children().length <=0)
        {
            $("#displayBurger .panel-body").text("You don't have any burger to eat");
        }


});