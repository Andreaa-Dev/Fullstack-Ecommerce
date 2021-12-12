import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import { ProductType } from '../../../../misc/type'

type ProductListPropType = {
  productList: ProductType[] | undefined
}
function ProductList({ productList }: ProductListPropType) {
  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 250, headerAlign: 'center' },
    {
      field: 'category',
      headerName: 'Category',
      width: 150,
      editable: true,
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
      headerAlign: 'center',
    },
    {
      field: 'imageLink',
      headerName: 'Image',
      renderCell: (params) => (
        <img src={params.value} alt={params.value} height="50px" width="30px" />
      ),
      width: 150,
      editable: true,
      headerAlign: 'center',
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 350,
      editable: true,
      headerAlign: 'center',
    },
    {
      field: 'price',
      headerName: 'Price (€)',
      type: 'number',
      width: 110,
      editable: true,
      headerAlign: 'center',
    },
  ]

  const newRow = productList
    ? productList.map((item) => {
        return { ...item, id: item._id }
      })
    : []

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={newRow}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}

export default ProductList
