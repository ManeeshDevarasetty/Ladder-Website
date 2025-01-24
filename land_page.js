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
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu-toggle').classList.toggle('open');
});
const districtMandalMap = {
    "district1": ["Chintapalle", "Chintur", "Etapaka", "Kunavaram","Vararamachandrapuram","Ananthagiri","Araku Valley","Dumbriguda","G. Madugula","Gudem Kotha Veedhi","Hukumpeta","Koyyuru","Paderu","Peda Bayalu","Addateegala","Devipatnam","Gangavaram","Maredumilli","Munchingi Puttu","Rajavommangi","Rampachodavaram","Y. Ramavaram",],
    "district2": ["Anakapalle", "Atchutapuram", "Butchayyapeta", "Chodavaram","Devarapalli","Elamanchili","K.Kotapadu","Kasimkota","Munagapaka","Paravada","Rambilli","Sabbavaram","Cheedikada","Golugonda","Kotauratla","Madugula","Atchutapuram","Atchutapuram","Atchutapuram","Atchutapuram","Atchutapuram","Atchutapuram",],
    "district3": ["Mandal 3A", "Mandal 3B", "Mandal 3C"],
    "district4": ["Mandal 4A", "Mandal 4B", "Mandal 4C"]
};

// HTML elements
const districtSelect = document.getElementById('district');
const mandalSelect = document.getElementById('mandal');

// Event listener for district selection
districtSelect.addEventListener('change', function () {
    const selectedDistrict = this.value;

    // Clear existing options in Mandal dropdown
    mandalSelect.innerHTML = '<option value="" disabled selected>Select Mandal</option>';

    // Enable Mandal dropdown if a valid district is selected
    if (selectedDistrict) {
        mandalSelect.disabled = false;

        // Populate Mandal dropdown with options for the selected district
        const mandals = districtMandalMap[selectedDistrict] || [];
        mandals.forEach(mandal => {
            const option = document.createElement('option');
            option.value = mandal;
            option.textContent = mandal;
            mandalSelect.appendChild(option);
        });
    } else {
        mandalSelect.disabled = true;
    }
});