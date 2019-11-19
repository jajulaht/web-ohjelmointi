var searchURLResults   = [];
var searchPlainResults = [];
var index              = 0;
var maxResults         = 0;
var resultURL          = "";

function ajaxSearch(field, event) {
  // 40=Down,38=Up,13=Enter,27=Esc
	var keyCode = event.keyCode;

  if(keyCode == 40) {
    index++;
  } else if(keyCode == 38) {
    index--;
  } else if(keyCode == 13) {
      field.value = resultURL;
  } else if(keyCode == 27) {
    field.value = "";
  }
  if(field.value !== "") {
		resultsDiv.innerHTML = "";
    return;
  } else {
      try {
        var xhr = new XMLHttpRequest();
      } catch(e) {
        alert(e);
      }
      xhr.onreadystatechange = function() {
          if(xhr.readyState == 4 && xhr.status==200) {		
            var persons = [];
            persons = parsePersonsToArray(xhr.responseText);	
            appendPersonResultsToResultsDiv(persons);
          }
      };
      function appendPersonResultsToResultsDiv(array) {
          if (array.length != 0 && resultsDiv.children.length == 0) {
            for(var i = 0; i < array.length; i++) {
              var div = document.createElement("div");
              var a = document.createElement("a");
              searchURLResults.push(a);
              searchPlainResults.push(array[i]);
            }
          }
        }
      xmlhttp.open("GET", "ajax-suggest.php?q=" + field, true);
      xmlhttp.send();
  }
}