import request from 'supertest'

import app from '../../src/app'
import connect, { MongodHelper } from '../db-helper'
import { ProductDocument } from './../../src/models/Product'

const nonExistingProductId = '5e57b77b5744fa0b461c7906'

async function createProduct(override?: Partial<ProductDocument>) {
  let product = {
    category: 'lipstick',
    name: 'Dior testing',
    price: 123,
    imageLink:
      ' https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw37dfa285/assets/Y0133009/Y0133009_C013300976_E01_GHC.jpg?sw=460&sh=498&sm=fit&imwidth=460',
    description: 'New product for testing',
  }

  if (override) {
    product = { ...product, ...override }
  }
  return await request(app).post('/api/v1/product').send(product)
}
