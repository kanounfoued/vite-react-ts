import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutMain({ children }: Props) {
  return <div>{children}</div>;
}
