// Selecting elements from DOM
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLink = document.getElementById('shareable-link');
var downloadButton = document.getElementById('download-pdf');
// Handle form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Extract form values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('exprience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content
    resumeDisplay.innerHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Username:</strong> ").concat(username, "</p>\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email adress:</strong> ").concat(email, "</p>\n        <p><strong>Phone number:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Show shareable link section
    shareableLinkContainer.style.display = 'block';
    // Generate unique URL for sharing (placeholder link in this case)
    var uniqueLink = "https://resume-builder.com/".concat(username);
    shareableLink.href = uniqueLink;
    shareableLink.textContent = uniqueLink;
});
// Handle PDF download
downloadButton.addEventListener('click', function () {
    // Convert the resume content to PDF (for simplicity, using window.print)
    window.print(); // Alternatively, use a library like jsPDF for better PDF generation
});
