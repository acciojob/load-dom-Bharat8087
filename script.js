// Function to execute when the DOM content is loaded
function onDOMLoaded() {
    if (document.body.childNodes.length === 0) {
        const paragraph = document.createElement('p');
        // Set the text content of the paragraph
        paragraph.textContent = 'DOM load success';
        document.body.appendChild(paragraph);
    }
}

document.addEventListener('DOMContentLoaded', onDOMLoaded);
