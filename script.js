document.addEventListener("DOMContentLoaded", function() {
    if (document.body.children.length === 0) {
        const paragraph = document.createElement("p");
        paragraph.textContent = "DOM load success";
        document.body.appendChild(paragraph);
    } else {
        document.body.innerHTML = '';
        const paragraph = document.createElement("p");
        paragraph.textContent = "DOM load success";
        document.body.appendChild(paragraph);
    }
});
