import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');


// Stworzenie galerii
galleryItems.forEach(item => {
    const listItem = document.createElement('div');
    listItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.setAttribute('href', item.original);
    link.setAttribute('data-lightbox', 'gallery');
    link.classList.add('gallery__link');

    const image = document.createElement('img');
    image.setAttribute('src', item.preview);
    image.setAttribute('alt', item.description);
    image.setAttribute('data-source', item.original)
    image.classList.add('gallery__image');

    link.appendChild(image);
    listItem.appendChild(link);
    galleryContainer.appendChild(listItem);
});

galleryContainer.addEventListener('click', function(event) {
    event.preventDefault();
    const originalImageURL = event.target.getAttribute('data-source');

    const instance = basicLightbox.create(`<img src="${originalImageURL}" width="800" height="600">`);
    instance.show();

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            instance.close();
        }
 })

});