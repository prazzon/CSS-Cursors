// Select all "cursor-item" class elements
const cursorItems = document.getElementsByClassName("cursor-item");

var itemText = "";

// Add "click" event to all items
for (const item of cursorItems) {
    item.addEventListener("click", function () {
        // Update text of clicked item
        itemText = item.innerText !== "Copied!" ? item.innerText : itemText;

        // Copy code text to clipboard
        navigator.clipboard.writeText(`cursor: ${itemText.toLowerCase()};`)
            .then(function () {
                // Change item's text to "Copied" for 2 seconds
                var text = itemText;
                item.innerText = "Copied!";
                item.classList.add("copied");

                setTimeout(function () {
                    item.innerText = text;
                    item.classList.remove("copied");
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