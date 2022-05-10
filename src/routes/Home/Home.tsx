import { useState } from "react";

import { Row } from "antd";
import { AssetFilters } from "../../models/filter.model";
import AssetListing from "./AssetListing";

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
