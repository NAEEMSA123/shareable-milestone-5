// Selecting elements from DOM
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
resumeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract form values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('exprience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate the resume content
    resumeDisplay.innerHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email adress:</strong> ${email}</p>
        <p><strong>Phone number:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Show shareable link section
    shareableLinkContainer.style.display = 'block';

    // Generate unique URL for sharing (placeholder link in this case)
    const uniqueLink = `https://resume-builder.com/${username}`;
    shareableLink.href = uniqueLink;
    shareableLink.textContent = uniqueLink;
});

// Handle PDF download
downloadButton.addEventListener('click', function() {
    // Convert the resume content to PDF (for simplicity, using window.print)
    window.print(); // Alternatively, use a library like jsPDF for better PDF generation
});
