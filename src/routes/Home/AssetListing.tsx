import { useEffect, useState } from "react";
import { VERG_SORT_ORDER } from "@verg/api-service";
import { useAssets } from "../../hooks/queries/asset.query";
import { AssetFilters } from "../../models/filter.model";
import { Card, Table, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import TableUtil from "../../utils/table.util";

type Props = {
  filters: AssetFilters;
};

const INITIAL_PAGINATION_STATE = { pageNum: 1, pageSize: 10 };

export default function AssetListing({ filters }: Props) {
  const [pagination, setPagination] = useState(INITIAL_PAGINATION_STATE);

  const {
    data: { data: assets, meta, fieldsDetail },
    isLoading,
  } = useAssets({
    queryParams: {
      pageNum: INITIAL_PAGINATION_STATE?.pageNum,
      pageSize: INITIAL_PAGINATION_STATE?.pageSize,
      filters,
      sorters: [{ sortCol: "name", sortOrder: VERG_SORT_ORDER.ASCENDING }],
    },
  });

  useEffect(() => {
    setPagination(INITIAL_PAGINATION_STATE);
  }, [filters]);

  const getTotalPages = () => {
    const globalCount = meta?.global_count ?? 0;
    const totalPages = globalCount / pagination.pageSize;
    return Math.round(totalPages);
  };

  const isNoUnitsFound = meta?.global_count === 0;

  const tabelColumns = TableUtil.columnsFromFieldsDetail(fieldsDetail).map(
    (item) => {
      return item;
    }
  );

  return (
    <Card className="w-full" loading={isLoading}>
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
                  <a>Delete</a>
                  <a>
                    <Space>
                      More actions
                      <DownOutlined />
                    </Space>
                  </a>
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
