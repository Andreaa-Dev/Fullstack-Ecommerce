import Order, { OrderDocument } from '../models/Order'
import { NotFoundError } from '../helpers/apiError'

const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save()
}

const findById = async (orderId: string): Promise<OrderDocument> => {
  const foundOrder = await Order.findById(orderId)

  if (!foundOrder) {
    throw new NotFoundError(`order ${orderId} not found`)
  }

  return foundOrder
}

const findAll = async (): Promise<OrderDocument[]> => {
  return Order.find().sort({ name: 1 })
}

export default {
  createOrder,
  findById,
  findAll,
}
