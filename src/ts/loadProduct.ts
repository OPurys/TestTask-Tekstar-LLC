import type { Product } from '../types';

export async function loadProduct(): Promise<Product> {
  const res = await fetch('/db.json');
  if (!res.ok) throw new Error('Failed to load product data');
  return await res.json();
}
