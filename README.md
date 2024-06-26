# ![Google Chrome Logo](https://www.google.com/chrome/static/images/chrome-logo.svg) KeywordContentBlocker


KeywordContentBlocker is a Chrome extension that blocks specific content on webpages based on user-defined keywords. This extension allows users to input keywords, and any content containing those keywords will be hidden from view, enhancing browsing experience by filtering out unwanted content.

## Features
- Block content on webpages based on user-defined keywords.
- Simple user interface to add and manage keywords.
- Synchronized storage of keywords across devices.

## Installation

1. Clone the repository or download the ZIP file:
    ```sh
    git clone https://github.com/DarioKnezovic/KeywordContentBlocker.git
    ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" by toggling the switch in the top right corner.

4. Click on "Load unpacked" and select the directory where you cloned/downloaded the repository.

## Usage

1. Click on the KeywordContentBlocker icon in the Chrome toolbar to open the popup interface.

2. Enter a keyword in the input field and click the "Add Keyword" button. The keyword will be added to the list.

3. The extension will automatically hide any content on the current webpage that contains the specified keywords.

## Files

- `manifest.json`: Metadata for the Chrome extension, including permissions and content scripts.
- `background.js`: Handles background tasks such as setting up storage.
- `content.js`: Contains the logic for hiding content based on keywords.
- `popup.html`: HTML for the popup interface.
- `popup.js`: JavaScript for handling user interactions in the popup interface.
- `icons/`: Directory containing extension icons.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## Changelog

### [1.1.0] - 2024-06-26
#### Added
- User interface improvements for better user experience.

### [1.0.0] - 2024-06-25
#### Added
- Initial release with basic content blocking features.
 
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by the need to create a cleaner browsing experience by blocking unwanted content.
- Built using the Chrome Extension API.

## Contact

For any questions or suggestions, please open an issue or contact [me](mailto:contact@dario-tech.com).
