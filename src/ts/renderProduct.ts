import type { Product } from '../types';
import { buttonsIconMap, labelMap, linksIconMap } from './constants';

export function renderProduct(data: Product): void {
  const container = document.getElementById('products');
  if (!container) return;

  let textListHTML = '<ul class="modal__products-list">';
  let imageListHTML = '<ul class="modal__products-images-list">';

  for (const key in labelMap) {
    const label = labelMap[key];
    const typedKey = key as keyof Product;
    const value = data[typedKey];

    if (typeof value === 'string' && value.endsWith('.jpg')) {
      imageListHTML += `
        <li class="modal__products-image-item">
          <p class="modal__products-label">${label}</p>
          <img class="modal__products-image" src="${value}" alt="${key}" width="225" height="225" />
        </li>
      `;
    } else if (key === buttonsIconMap[key]) {
      textListHTML += `
        <li class="modal__products-item">
          <p class="modal__products-label">${label}</p>
          <p class="modal__products-value">${value}
            <button class="modal__products-btn" type="button">
              <svg class="modal__icon" width="25" height="25">
                <use href="/svgsprite.svg#icon-more"></use>
              <svg/>
            <button/>
          </p>
        </li>
      `;
    } else if (key === linksIconMap[key]) {
      textListHTML += `
        <li class="modal__products-item">
          <p class="modal__products-label">${label}</p>
          <p class="modal__products-value">${value}
            <a class="modal__products-link" href="${value}">
              <svg class="modal__icon" width="25" height="25">
                <use href="/svgsprite.svg#icon-link"></use>
              <svg/>
            </a>
          </p>
        </li>
      `;
    } else {
      const displayValue =
        value === 0 ? '0' : value === '' ? '--------------------' : value;

      textListHTML += `
        <li class="modal__products-item">
          <p class="modal__products-label">${label}</p>
          <p class="modal__products-value">${displayValue}</p>
        </li>
      `;
    }
  }

  textListHTML += '</ul>';
  imageListHTML += '</ul>';

  container.insertAdjacentHTML('beforeend', textListHTML + imageListHTML);
}
