function onDOMLoaded() {
    if (!document.body.firstChild || document.body.firstChild.tagName.toLowerCase() !== 'p') {
        const paragraph = document.createElement('p');
        paragraph.textContent = 'DOM load success';
        document.body.innerHTML = '';
        document.body.appendChild(paragraph);
    }
}

document.addEventListener('DOMContentLoaded', onDOMLoaded);
