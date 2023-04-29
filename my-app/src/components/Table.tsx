import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'itemName', headerName: '商品名', width: 130 },
  { field: 'points', headerName: '希望ポイント', width: 130 },
  { field: 'user', headerName: '申請者', width: 130 },
];

const rows = [
  { id: 1, itemName: 'パソコン', points: 50, user: 'おのかん' },
  { id: 2, itemName: 'ディスプレイ', points: 50, user: 'おのかん' },
  { id: 3, itemName: 'マウス', points: 50, user: 'おのかん' },
];

const Table = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 5 }}
        checkboxSelection
      />
    </div>
    );
  }

export default Table;