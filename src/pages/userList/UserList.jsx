import React,{useState} from "react";
import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "./../../dummyData";
import { Link } from "react-router-dom";



const UserList = () => {

  const [data, setData] = useState(userRows);

  const handleClick=(id)=>{
    setData(data.filter(item=>item.id !== id));
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "avatar",
      headerName: "Avatar",
      type: "image",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={'/user/'+params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <Link to="">
            <DeleteOutline className="userListDelete" onClick={()=>handleClick(params.row.id)} />
          </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
