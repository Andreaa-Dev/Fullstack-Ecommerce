import Product, { ProductDocument } from '../models/Product'
import { NotFoundError } from '../helpers/apiError'

const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save()
}

const findById = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

//publishedYear: -1
const findAll = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ name: 1 })
}

const update = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update, {
    new: true,
  })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

const deleteProduct = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = Product.findByIdAndDelete(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

export default {
  createProduct,
  findById,
  findAll,
  update,
  deleteProduct,
}
