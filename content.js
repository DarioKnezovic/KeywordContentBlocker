function checkKeywords() {
    chrome.storage.sync.get("keywords", ({ keywords }) => {
        if (keywords.length > 0) {
            const elements = document.body.getElementsByTagName("article");
            for (let element of elements) {
                for (let keyword of keywords) {
                    if (element.textContent.includes(keyword)) {
                        element.style.display = "none";
                        break;
                    }
                }
            }
        }
    });
}

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.hasOwnProperty('keywords')) {
        checkKeywords();
    }
});

checkKeywords();
