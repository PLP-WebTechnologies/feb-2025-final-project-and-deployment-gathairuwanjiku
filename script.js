<<<<<<< HEAD
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const feedback = document.getElementById("form-message");

  if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
    feedback.textContent = "Please fill out all fields.";
    feedback.style.color = "red";
  } else if (!email.value.includes("@")) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thank you for your message!";
    feedback.style.color = "green";
    // Optionally clear the form
    name.value = "";
    email.value = "";
    message.value = "";
  }
});
=======
// Travel recommendation dataset
const travelRecommendations = {
    beach: ["Bali, Indonesia", "Maldives", "Seychelles"],
    mountain: ["Swiss Alps", "Rocky Mountains", "Himalayas"],
    culture: ["Kyoto, Japan", "Rome, Italy", "Cairo, Egypt"]
};

// AI Recommendation Feature
document.getElementById('ai-recommendation-btn').addEventListener('click', () => {
    const preferences = JSON.parse(localStorage.getItem('travelPrefs')) || {};
    let recommendation;
    
    if (preferences.favorite) {
        const options = travelRecommendations[preferences.favorite];
        recommendation = options[Math.floor(Math.random() * options.length)];
    } else {
        // Fallback if no preferences saved
        const allDestinations = Object.values(travelRecommendations).flat();
        recommendation = allDestinations[Math.floor(Math.random() * allDestinations.length)];
    }
    
    alert(AI Recommends: ${recommendation}! ✈);
});

// Preference Saving Function
function savePreferences() {
    const favorite = prompt("What's your favorite travel type? (beach/mountain/culture)").toLowerCase();
    
    if (favorite && ['beach', 'mountain', 'culture'].includes(favorite)) {
        localStorage.setItem('travelPrefs', JSON.stringify({ favorite }));
        alert("Preferences saved! Try getting a recommendation now.");
    } else {
        alert("Invalid input - please enter beach, mountain, or culture");
    }
}

// Optional: Auto dark/light mode toggle
const modeToggle = document.createElement('button');
modeToggle.textContent = 'Toggle Dark Mode';
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
document.body.prepend(modeToggle);
>>>>>>> 9270dfad06ad827499acbcefa4bc890364e3c5b0
