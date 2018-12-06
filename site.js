// javascript for go back to top button

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("topbutton").style.display = "block";
    }
    else{
        document.getElementById("topbutton").style.display = "none";
    }
}

// scrolls back up to top
function topFunction(){
    document.documentElement.scrollTop = 0;
}
