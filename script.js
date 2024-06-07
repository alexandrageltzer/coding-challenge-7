U2863-9518

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Validate form fields
    if (!name || !rating || !comments) {
        alert('Please fill out all fields.');
        return;
    }

    // Create feedback elements
    const feedbackDiv = document.getElementById('feedbackDisplay');
    const feedbackItem = document.createElement('div');
    feedbackItem.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Comments:</strong> ${comments}</p>
        <hr>
    `;
    
    // Append feedback to display area
    feedbackDiv.appendChild(feedbackItem);

    // Clear form fields
    document.getElementById('feedbackForm').reset();
});
