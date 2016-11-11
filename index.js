$(function(){
    var search = $("#search");
    var searchAll = $("#searchAll");
    var result = $("#result");
    
    search.on("click", function(element){
        console.log('searching...');
      
        //element.preventDefault();
        var word = $("input").val();
        if (word != "") {
            $.ajax("request.php?q=" + word, {
                method: "GET"
            }).done(function(response) {
                console.log('done');
                alert(response);
                $(result).html(response);
            }).fail(function() {
                console.log('fail');
                $(result).html("There was a problem with your request. ");
            });   
        }
        else { 
          $(result).html("Please enter a word. ");
            
        }
            
    });
  
});
    
    

