import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(gallery) {
  return gallery
    .map((photo) => {
      return `
			<a class="gallery__item" href="${photo.original}">
  <img class="gallery__image" src="${photo.preview}" alt="${photo.description}" />
</a>
		`;
    })
    .join("");
}

galleryList.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox(".gallery a", {
  alertError: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 300,
  animationSpeed: 150,
  fadeSpeed: 150,
});
