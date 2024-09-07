document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(['wordMeaning'], function(result) {
      document.getElementById('meaning').innerText = result.wordMeaning || 'Select a word to see the meaning here.';
    });
  });
  