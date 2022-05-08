import { Layout } from "antd";
import React, { ReactNode } from "react";
// import Header from "./Header";

type Props = {
  children: ReactNode;
};

export default function LayoutMain({ children }: Props) {
  return (
    <Layout className="h-screen">
      {/* <Layout.Header>
        <Header />
      </Layout.Header> */}
      <Layout.Content className="overflow-auto">{children}</Layout.Content>
    </Layout>
  );
}
