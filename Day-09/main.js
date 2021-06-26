function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $(".grid-container").append("<div class='grid-item'></div>");
        };
    };
    $(".grid-item").width(960/x);
    $(".grid-item").height(960/x);
};

$(document).ready(function() {
    createGrid(16);

    $(".grid-item").click(function() { 
        if($(this).css("background-color")=="rgb(0,0,139)")
        {
        $(this).css("background-color","rgb(0,255,0)");
       
        }
        else{
            $(this).css("background-color","rgb(0,0,139)");
        }
       
       
        

        
        
     });
});