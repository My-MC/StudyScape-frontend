"use client";
import { Card, CardBody, Divider, Link } from "@nextui-org/react";
import { useParams } from "next/navigation";

const boardData = [
  { id: 1, title: "このサイトについて" },
  { id: 2, title: "Hello World!" },
  { id: 3, title: "Too Loooooooooooooooooooooooooooooooong " },
];

const thread = [
  {
    id: 1,
    title: "このサイトについて",
    content: [
      { id: 1, content: "aaaa" },
      { id: 2, content: "bbbb" },
      { id: 3, content: "cccc" },
    ],
  },
  {
    id: 2,
    title: "Hello World!",
    content: [
      { id: 1, content: "aaaa" },
      { id: 2, content: "bbbb" },
      { id: 3, content: "cccc" },
    ],
  },
  {
    id: 3,
    title: "Too Loooooooooooooooooooooooooooooooong ",
    content: [
      { id: 1, content: "aaaa" },
      { id: 2, content: "bbbb" },
      { id: 3, content: "cccc" },
    ],
  },
];

export default function Board() {
  const params = useParams();

  const id = Number(params.id) - 1;

  return (
    <div className="flex w-[90%] h-full mx-auto space-x-2 my-2">
      <div className="w-1/3">
        {boardData.map((thread) => {
          return (
            <Link
              key={thread.id}
              className="w-full"
              href={`/board/${thread.id}`}
            >
              <Card className="w-full h-12 my-1">
                <CardBody>
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {thread.title}
                  </p>
                </CardBody>
              </Card>
            </Link>
          );
        })}
      </div>
      <Divider orientation="vertical" className="bg-gray-300" />
      <div className="w-2/3">
        <div className="w-full">
          <h1 className="text-3xl font-bold">{thread[id].title}</h1>
          <Divider className="my-2" />
          {thread[id].content.map((content) => {
            return (
              <div key={content.id}>
                <div className="w-full h-12 my-1">{content.content}</div>
                <Divider />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
