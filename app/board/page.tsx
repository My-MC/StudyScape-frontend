"use client";
import { Card, CardBody, Link } from "@nextui-org/react";

const boardData = [
  { id: 1, title: "このサイトについて" },
  { id: 2, title: "Hello World!" },
  {
    id: 3,
    title:
      "Toooooooooooooooooooooooooooooooooooooooooo Loooooooooooooooooooooooooooooooong ",
  },
];

export default function Board() {
  return (
    <div className="mx-auto my-2 flex h-full w-[90%] flex-col text-lg">
      {boardData.map((thread) => {
        return (
          <Link key={thread.id} href={`/board/${thread.id}`}>
            <Card className="h-15 my-1 w-full">
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
  );
}
