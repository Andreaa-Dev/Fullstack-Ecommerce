/* eslint-disable @typescript-eslint/no-var-requires */
const data = require('./data.json')
const { MongoClient } = require('mongodb')

require('dotenv').config()

const importData = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()

    const db = client.db('dior')
    const collection = db.collection('products')

    await Promise.all(
      data.map(async (product) => {
        const seedProduct = {
          category: product.product_type,
          name: product.name,
          price: Number(product.price),
          imageLink: product.api_featured_image,
          description: product.description,
          variant: product.product_colors.map((item) => {
            return {
              hexValue: item.hex_value,
              colourName: item.colour_name,
            }
          }),
        }
        console.log('inserting')

        await collection.insertOne(seedProduct).catch((err) => console.log(err))
      })
    )
  } catch (error) {
    console.log(error)
  }
}

importData()
