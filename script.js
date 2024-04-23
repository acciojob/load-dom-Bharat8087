//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "DOM load success";
    document.body.appendChild(paragraph);

    while (document.body.firstChild !== paragraph) {
        document.body.removeChild(document.body.firstChild);
    }
});


