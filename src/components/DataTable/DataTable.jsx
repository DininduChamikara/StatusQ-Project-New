import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "promoterId",
    headerName: "Promoter ID",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "educationLevel",
    headerName: "Educational Level",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "ageLevel",
    headerName: "Age Level",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "region",
    headerName: "Region",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "language",
    headerName: "Language",
    width: 160,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 160,
    headerAlign: "center",
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    promoterId: 2,
    educationLevel: "OL",
    ageLevel: "15-18",
    region: "Western",
    language: "Sinhala",
    gender: "male",
  },
  {
    id: 2,
    promoterId: 2,
    educationLevel: "OL",
    ageLevel: "15-18",
    region: "Western",
    language: "Sinhala",
    gender: "male",
  },
  {
    id: 3,
    promoterId: 2,
    educationLevel: "OL",
    ageLevel: "15-18",
    region: "Western",
    language: "Sinhala",
    gender: "male",
  },
  {
    id: 4,
    promoterId: 2,
    educationLevel: "OL",
    ageLevel: "15-18",
    region: "Western",
    language: "Sinhala",
    gender: "male",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
