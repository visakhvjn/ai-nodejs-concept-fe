# Node Concepts Daily

A simple web application that displays a new Node.js concept daily. The concepts are fetched dynamically from an API and displayed in a styled interface.

## Features

- Fetches Node.js concepts dynamically from an API.
- Displays the concepts in a clean and professional UI.
- Syntax highlighting for JavaScript code snippets.
- Responsive design for better usability on different devices.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd node-concepts
   ```

2. Install dependencies (if any):

   ```bash
   npm install
   ```

3. Start the server (if applicable):

   ```bash
   node server.js
   ```

4. Open the `index.html` file in your browser or access the hosted version.

## API Endpoint

The application fetches concepts from the following API endpoint:

```
https://ai-nodejs-concept-be.onrender.com/concept
```

## File Structure

```
node-concepts/
├── index.html       # Main HTML file
├── index.js         # JavaScript for fetching and displaying concepts
├── README.md        # Project documentation
└── favicon.png      # Favicon for the website
```

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling the interface.
- **JavaScript**: For dynamic content fetching and rendering.

## How It Works

1. The `index.js` script fetches a Node.js concept from the API.
2. The fetched content is displayed inside the `#conceptBox` element in `index.html`.
3. If the content includes JavaScript code, it is formatted and highlighted for better readability.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
