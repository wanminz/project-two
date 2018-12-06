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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
