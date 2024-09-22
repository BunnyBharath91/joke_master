# Joke Master Application

## Description

The **Joke Master Application** is a simple web-based app that fetches and displays random jokes. Users can click a button to retrieve a new joke from an external API. The app incorporates a loading spinner that appears while the joke is being fetched.

## Features
- Fetches a random joke from an external API.
- Displays the joke to the user with an intuitive button.
- Shows a loading spinner while the joke is being retrieved.

## Technologies Used
- **HTML** for structuring the web page.
- **CSS** (with Bootstrap 4) for styling and layout.
- **JavaScript** for handling the API requests and DOM manipulation.
- **External API**: The application fetches jokes from `https://apis.ccbp.in/jokes/random`.

## How It Works
1. When the user clicks the "Joke" button, a GET request is made to the jokes API.
2. A loading spinner is displayed while the request is being processed.
3. Once the API response is received, the loading spinner is hidden, and the joke is displayed.
4. Users can click the button again to fetch another joke.

## Installation
1. Clone or download the project files.
2. Open the `index.html` file in a browser to start the application.

## File Structure

- **HTML**: Defines the structure of the application.
- **CSS**: Includes custom styles for the app's background, button, and joke text, as well as integrating Bootstrap 4 for layout and responsiveness.
- **JavaScript**: Handles the logic of fetching the joke from the API and updating the UI dynamically.

## API Endpoint
The application uses the following API to fetch random jokes:

- `https://apis.ccbp.in/jokes/random` 

## Usage
- Simply click the "Joke" button, and a random joke will be fetched and displayed.
- If fetching takes time, the loading spinner will be visible until the joke is retrieved.

## Future Improvements
- Add categories or filters for different types of jokes.
- Allow users to save or share their favorite jokes.
