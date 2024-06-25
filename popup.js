document.getElementById("addKeyword").addEventListener("click", () => {
    const keyword = document.getElementById("keyword").value;
    if (keyword) {
        chrome.storage.sync.get("keywords", ({ keywords }) => {
            keywords.push(keyword);
            chrome.storage.sync.set({ keywords }, () => {
                displayKeywords();
            });
        });
    }
    document.getElementById("keyword").value = "";
});

function displayKeywords() {
    chrome.storage.sync.get("keywords", ({ keywords }) => {
        const keywordList = document.getElementById("keywordList");
        keywordList.innerHTML = "";
        for (let keyword of keywords) {
            const li = document.createElement("li");
            li.textContent = keyword;
            keywordList.appendChild(li);
        }
    });
}

document.addEventListener("DOMContentLoaded", displayKeywords);
