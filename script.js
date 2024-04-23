window.onload = function() {
    // Clear the entire body
    document.body.innerHTML = '';

    // Create a paragraph and append it to the body
    const paragraph = document.createElement("p");
    paragraph.textContent = "DOM load success";
    document.body.appendChild(paragraph);
};
