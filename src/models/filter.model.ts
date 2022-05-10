import { QueryParamFilter } from "@verg/api-service";
import { Asset } from "./asset.model";

export type AssetFilter = QueryParamFilter<keyof Asset>;
export type AssetFilters = Array<AssetFilter>;
