function toggleProblem(checkbox) {
    const row = checkbox.closest('tr'); // Get the parent row of the checkbox
    const unsolvedTable = document.getElementById('unsolved-table').querySelector('tbody');
    const solvedTable = document.getElementById('solved-table').querySelector('tbody');
    
    if (checkbox.checked) {
        // Move to Solved
        solvedTable.appendChild(row);
    } else {
        // Move to Unsolved
        unsolvedTable.appendChild(row);
    }
}
// Array to store unsolved problems
const unsolvedProblems = [
    { date: "2024-12-01", village: "Village A", risk: "High", description: "Road repair needed" },
    { date: "2024-12-05", village: "Village B", risk: "Medium", description: "Bridge repair needed" },
    { date: "2024-12-10", village: "Village C", risk: "Low", description: "Water supply issue" },
    { date: "2024-12-15", village: "Village D", risk: "Critical", description: "School roof damage" }
];

// Update testimonial cards with the first 4 unsolved problems
function updateTestimonialCards() {
    // Loop through the first four problems
    unsolvedProblems.forEach((problem, index) => {
        if (index < 4) {
            // Update testimonial card content dynamically
            document.getElementById(`problem-${index + 1}-name`).textContent = problem.description;
            document.getElementById(`problem-${index + 1}-date`).textContent = problem.date;
            document.getElementById(`problem-${index + 1}-village`).textContent = problem.village;
            document.getElementById(`problem-${index + 1}-risk`).textContent = problem.risk;
        }
    });
}

// Function to handle the checkbox change event
function toggleProblem(checkbox) {
    const row = checkbox.closest('tr');
    const unsolvedTable = document.getElementById('unsolved-table').querySelector('tbody');
    const solvedTable = document.getElementById('solved-table')?.querySelector('tbody') || document.createElement('tbody');
    
    if (checkbox.checked) {
        // Move to Solved
        solvedTable.appendChild(row);
        unsolvedProblems.shift();  // Remove the first unsolved problem
        updateTestimonialCards();  // Update the testimonial cards
    } else {
        // Move to Unsolved
        unsolvedTable.appendChild(row);
    }
}

// Initialize the page
updateTestimonialCards(); // Initialize testimonial cards on page load

// Populate the unsolved problems in the checklist section
document.addEventListener("DOMContentLoaded", () => {
    const unsolvedTableBody = document.getElementById("unsolved-table").querySelector("tbody");
    unsolvedProblems.forEach(problem => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input type="checkbox" onchange="toggleProblem(this)"></td>
            <td>
                <select>
                    <option value="1">Danger</option>
                    <option value="2">Critical</option>
                    <option value="3">High</option>
                    <option value="4">Medium</option>
                    <option value="5">Low</option>
                </select>
            </td>
            <td>${problem.date}</td>
            <td>${problem.village}</td>
            <td>${problem.risk}</td>
            <td>${problem.description}</td>
        `;
        unsolvedTableBody.appendChild(row);
    });
});
// Function to check if the user is logged in
function checkLoginStatus() {
    const userLoggedIn = localStorage.getItem('userLoggedIn');

    if (userLoggedIn === 'true') {
        document.getElementById('signup-link').classList.add('hidden');
        document.getElementById('analysis-link').classList.remove('hidden');
        document.getElementById('account-link').classList.remove('hidden');
        document.getElementById('logout-link').classList.remove('hidden');
        document.getElementById('form-link').classList.remove('hidden');
    } else {
        document.getElementById('signup-link').classList.remove('hidden');
        document.getElementById('analysis-link').classList.add('hidden');
        document.getElementById('account-link').classList.add('hidden');
        document.getElementById('logout-link').classList.add('hidden');
        document.getElementById('form-link').classList.add('hidden');
    }
}

// Call the checkLoginStatus function on page load
window.onload = checkLoginStatus;

// Function to handle logout
function logout() {
    localStorage.removeItem('userLoggedIn');
    checkLoginStatus();  // Update navbar after logout
}

// Toggle hamburger menu visibility
document.querySelector('.menuicon').addEventListener('click', function() {
    document.querySelector('.menutoggle').classList.toggle('open');
});