function toggleDarkMode() {
    document.body.classList.toggle('dark');
    var button = document.querySelector('button');
    if (button) {
        button.textContent = document.body.classList.contains('dark')
            ? 'Light Mode'
            : 'Dark Mode';
    }
}
function uploadImage() {
    var fileInput = document.getElementById('upload');
    if (fileInput && fileInput.files && fileInput.files[0]) {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var profilePic = document.getElementById('profile-pic');
            if (profilePic) {
                profilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            }
        };
        reader.readAsDataURL(file); // Converts the file to a base64 string
    }
}
function downloadContent() {
    window.print(); // This opens the print dialog, allowing the user to save as PDF
}
