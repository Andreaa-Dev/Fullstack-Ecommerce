import React, { useEffect } from 'react'
import axios from 'axios'

function ProductPage() {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/product')
      .then((res: any) => {
        const data = res.data
        console.log(data, 'data')
      })
      .catch((error) => console.log(error))
  }, [])

  return <div></div>
}

export default ProductPage
