// Select all "cursor-item" class elements
var cursorItems = document.getElementsByClassName("cursor-item");

// Add "click" event to all items
for (const item of cursorItems) {
    item.addEventListener("click", function () {
        // Get text of clicked item
        var text = item.innerText.toLowerCase();

        // Change text to css property
        text = `cursor: ${text};`;

        // Copy text to the clipboard
        navigator.clipboard.writeText(text)
            .then(function () {
                // Change item's text to "Copied" for 2 seconds
                itemText = item.innerText;
                item.innerText = "Copied!";
                item.classList.toggle("copied");

                setTimeout(function () {
                    item.innerText = itemText;
                    item.classList.toggle("copied");
                }, 1000);
            })
            .catch(function (err) {
                console.error("Could not copy text: ", err);
            });

    })
}

// Add "hover" event to all items
for (const item of cursorItems) {
    item.addEventListener("mouseover", function () {
        // Get text of clicked item
        var text = item.innerText.toLowerCase();

        // Change hover state of item
        this.style.cursor = text;
    })
}