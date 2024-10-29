"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export default function Pe() {
  const columns = [
    {
      key: "period",
      label: "Period",
    },
    {
      key: "satou",
      label: "佐藤先生",
    },
    {
      key: "suzuki",
      label: "鈴木先生",
    },
    {
      key: "takahashi",
      label: "高橋先生",
    },
    {
      key: "tanaka",
      label: "田中先生",
    },
    {
      key: "itou",
      label: "伊藤先生",
    },
    {
      key: "watanabe",
      label: "渡辺先生",
    },
  ];

  const places = [
    {period:1,placeList:["第1体育館", "第2体育館", "第3グランド", "第2体育館下", "-", "-"]},
    {period:2,placeList:["-", "第1体育館", "第2体育館", "第3グランド", "第2体育館下", "-"]},
    {period:3,placeList:["-", "-", "第1体育館", "第2体育館", "第3グランド", "第2体育館下"]},
    {period:4,placeList:["第2体育館下", "-", "-", "第1体育館", "第2体育館", "第3グランド"]},
    {period:5,placeList:["第3グランド", "第2体育館下", "-", "-", "第1体育館", "第2体育館"]},
    {period:6,placeList:["第2体育館", "第3グランド", "第2体育館下", "-", "-", "第1体育館"]},
    {period:7,placeList:["第1体育館", "第2体育館", "第3グランド", "第2体育館下", "-", "-"]},
  ];

  const getPlace = (places:string[],key:number) => {
    return places[key];
  }

  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={places}>
        {(places) => (
          <TableRow key={places.period}>
            {(period) => <TableCell>{getPlace(places.placeList,period)}</TableCell>}
          </TableRow>
        )}
        {/* <TableRow key="1">
          <TableCell>1</TableCell>
          <TableCell>第1体育館</TableCell>
          <TableCell>第2体育館</TableCell>
          <TableCell>第3グランド</TableCell>
          <TableCell>第2体育館下</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>2</TableCell>
          <TableCell>-</TableCell>
          <TableCell>第1体育館</TableCell>
          <TableCell>第2体育館</TableCell>
          <TableCell>第3グランド</TableCell>
          <TableCell>第2体育館下</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>3</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>第1体育館</TableCell>
          <TableCell>第2体育館</TableCell>
          <TableCell>第3グランド</TableCell>
          <TableCell>第2体育館下</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>4</TableCell>
          <TableCell>第2体育館下</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>第1体育館</TableCell>
          <TableCell>第2体育館</TableCell>
          <TableCell>第3グランド</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>5</TableCell>
          <TableCell>第3グランド</TableCell>
          <TableCell>第2体育館下</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>第1体育館</TableCell>
          <TableCell>第2体育館</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>6</TableCell>
          <TableCell>第2体育館</TableCell>
          <TableCell>第3グランド</TableCell>
          <TableCell>第2体育館下</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>第1体育館</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell>7</TableCell>
          <TableCell>第1体育館</TableCell>
          <TableCell>第2体育館</TableCell>
          <TableCell>第3グランド</TableCell>
          <TableCell>第2体育館下</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow> */}
      </TableBody>
    </Table>
  );
}
