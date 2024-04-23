document.addEventListener('DOMContentLoaded', function() {
    // Clear the body
    document.body.innerHTML = '';

    // Create a paragraph element
    const paragraph = document.createElement("p");

    // Set the text of the paragraph to 'DOM load success'
    paragraph.textContent = "DOM load success";

    // Append the paragraph to the body
    document.body.appendChild(paragraph);
});
