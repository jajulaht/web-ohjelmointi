/* Houses- JavaScript */
$(document).ready(function() {
    // use ajax() to load h05t04-ajax-json-talot.json file
    // call showHouses from done()-function
    $.ajax({
        url: "h05t04-ajax-json-talot.json",
        cache: false
    }).done(function(data) {
        console.log("done");
        showHouses(data);        
    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
});

// function shows houses information
function showHouses(data) {
    // loop through all houses data 
    $.each(data.houses, function(index, house) {
        // create a div element and add "houseContainer" class to it
        var div = $("<div>").addClass("houseContainer");
        // create img element and use "houseImage" class to it and src to house image
        var image = $("<img>").addClass("houseImage").attr("src", "images/talo" + (index + 1) + ".jpg");
        // create p element, use address as a text and "header" class
        var header = $("<p>").addClass("header").text(house.address);
        // create p element ja use house size as a text
        var size = $("<p>").text(house.size);
        // create p element and use house text as a text and "text" class
        var text = $("<p>").addClass("text").text(house.text);
        // create p element and use house price as a text
        var price = $("<p>").text(house.price);
        //  add all elements to houseDiv
        div.append(image, header, size, text, price);
        // add div to #houses in DOM
        $("#houses").append(div);
    });
}
