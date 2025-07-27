import '../styles/main.scss';
import { loadProduct } from './loadProduct';
import { renderProduct } from './renderProduct';

loadProduct()
  .then(renderProduct)
  .catch(err => {
    console.error('Error loading product:', err);
  });
