async function whereAmI(lat, lng) {
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;

    try {
        const response = await fetch(url);
        
        // Check for rate limiting
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        
        // Check if response contains valid data
        if (data.error) {
            throw new Error(data.error.description);
        }

        const city = data.city || "City not found";
        const country = data.country || "Country not found";

        // Log the location message
        const message = `You are in ${city}, ${country}`;
        console.log(message);
        document.getElementById('output').innerText = message;

    } catch (error) {
        console.error(error);
        document.getElementById('output').innerText = `Error: ${error.message}. Please try again later.`;
    }
}