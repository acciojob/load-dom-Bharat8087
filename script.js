document.addEventListener('DOMContentLoaded', function() {
    // Check if there are any <p> elements in the body
    const existingParagraphs = document.querySelectorAll('p');

    // If no <p> elements exist, proceed to add the paragraph
    if (existingParagraphs.length === 0) {
        // Clear the body
        document.body.innerHTML = '';

        // Create a paragraph element
        const paragraph = document.createElement("p");

        // Set the text of the paragraph to 'DOM load success'
        paragraph.textContent = "DOM load success";

        // Append the paragraph to the body
        document.body.appendChild(paragraph);
    }
});
