"use client";

import {
  Badge,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export interface TimetableData {
  id: string;
  table: string[][];
  note?: { [key: number]: string };
}

interface TableRow {
  key: number;
  cells: string[];
}

// データをTableRow型に変換する関数
const convertToTableRow = (row: string[], index: number): TableRow => ({
  key: index,
  cells: row,
});

// セルの値を取得する関数
const getCellValue = (row: TableRow, columnKey: number): string => {
  return row.cells[columnKey] || "-";
};

const TimeTable: React.FC<{ timetableData: TimetableData }> = ({
  timetableData,
}) => {
  const columns = [
    {
      key: "monday",
      label: "月曜日",
    },
    {
      key: "tuesday",
      label: "火曜日",
    },
    {
      key: "wednesday",
      label: "水曜日",
    },
    {
      key: "thursday",
      label: "木曜日",
    },
    {
      key: "friday",
      label: "金曜日",
    },
    {
      key: "saturday",
      label: "土曜日",
    },
  ];

  // テーブルのヘッダーを仮定（適宜調整）
  const columnKeys = ["1限目", "2限目", "3限目", "4限目", "5限目", "6限目"];

  const rows: TableRow[] = timetableData.table.map(convertToTableRow);

  return (
    <Table aria-label="時間割">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} className="w-1/6 text-center">
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.key}>
            {columnKeys.map((columnKey) => {
              const dataKey = Number(
                `${columnKeys.indexOf(columnKey) + 1}${row.key + 1}`,
              );
              if (timetableData.note) {
                const note = timetableData.note[dataKey];
                if (note) {
                  return (
                    <TableCell
                      key={dataKey}
                      className="w-1/6 text-center text-lg"
                    >
                      <Popover
                        color="warning"
                        showArrow={true}
                        placement="right"
                      >
                        <PopoverTrigger>
                          <Badge content="!" color="warning">
                            {getCellValue(row, columnKeys.indexOf(columnKey))}
                          </Badge>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="px-1 py-2">
                            <div className="text-small">{note}</div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  );
                }
              }
              return (
                <TableCell key={dataKey} className="text-center text-lg">
                  {getCellValue(row, columnKeys.indexOf(columnKey))}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TimeTable;
