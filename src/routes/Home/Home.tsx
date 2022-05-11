import { useState } from "react";
import { Row } from "antd";
import AssetListing from "./AssetListing";
import { AssetFilters } from "../../models/filter.model";

export default function Home() {
  const [filters, setFilters] = useState<{ [key: string]: AssetFilters }>({});

  return (
    <Row className="h-full">
      <AssetListing
        filters={Object.values(filters)
          .map((filter) => Object.values(filter))
          .flat()}
      />
    </Row>
  );
}
