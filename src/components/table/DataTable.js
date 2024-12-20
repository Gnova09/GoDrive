
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default  function DataTable({column, row}) {
 

  return (
    <div style={{ height: 400, width: '100%', color: 'black' }} >
      <DataGrid
        rows={row}
        columns={column}
        className=''
        
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
  );
}