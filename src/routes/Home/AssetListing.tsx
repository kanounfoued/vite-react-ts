import { useEffect, useState } from "react";
import { Card, Table, Space, Button } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import { VERG_SORT_ORDER } from "@verg/api-service";
// import { useAssets } from "../../hooks/queries/asset.query";
import TableUtil from "../../utils/table.util";
import {
  useAddEntity,
  useDeleteEntity,
  useEntities,
  useUpdateEntity,
} from "../../hooks/queries/crud.query";
import { AssetFilters } from "../../models/filter.model";
import { Asset } from "../../models/asset.model";
import { ENTITIES } from "../../models/entities.model";

type Props = {
  filters: AssetFilters;
};

const INITIAL_PAGINATION_STATE = { pageNum: 1, pageSize: 10 };

export default function AssetListing({ filters }: Props) {
  const [pagination, setPagination] = useState(INITIAL_PAGINATION_STATE);

  //   const {
  //     data: { data: assets, meta, fieldsDetail },
  //     isLoading,
  //   } = useAssets({
  //     queryParams: {
  //       pageNum: INITIAL_PAGINATION_STATE?.pageNum,
  //       pageSize: INITIAL_PAGINATION_STATE?.pageSize,
  //       filters,
  //       sorters: [{ sortCol: "name", sortOrder: VERG_SORT_ORDER.ASCENDING }],
  //     },
  //   });

  const {
    data: { data: assets, meta, fieldsDetail },
    isFetching: isEntitiesLoading,
  } = useEntities<Asset>(ENTITIES.ASSET);

  useEffect(() => {
    setPagination(INITIAL_PAGINATION_STATE);
  }, [filters]);

  const getTotalPages = () => {
    const globalCount = meta?.global_count ?? 0;
    const totalPages = globalCount / pagination.pageSize;
    return Math.round(totalPages);
  };

  //   const isNoUnitsFound = meta?.global_count === 0;

  const { mutate: muatteAdd } = useAddEntity(ENTITIES.ASSET);
  const { mutate: mutateDelete } = useDeleteEntity(ENTITIES.ASSET);
  const { mutate: mutateUpdate } = useUpdateEntity(ENTITIES.ASSET);

  const tabelColumns = TableUtil.columnsFromFieldsDetail(fieldsDetail).map(
    (item) => {
      return item;
    }
  );

  function onAdd(asset: Asset) {
    muatteAdd(asset);
  }

  function onDelete(id: string) {
    mutateDelete(id);
  }

  function onEdit(asset: Asset & { id: string }) {
    mutateUpdate(asset);
  }

  return (
    <Card className="w-full" loading={isEntitiesLoading}>
      <Table
        size="small"
        bordered
        columns={[
          ...TableUtil.columnsFromFieldsDetail(fieldsDetail),
          {
            title: "Action",
            key: "action",
            sorter: true,
            render: (props) => {
              return (
                <Space size="middle">
                  <Button
                    onClick={() =>
                      onAdd({
                        code: "1",
                        name: "Asset 4",
                      } as Asset)
                    }
                  >
                    add
                  </Button>
                  <Button
                    onClick={() => {
                      onDelete(props.id);
                    }}
                  >
                    delete
                  </Button>
                  <Button
                    onClick={() =>
                      onEdit({ ...props, name: "Asset 3", code: "3" })
                    }
                  >
                    edit
                  </Button>
                </Space>
              );
            },
          },
        ]}
        dataSource={assets}
        pagination={{
          onChange: (pageNum) => {
            setPagination({ ...pagination, pageNum });
          },
          current: pagination?.pageNum,
          pageSize: pagination?.pageSize,
          total: getTotalPages(),
        }}
        scroll={{ x: "max-content" }}
      />
    </Card>
  );
}
