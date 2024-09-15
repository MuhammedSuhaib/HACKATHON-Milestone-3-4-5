function toggleDarkMode(): void {
    document.body.classList.toggle('dark');
    const button = document.querySelector('button') as HTMLButtonElement | null;

    if (button) {
        button.textContent = document.body.classList.contains('dark')
            ? 'Light Mode'
            : 'Dark Mode';
    }
}

function uploadImage(): void {
    const fileInput = document.getElementById('upload') as HTMLInputElement | null;

    if (fileInput && fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const profilePic = document.getElementById('profile-pic') as HTMLImageElement | null;
            if (profilePic) {
                profilePic.src = e.target?.result as string;
            }
        };

        reader.readAsDataURL(file); // Converts the file to a base64 string
    }
}

function downloadContent(): void {
    window.print(); // This opens the print dialog, allowing the user to save as PDF
}
