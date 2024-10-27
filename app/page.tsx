"use client";

import useSWR, { Fetcher } from "swr";

import TimeTable from "@/components/TimeTable";
import type { TimetableData } from "@/components/TimeTable";

const fetcher: Fetcher<TimetableData, string> = (...args) =>
  fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/timetable?class_id=2a`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>{data && <TimeTable timetableData={data} />}</div>;
}
