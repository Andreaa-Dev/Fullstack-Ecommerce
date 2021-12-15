import request from 'supertest'

import app from '../../src/app'
import connect, { MongodHelper } from '../db-helper'
import { ProductDocument } from '../../src/models/Product'

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

// test suite
describe('movie controller', () => {
  //connect database
  let mongodHelper: MongodHelper

  //Jest: set up and tear down. before all (small test)
  beforeAll(async () => {
    mongodHelper = await connect()
  })
  // clear database
  afterEach(async () => {
    await mongodHelper.clearDatabase()
  })

  afterAll(async () => {
    await mongodHelper.closeDatabase()
  })

  //small test
  it('should create a movie', async () => {
    const res = await createProduct()
    //assertion: check
    //toBe: matcher. toBe (==, no type), toEqual(===, type)
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('_id')
    expect(res.body.name).toBe('Dior testing')
  })

  it('should not create a product with wrong data', async () => {
    const res = await request(app).post('api/v1/product').send({
      category: 'lipstick',
      name: 'Dior',
      imageLink:
        'https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwcd8d1ab0/assets/Y0996265/Y0996265_C025400999_E01_GHC.jpg?sw=715&sh=773&sm=fit',
    })
  })
})
