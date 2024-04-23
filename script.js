document.addEventListener("DOMContentLoaded", function() {
    // Check if the paragraph element exists in the DOM
    const existingParagraph = document.querySelector("p");
    
    if (existingParagraph) {
        existingParagraph.remove();
    }

    const paragraph = document.createElement("p");
    paragraph.textContent = "DOM load success";

    document.body.appendChild(paragraph);
});
