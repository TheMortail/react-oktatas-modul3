import { RootState } from '../rootReducer';
import { ProductSelector } from './types';

export const productsSelector = (state: RootState): ProductSelector => ({
  products: state.productReducer.products,
  loading: state.productReducer.loading,
});
