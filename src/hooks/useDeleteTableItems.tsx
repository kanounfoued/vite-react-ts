import { Key, useState } from "react";

export function useDeleteTableItems(deleteFn: (id: string) => void) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  async function handleDelete() {
    selectedRowKeys.forEach((id) => deleteFn(id as string));
    setSelectedRowKeys([]);
  }
  return { handleDelete, selectedRowKeys, setSelectedRowKeys };
}
