"use client";

import useSWR, { Fetcher } from "swr";

import { useAccountStore, type Account } from "@/components/Account";

import type { TimetableData } from "@/components/TimeTable";
import TimeTable from "@/components/TimeTable";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetcher: Fetcher<TimetableData, string> = (...args) => {
  // following line is disabled for Demo version
  // fetch(...args).then((res) => res.json());
  return {
    id: "timetable:2a",
    table: [
      ["物理", "家庭", "古典", "英語①", "家庭", "数C"],
      ["数Ⅲ", "英語①", "数C", "数Ⅲ", "古典", "化学"],
      ["体育", "化学", "体育", "化学", "論理国語", "英語②"],
      ["芸術", "地理", "化学", "物理", "地理", "論理国語"],
      ["数学C", "数C", "数Ⅲ", "情報Ⅰ", "英語①", ""],
      ["LHR", "数Ⅲ", "保健", "英語②", "体育", ""],
      ["", "英語②", "物理", "", "物理", ""],
    ],
    note: {
      11: "物理に変更になりました",
      16: "大ホールで学年会議を行います。",
      45: "家庭科と入れ替わりました",
    },
  };
};

const temporaryAccount: Account = {
  name: "Hanako Mihon",
  email: "hanako@example.com",
  classId: "1a",
};

useAccountStore.setState({
  name: temporaryAccount.name,
  email: temporaryAccount.email,
  classId: temporaryAccount.classId,
});

export default function Home() {
  // class_id is temporally fixed for Demo version
  const class_id = "2a";

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/timetable?class_id=${class_id}`,
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="mx-auto flex w-11/12 items-center">
      {data && <TimeTable timetableData={data} />}
    </div>
  );
}
