document.getElementById('btn').addEventListener('click', function() {
    const birthdayInput = document.getElementById('birthday').value;
    
    // Check if the input is empty
    if (!birthdayInput) {
        alert("Enter your birth date");
        return; // Exit the function if the input is empty
    }

    const birthday = new Date(birthdayInput);
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();

    // Check if birthday has occurred this year
    if (today < new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())) {
        age--;
    }

    const resultElement = document.getElementById('result');
    
    // Fade out the result text
    resultElement.style.opacity = 0;
    
    // Update the text and fade it back in
    setTimeout(function() {
        resultElement.textContent = `Your age is ${age}`;
        resultElement.style.opacity = 1;
    }, 300); // Delay of 0.3s to allow the fade-out effect
});
