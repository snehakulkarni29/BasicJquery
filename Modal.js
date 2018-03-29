$(document).ready(function(){
// When the user clicks on the button, open the modal
$("#myBtn").click(function() {
    $("#myModal").show();
})

// When the user clicks on <span> (x), close the modal
$("#close").click(function() {
    $("#myModal").hide();
})
});

