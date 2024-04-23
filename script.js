// Clear the body immediately when the script is loaded
document.body.innerHTML = '';

// Listen for the window.onload event
window.onload = function() {
    // Create a paragraph and append it to the body
    const paragraph = document.createElement("p");
    paragraph.textContent = "DOM load success";
    document.body.appendChild(paragraph);
};
