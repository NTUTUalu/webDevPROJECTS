
window.addEventListener("scroll", function() {

    const nav = document.querySelector("nav");

    //properties of window
    //property --> scrollY

    //it returns the pixels when we scroll in current window from top

    console.log(this.scrollY); 

    nav.classList.toggle("sticky", window.scrollY > 500);
    //we want the sticky to be triggered when we reach a certain pixels of the page

    // the header appears when you have reached a certain level, 
    //but for the other example, it appears when ever we scroll up
})