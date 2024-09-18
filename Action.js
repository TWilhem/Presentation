document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.resize-image');
    const links = [
        '',
        '',
        ''
    ];

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            window.location.href = links[index];
        });
    });
});