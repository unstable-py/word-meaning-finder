chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "highlightedText") {
      let word = request.text;
      
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
          chrome.storage.local.set({ wordMeaning: data[0].meanings[0].definitions[0].definition });
        })
        .catch(error => {
          console.error("Error fetching meaning:", error);
          chrome.storage.local.set({ wordMeaning: "Meaning not found." });
        });
    }
  });
  