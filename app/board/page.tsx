"use client";
import { Card, CardBody, Divider } from "@nextui-org/react";

const boardData = [
  { id: 1, title: "このサイトについて" },
  { id: 2, title: "Hello World!" },
  { id: 3, title: "Too Loooooooooooooooooooooooooooooooong " },
];

export default function Board() {
  return (
    <div className="flex w-10/12 mx-auto space-x-2">
      <div className="w-1/3">
        {boardData.map((thread) => {
          return (
            <Card key={thread.id} className="w-full h-12 my-1">
              <CardBody>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  {thread.title}
                </p>
              </CardBody>
            </Card>
          );
        })}
      </div>
      <Divider orientation="vertical" />
      <div>aaaaaaaaaaaaaaaaaaaa</div>
    </div>
    
  );
}
