// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const marked = galleryItems.map((image)=> `
    <a class = "gallery__item" href = '${image.original}'>
        <img  class = "gallery__image",
        src = '${image.preview}', 
        alt = '${image.description}', 
</a>`).join(""); 
const itemsContainer = document.querySelector(".gallery"); 
itemsContainer.insertAdjacentHTML('afterBegin', marked);

//making modal window

const lightbox = new SimpleLightbox('.gallery__item',{captionsData: 'alt', captionDelay: '250',});
