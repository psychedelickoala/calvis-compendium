function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function searchSite() {
    var x = document.getElementById("searchbar");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    $(function(){
        $("#ghost-menu").load("menu.html");
        });

    var posts = document.getElementsByClassName("postPreview");
    var results = '';
    /*for (i=0; i<posts.length; i++) {
        if (posts[i].name.includes(text)) {
            posts[i].remove()
    }*/
    document.getElementById("search-results").innerHTML = posts[0].name;
}
