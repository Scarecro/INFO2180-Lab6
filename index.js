$(function(){
  var search = $("#search");
  var listAll = $("#listall");
  var result = $("#result");

  search.on("click", function(){
    console.log('searching...');

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
  
  listAll.on("click", function(){
    console.log('listing all...');
    var output = '<ol>';
    
    $.ajax("request.php?all=true", {
      method: "GET"
    }).done(function(response) {
      console.log('done');
      alert(response);

      var myxml = $.parseXML(response);
      $(myxml).find('definition').each(function (index, item) {
        output += '<li><strong>'+ $(this).attr('name') +'</strong> - '+ $(this).text() +'</li>';
      });
      $(result).html(output);
    }).fail(function() {
      console.log('fail');
      $(result).html("There was a problem with your request. ");
    }); 
  });

});



