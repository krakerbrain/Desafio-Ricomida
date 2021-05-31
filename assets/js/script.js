$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$("h4").on("click", function (){
       $(this).css("color", "red");
   })
$("#enviarCorreo").on("click", function (){
      alert("El correo fue enviado correctamente...")
   })
   $(document).ready(function(){
  $(".card-title").click(function(){
    $("p").toggle("slow");
  });
});
