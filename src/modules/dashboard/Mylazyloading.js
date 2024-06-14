import React, { Fragment } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID Code', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  ];
  






function Mylazyloading() {
    return (

        <Fragment>

            <div>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5,7, 10,15]}
                    checkboxSelection
                />
            </div>



            <div>MylazyloadingLazy loading is a technique used in computer programming, especially w
                eb design and web development, to defer initialization of an object until it is needed. It can
                contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is
                a technique used in computer programming, especially web design and web development, to defer
                initialization of an object until it is needed. It can contribute to efficiency in the program's
                operation if properly and appropriatelyLazy loading is a technique used in computer programming,
                especially web design and web development, to defer initialization of an object until it is needed.
                eb design and web development, to defer initialization of an object until it is needed. It can
                contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is
                a technique used in computer programming, especially web design and web development, to defer
                initialization of an object until it is needed. It can contribute to efficiency in the program's
                operation if properly and appropriatelyLazy loading is a technique used in computer programming,
                especially web design and web development, to defer initialization of an object until it is needed.
                eb design and web development, to defer initialization of an object until it is needed. It can
                contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is
                a technique used in computer programming, especially web design and web development, to defer
                initialization of an object until it is needed. It can contribute to efficiency in the program's
                operation if properly and appropriatelyLazy loading is a technique used in computer programming,
                especially web design and web development, to defer initialization of an object until it is needed.
                eb design and web development, to defer initialization of an object until it is needed. It can
                contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is
                a technique used in computer programming, especially web design and web development, to defer
                initialization of an object until it is needed. It can contribute to efficiency in the program's
                operation if properly and appropriatelyLazy loading is a technique used in computer programming,
                especially web design and web development, to defer initialization of an object until it is needed.
                eb design and web development, to defer initialization of an object until it is needed. It can
                contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is
                a technique used in computer programming, especially web design and web development, to defer
                initialization of an object until it is needed. It can contribute to efficiency in the program's
                operation if properly and appropriatelyLazy loading is a technique used in computer programming,
                especially web design and web development, to defer initialization of an object until it is needed.
                eb design and web development, to defer initialization of an object until it is needed. It can
                contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is
                a technique used in computer programming, especially web design and web development, to defer
                initialization of an object until it is needed. It can contribute to efficiency in the program's
                operation if properly and appropriatelyLazy loading is a technique used in computer programming,
                especially web design and web development, to defer initialization of an object until it is needed.
                eb design and web development, to defer initialization of an object until it is needed. It can
                contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is
                a technique used in computer programming, especially web design and web development, to defer
                initialization of an object until it is needed. It can contribute to efficiency in the program's
                operation if properly and appropriatelyLazy loading is a technique used in computer programming,
                especially web design and web development, to defer initialization of an object until it is needed.
                eb design and web development, to defer initialization of an object until it is needed. It can
                contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is
                a technique used in computer programming, especially web design and web development, to defer
                initialization of an object until it is needed. It can contribute to efficiency in the program's
                operation if properly and appropriatelyLazy loading is a technique used in computer programming,
                especially web design and web development, to defer initialization of an object until it is needed.
                It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed. It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed. It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed. It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed. It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed. It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed. It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed. It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed. It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed. It can contribute to efficiency in the program's operation if properly and appropriatelyLazy loading is a technique used in computer programming, especially web design and web development, to defer initialization of an object until it is needed.
                It can contribute to efficiency in the program's operation if properly and appropriately</div>
        </Fragment>
    )
}

export default Mylazyloading