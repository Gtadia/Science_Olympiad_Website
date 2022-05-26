let myIndex = 0;
slideshow();

function slideshow() {
    let i;
    let theSlides = document.getElementsByClassName("slide");
    for(i = 0; i < theSlides.length; i++) {
        theSlides[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > theSlides.length -1) {
        myIndex = 0;
    }
    theSlides[myIndex].style.display = "block"; 
    setTimeout(slideshow, 5000);
}
