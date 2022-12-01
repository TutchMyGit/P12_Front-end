import { useEffect, useState, useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./Columns";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import { useSelector } from "react-redux";
import { employeesDataMock } from '../data/employees'

function EmployeeTable() {
  const [data, setData] = useState(employeesDataMock);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // const employeesData = useSelector((state) => state.employee.employeesData)

  // useEffect(() => {
  //   const setupData = async () => {
  //     await setData(employeesData);
  //   };
  //   setupData()
  //   .catch(console.error)
  // }, [employeesData]);

  const columns = useMemo(() => COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, usePagination);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {
        rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <TablePaginationUnstyled
            rowsPerPageOptions={[10, 25, 50, 100, { label: "All", value: -1 }]}
            count={rows.length}
            colSpan={3}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            slotProps={{
              select: {
                "aria-label": "rows per page",
              },
              actions: {
                showFirstButton: true,
                showLastButton: true,
              },
            }}
          />
        </tr>
      </tfoot>
    </table>
  );
}

export default EmployeeTable;
