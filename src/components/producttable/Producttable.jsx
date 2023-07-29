import "./producttable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../producttablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Producttable = () => {
  const [product, setProduct] = useState(productRows);

  const handleDelete = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="producttable">
      <div className="producttableTitle">
        Add New Product
        <Link
          to="/products/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={product}
        columns={productColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSi
        zeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Producttable;
