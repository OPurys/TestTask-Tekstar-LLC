import type { Product } from '../types';

export function renderSame(data: Product): void {
  const tableBody = document.getElementById('same-tbody');
  if (!tableBody) return;

  const item = data.same_products[0];

  const tableRow = `
      <tr class="modal__same-data-row">
          <td class="modal__same-data">${item.original_id}</td>
          <td class="modal__same-data">${item.same_id}</td>
          <td class="modal__same-data">
          ${item.fk_edit_employee}
          <button class="modal__same-btn" type="button">
              <svg class="modal__icon" width="25" height="25">
                <use href="/svgsprite.svg#icon-more"></use>
              <svg/>
          <button/>
          </td>
      </tr>
    `;

  tableBody.insertAdjacentHTML('beforeend', tableRow);
}
