$(document).ready(function(){

    $("table tbody tr").mouseover(function(){
        $(this).css('background-color', 'yellow');
    });

    $("table tbody tr").mouseout(function(){
        $(this).css('background-color', 'white');
    });
});