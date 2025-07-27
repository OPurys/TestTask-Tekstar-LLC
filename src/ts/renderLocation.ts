import type { Product } from '../types';

export function renderLocation(data: Product): void {
  const tableBody = document.getElementById('location-tbody');

  if (tableBody) {
    for (let i = 0; i < 4; i++) {
      const row = document.createElement('tr');
      row.className = 'modal__location-data-row';

      const item = data.location[0];

      row.innerHTML = `
      <td class="modal__location-data">${item.id}</td>
      <td class="modal__location-data">${item.brand}</td>
      <td class="modal__location-data">${item.category}</td>
      <td class="modal__location-data">${item.device_pn}</td>
      <td class="modal__location-data">${item.qty}</td>
      <td class="modal__location-data">${item.condition}</td>
      <td class="modal__location-data">${item.edit_user}</td>
      <td class="modal__location-data">
        ${item.notes}
        <button class="modal__location-btn" type="button">
            <svg class="modal__icon" width="25" height="25">
                <use href="/svgsprite.svg#icon-more"></use>
            <svg/>
        </button>
      </td>
    `;

      tableBody.appendChild(row);
    }
  }
}
