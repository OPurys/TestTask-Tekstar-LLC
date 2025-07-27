import type { Product } from '../types';

export function renderEbay(data: Product): void {
  const tableBody = document.getElementById('ebay-tbody');

  if (tableBody) {
    for (let i = 0; i < 4; i++) {
      const row = document.createElement('tr');
      row.className = 'modal__ebay-data-row';

      const item = data.ebay_listings[0];

      row.innerHTML = `
      <td class="modal__ebay-data">${item.listing_id}</td>
      <td class="modal__ebay-data">${item.sku}</td>
      <td class="modal__ebay-data">${item.condition_id}</td>
      <td class="modal__ebay-data">${item.product_id}</td>
      <td class="modal__ebay-data">${item.title}</td>
      <td class="modal__ebay-data">${item.price}</td>
      <td class="modal__ebay-data">${item.listing_qty}</td>
      <td class="modal__ebay-data">${item.inventory_qty}</td>
    `;

      tableBody.appendChild(row);
    }
  }
}
