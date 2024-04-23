function onDOMLoaded() {
    if (document.body.childNodes.length === 0 || (document.body.childNodes.length === 1 && document.body.firstChild.tagName.toLowerCase() === 'script')) {
        const paragraph = document.createElement('p');
        paragraph.textContent = 'DOM load success';
        document.body.appendChild(paragraph);
    } else {
        if (document.body.childNodes.length === 1 && document.body.firstChild.textContent === 'DOM load success') {
            return;
        } else {
            document.body.innerHTML = '';
            const paragraph = document.createElement('p');
            paragraph.textContent = 'DOM load success';
            document.body.appendChild(paragraph);
        }
    }
}

document.addEventListener('DOMContentLoaded', onDOMLoaded);
