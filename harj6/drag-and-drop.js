function allowDrop(event) {
	event.preventDefault();
}

function drag(event) {
	event.dataTransfer.setData("divToDrop",event.target.id);
}

function drop(event) {
  let file;
  drag(event);
  event.stopPropagation();
  event.preventDefault();
  var files = event.dataTransfer.files;
  var filesCount = files.length;
  for(let i = 0; i < filesCount; i++) {
    file = files[i];
    if (!file.type.match('image.*')) {
      continue;
    }
    var fileReader = new FileReader();
    fileReader.onload = function(event) {
      var img = document.createElement("img");
      img.src = event.target.result;
      img.classList.add("thumbnail");
      document.getElementById('divToDrop').appendChild(img);
    }
  }
  fileReader.readAsDataURL(file);
}