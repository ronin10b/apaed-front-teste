import { ICategory } from './category.model';

export interface IProductBazar {
  id?: string;
  name?: string;
  brand?: string;
  ncm_id?: string;
  ncm?: ICategory;
  active?: boolean;
  created_at?: string;
  updated_at?: string;
  product?: IProductBazar;
  count?: number;
  valor_product?: number;
  price?: number;
}
