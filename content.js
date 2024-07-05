function toggleVisibility(keywords, show = true) {
    const elements = document.body.getElementsByTagName("article");

    for (let element of elements) {
        for (let keyword of keywords) {
            if (element.textContent.toLowerCase().includes(keyword)) {
                element.style.display = show ? "" : "none";
                break;
            }
        }
    }
}

function checkKeywords() {
    chrome.storage.sync.get("keywords", ({ keywords }) => {
        if (keywords.length > 0) {
            toggleVisibility(keywords, false);
        }
    });
}

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.hasOwnProperty('keywords')) {
        checkKeywords();
    }
});

chrome.runtime.onMessage.addListener(
    function(request) {
        if (request.keyword) {
            toggleVisibility([request.keyword]);
        }
    }
);

checkKeywords();
