$(document).ready(function() {
  $(".butt").click(function(event) {
    var emailInput = $("input#email").val()


    event.preventDefault();
    alert(emailInput + ",You have successfully subscribed")
    $(".butt").html("Subscribed!")

  });
});
