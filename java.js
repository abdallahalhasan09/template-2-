// header toogle
$(function () {
  $("#toggle-header").on("click", function () {
    $("#list").slideToggle("slow");
    $("#list").css({
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "100%",
      left: "0",
      width: "100%",
      backgroundColor: "black",
      opacity: 0.6,
    });
  });
});
// header toogle end
