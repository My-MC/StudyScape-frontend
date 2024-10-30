import { User } from "@nextui-org/react";
import { create } from "zustand";

export interface Account {
  name: string;
  email: string;
  classId: string;
}

type State = Account;

type Action = {
  updateName: (name: State["name"]) => void;
  updateEmail: (email: State["email"]) => void;
  updateClassId: (classId: State["classId"]) => void;
  getDisplayClassId: (classId: State["classId"]) => string;
};

export const useAccountStore = create<State & Action>((set) => ({
  name: "",
  email: "",
  classId: "",
  updateName: (name) => set({ name }),
  updateEmail: (email) => set({ email }),
  updateClassId: (classId) => set({ classId: classId }),
  getDisplayClassId: (classId) =>
    `${classId.split("")[0]}-${classId.split("")[1]}`.toUpperCase(),
}));

export default function Account() {
  const name = useAccountStore((state) => state.name);
  const email = useAccountStore((state) => state.email);
  const displayClassId = useAccountStore((state) =>
    state.getDisplayClassId(state.classId),
  );

  return <User name={name} description={`${displayClassId} ${email}`} />;
}
