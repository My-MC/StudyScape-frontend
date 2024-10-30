"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

interface Places {
  period: number;
  placeList: string[];
}

const convertPlacesData = (places: Places[]) => {
  return places.map((place) => {
    place.placeList.unshift(place.period.toString());
    return {
      key: place.period,
      contents: place.placeList,
    };
  });
};

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

  // Example Data for Demo
  // prettier-ignore
  const places = [
    {period: 1, placeList: ["第1体育館", "第2体育館", "第3グランド", "第2体育館下", "-", "-"]},
    {period: 2, placeList: ["-", "第1体育館", "第2体育館", "第3グランド", "第2体育館下", "-"]},
    {period: 3, placeList: ["-", "-", "第1体育館", "第2体育館", "第3グランド", "第2体育館下"]},
    {period: 4, placeList: ["第2体育館下", "-", "-", "第1体育館", "第2体育館", "第3グランド"]},
    {period: 5, placeList: ["第3グランド", "第2体育館下", "-", "-", "第1体育館", "第2体育館"]},
    {period: 6, placeList: ["第2体育館", "第3グランド", "第2体育館下", "-", "-", "第1体育館"]},
    {period: 7, placeList: ["第1体育館", "第2体育館", "第3グランド", "第2体育館下", "-", "-"]},
  ];

  return (
    <div className="flex w-11/12 items-center mx-auto">
      <Table>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {convertPlacesData(places).map((row) => (
            <TableRow key={row.key}>
              {row.contents.map((cell, index) => (
                <TableCell key={index} className="text-base">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
