import { galleryItems } from './gallery-items.js';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery");

function createGallery() {
    
    const createImg = galleryItems.map(({ original, preview, description }) =>
        `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a></li>`).join("")

    gallery.insertAdjacentHTML("afterbegin", createImg);
    new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" })

   
}


document.addEventListener("DOMContentLoaded", createGallery)

