/*

    O negócio é que esse cara aqui ta dentro o html
    Eu queria saber ser pelo React é possível integrar isso lá dentro
    @Asger dá uma olhada depois

*/
$(function () {
  var socket = io();
  $("form").submit(function (e) {
    e.preventDefault(); // prevents page reloading
    socket.emit("chat message", $("#m").val());
    $("#m").val("");
    return false;
  });
});
