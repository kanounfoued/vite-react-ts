import { useQuery } from "react-query";
import { VergQueryParams } from "@verg/api-service";
import api from "../../services/api/api.service";
import ReactQueryUtil from "../../utils/reactQuery.util";
import { ENTITIES } from "../../models/entities.model";
import { Asset } from "../../models/asset.model";

export function useAssets(inputs?: {
  queryParams?: VergQueryParams<keyof Asset>;
}) {
  const query = useQuery([ENTITIES.ASSET, inputs], () =>
    api.entities.asset.get({ queryParams: inputs?.queryParams })
  );
  return ReactQueryUtil.processGetQuery(query);
}
