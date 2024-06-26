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
        for (let index = 0; index < keywords.length; index++) {
            const li = document.createElement("li");
            li.className = "item";
            li.innerHTML = `${keywords[index]} <span class="delete-icon" data-id="${index}"><i class="fas fa-trash"></i></span>`;
            keywordList.appendChild(li);
        }

        const itemList = document.querySelector('.item-list');

        itemList.addEventListener('click', (event) => {
            if (event.target.closest('.delete-icon')) {
                const icon = event.target.closest('.delete-icon');
                const id = icon.getAttribute('data-id');
                keywords.splice(id, 1);
                chrome.storage.sync.set({ keywords }, () => {
                    displayKeywords();
                });
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    displayKeywords();
});
