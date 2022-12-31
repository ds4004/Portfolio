$(".display_items").css("display", "none");
$(".display_items").eq(0).css("display", "inherit");
$(".nav_item").eq(0).css("opacity", "0.7");

function change_div(a) {
    $(".display_items").css("display", "none");
    $(".display_items").eq(a).css("display", "inherit");

    $(".nav_item").css("opacity", "1");
    $(".nav_item").eq(a).css("opacity", "0.7");
}

$(".nav_item").click(function (){
    change_div($(this).index());
});