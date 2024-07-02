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

function showContentBasedOnKeyword(keyword) {
    (async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, { keyword });
        // do something with response here, not outside the function
        console.log(response);
    })();
    const elements = document.body.getElementsByTagName("article");
    console.log(elements);
    for (let element of elements) {
        if (element.textContent.toLowerCase().includes(keyword)) {
            element.style.display = "";
            break;
        }
    }
}

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
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const itemList = document.querySelector('.item-list');

    displayKeywords();

    itemList.addEventListener('click', (event) => {
        if (event.target.closest('.delete-icon')) {
            const icon = event.target.closest('.delete-icon');
            const id = icon.getAttribute('data-id');
            chrome.storage.sync.get('keywords', ({ keywords }) => {
                if (keywords && id !== null && keywords[id] !== undefined) {
                    console.log('Keyword:', keywords[id]);
                    showContentBasedOnKeyword(keywords[id]);
                    keywords.splice(id, 1);
                    chrome.storage.sync.set({ keywords }, () => {
                        displayKeywords();
                    });
                }
            });
        }
    });
});
