document.addEventListener("DOMContentLoaded", function() {
    if (document.body.innerHTML !== '') {
        document.body.innerHTML = '';
    }

    const paragraph = document.createElement("p");
    paragraph.textContent = "DOM load success";
    document.body.appendChild(paragraph);
});
