# Word Meaning Finder Chrome Extension

**Word Meaning Finder** is a simple Chrome extension that allows users to highlight any word on a webpage and instantly get its meaning. The meaning is fetched from an external dictionary API and displayed in the extension’s popup.

## Features

- Highlight a word on any webpage to look up its meaning.
- The meaning of the word is fetched and displayed instantly when you click the extension icon.
- Utilizes the free Dictionary API to retrieve word meanings.
- Simple and lightweight extension.

## Installation

To install and use the Word Meaning Finder extension:

1. Clone or download the repository to your local machine.
    ```bash
    git clone https://github.com/yourusername/word-meaning-finder.git
    ```
2. Open **Google Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top-right corner.
4. Click on the **Load unpacked** button.
5. Select the folder where you downloaded the extension files (`WordMeaningFinder`).
6. The extension will now be installed and ready to use.

## Usage

1. Once the extension is installed, navigate to any webpage.
2. Highlight a word that you want to look up.
3. Click on the Word Meaning Finder extension icon in the toolbar.
4. A popup will appear displaying the meaning of the highlighted word.


## Files

### 1. `manifest.json`

Defines the configuration of the Chrome extension, including permissions and scripts.

### 2. `background.js`

Handles communication between the content script and dictionary API to fetch the meaning of the highlighted word.

### 3. `content.js`

Monitors when text is highlighted on a webpage and sends the selected text to the background script.

### 4. `popup.html`

The HTML file for the extension’s popup that appears when the user clicks the extension icon.

### 5. `popup.js`

Fetches the word meaning from Chrome’s local storage and displays it in the popup.

## API

This extension uses the free [Dictionary API](https://dictionaryapi.dev/) to fetch the meanings of words. You can replace this API with another dictionary API if needed by modifying `background.js`.

## Development

If you want to make changes to the extension:

1. Modify any of the existing files.
2. Reload the unpacked extension in `chrome://extensions/` by clicking on the refresh button next to the extension.
