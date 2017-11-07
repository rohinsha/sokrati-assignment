$(document).ready(function(){ 
$(".btn-submit").click(function(){
    var parameter = $(".email").val();
   
$(".btn-a").attr('href',('http://sokrati.com?email=' + parameter));



});
});