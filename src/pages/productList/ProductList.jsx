import React,{useState} from 'react';
import './productList.css';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "./../../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleClick=(id)=>{
        setData(data.filter(item=>item.id !== id));
      }

      const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 150,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="avatar" />
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "stock",
          headerName: "Stock",
          width: 150,
        },
        {
          field: "status",
          headerName: "Status",
          width: 200,
        },
        {
          field: "price",
          headerName: "Price",
          sortable: false,
          width: 120,
        },{
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <div className="productActions">
              <Link to={'/product/'+params.row.id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <Link to="">
                <DeleteOutline className="productListDelete" onClick={()=>handleClick(params.row.id)} />
              </Link>
              </div>
            );
          },
        },
      ];

    return (
        <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
            
        </div>
    )
}

export default ProductList
