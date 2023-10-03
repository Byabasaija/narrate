
// Function to show titles one by one with sliding animation
export default function showTitles() {
   // Wait for the document to load
   document.addEventListener("DOMContentLoaded", function() {
    // Get the post titles container
    var postWrapper = document.querySelector(".post-wrapper-content .row");

    // Get the width of the post titles container
    var wrapperWidth = postWrapper;

    // Calculate the duration of the animation based on the width
    var animationDuration = wrapperWidth/50; // Adjust the value as needed

    // Set the animation duration
    postWrapper.style.animationDuration = animationDuration + "s";
});
}