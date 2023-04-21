$(document).ready(function(){

    $("#sumar").click(function(){
        var a=parseInt($("#num1").val());
        var b=parseInt($("#num2").val());
        var sumar=a+b;
        $("#resultado").val(sumar);   
    });

    $("#mult").click(function(){
        var a=parseInt($("#num1").val());
        var b=parseInt($("#num2").val());
        var mult=a*b;
        $("#resultado").val(mult);   
    });

});