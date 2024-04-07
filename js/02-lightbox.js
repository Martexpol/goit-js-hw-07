import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

// Stworzenie galerii
galleryItems.forEach(item => {
    const listItem = document.createElement('li');

    const link = document.createElement('a');
    link.setAttribute('href', item.original);
    link.setAttribute('data-lightbox', 'gallery');
    link.classList.add('gallery__item');

    const image = document.createElement('img');
    image.setAttribute('src', item.preview);
    image.setAttribute('alt', item.description);
    image.classList.add('gallery__image');

    link.appendChild(image);
    listItem.appendChild(link)
    galleryContainer.appendChild(listItem);
});

galleryContainer.addEventListener('click', function(event) {
    event.preventDefault();

    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionSelector: 'img',
        captionPosition: 'bottom',
        captionDelay: 250,
        });
 });


