/* eslint-disable */

"use client";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, ChevronsUpDown, MoveLeft, MoveRight } from "lucide-react";
import { ReactNode, useState } from "react";
import { Button } from "./button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableClassName?: string;
  headerClassName?: string;
  header?: ReactNode | ((table: ReturnType<typeof useReactTable<TData>>) => ReactNode);
  footer?: ReactNode | ((table: ReturnType<typeof useReactTable<TData>>) => ReactNode);
  rowColor?: string;
  dataRowsPerPage?: number;
  className?: string;
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  tableClassName,
  headerClassName,
  header,
  footer,
  rowColor,
  dataRowsPerPage,
  className,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: dataRowsPerPage ?? 10, //default page size
  });
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
  });

  // const totalData = data.length

  const onPaginationChange = (page: number) => {
    table.setPageIndex(page - 1);
  };

  const onSelectChange = (value = 0) => {
    table.setPageSize(Number(value));
  };

  return (
    <div className={cn("rounded-xl border border-primary-neutral-200 bg-white shadow-ta-xs", className)}>
      {header && typeof header === "function" ? header(table) : header}
      <Table className={cn("rounded-md", tableClassName)}>
        <TableHeader className={headerClassName}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className={`${headerClassName ?? "bg-primary-neutral-50 hover:bg-primary-neutral-50 [&>*]:text-black"}`}
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={`${header.id === "select" ? "w-28" : header.id === "actions" && "w-44"}`}
                >
                  {/* {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )} */}

                  <div
                    {...{
                      className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                    className="flex cursor-pointer items-center"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: <ChevronUp className="ml-2 h-4 w-4 text-white" />,
                      desc: <ChevronDown className="ml-2 h-4 w-4 text-white" />,
                    }[header.column.getIsSorted() as string] ?? (
                      <ChevronsUpDown className="invisible ml-2 h-4 w-4 text-white" />
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={`${index % 2 === 1 && cn("bg-white", rowColor)}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    className=""
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {data.length > pagination.pageSize && (
        <div className="flex items-center justify-between space-x-2 border-t-2 p-3 py-4">
          <Button
            variant="ghost"
            className="border-2 text-primary-neutral-700"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <MoveLeft className="mr-2" />
            Previous
          </Button>
          {/* <Pagination
          pageSize={table.getState().pagination.pageSize}
          currentPage={table.getState().pagination.pageIndex + 1}
          total={totalData}
          onChange={onPaginationChange}
        /> */}
          <Button
            variant="ghost"
            className="border-2 text-primary-neutral-700"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
            <MoveRight className="ml-2" />
          </Button>
        </div>
      )}
      {footer && (
        <div className="fixed bottom-16 left-1/2 z-10 my-2 -translate-x-1/2 items-center">
          {typeof footer === "function" ? footer(table) : footer}
        </div>
      )}
    </div>
  );
}
