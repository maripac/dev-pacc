var doit;
function resizedw(){
   // $("#play2").append("did it");
    $("#play2").prop("checked", false);
}
window.onresize = function() {
    clearTimeout(doit);
    doit = setTimeout(function() {
        resizedw();
    }, 100);
};