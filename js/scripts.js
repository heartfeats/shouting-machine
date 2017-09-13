$(function() {
  $("#formOne").submit(function(event) {
    var messageInput = $("input#message").val();

    $(".shout").text(messageInput);

    $("#output").show();

    event.preventDefault();
  });
});
