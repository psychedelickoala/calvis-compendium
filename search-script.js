var site;

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function buildSearchbar() {
    site = window.location.href
    var x = document.getElementById("searchbar");
    if (x===null) {
        $(function(){
        $("#ghost-menu").load("menu.html");
        });
        document.getElementById("searchbar-holder").innerHTML = '<form id="searchbar"><input type="text" placeholder="Search.." name="search"></form><button onclick="searchSite()"><i class="fa fa-search"></i></button>';
        return true
    }
}

function searchSite() {
    var x = document.getElementById("searchbar");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value;
    }
    if (text==="") {
        document.location=site;
        return true;
    }
    var terms = text.split(" ");
    var posts = document.getElementsByClassName("postPreview");
    var irrelevantPosts = [];
    var n;

    for (n=0; n < posts.length ; n++) {

        var relevant = false
        for (i=0; i < terms.length; i++) {
            if (posts[n].innerHTML.toLowerCase().includes(text.toLowerCase())===true) {
                relevant=true;
            }
        }
        if (relevant===false) {
            irrelevantPosts.push(posts[n]);
        }

    }
    var its=irrelevantPosts.length;
    for (n=0; n < its ; n++) {
        irrelevantPosts[n].remove()
    }


    document.getElementById("search-results").innerHTML = "Your search for \'"+text+ "\' yielded "+(posts.length).toString()+" results!";
    document.getElementById("searchbar-holder").innerHTML ='<button onclick="buildSearchbar()"><i class="fa fa-search"></i></button>';


}
    /*var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }

    var posts = document.getElementsByClassName("postPreview");
    for (i=0; i<posts.length; i++) {
        if (posts[i].name.includes(text)) {
            posts[i].remove()
    }
    document.getElementById("search-results").innerHTML = posts[0].name;*/
