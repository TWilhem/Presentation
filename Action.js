document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.resize-image');
    const links = [
        'https://twilhem.github.io/Presentation/Chess/echecs.html',
        'https://twilhem.github.io/Presentation/Chess/echecs.html',
        'https://twilhem.github.io/Presentation/Chess/echecs.html'
    ];

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            window.location.href = links[index];
        });
    });
});