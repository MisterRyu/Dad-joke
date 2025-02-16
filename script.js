// Get references to the elements
const jokeElement = document.getElementById('joke');
const button = document.getElementById('generateJokeBtn');

// Function to fetch a random joke from the API
const fetchJoke = async () => {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        jokeElement.textContent = data.joke;  // Set the joke text
		// Inside the fetchJoke function, after setting the joke text:
jokeElement.textContent = data.joke;
jokeElement.classList.remove('visible');  // Reset visibility before fading in
setTimeout(() => jokeElement.classList.add('visible'), 50); // Add class to fade in
    } catch (error) {
        jokeElement.textContent = 'Oops! Something went wrong. Try again later.';
    }
};

// Add event listener to the button
button.addEventListener('click', fetchJoke);
