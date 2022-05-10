import { VergQueryParams } from "@verg/api-service";
import { ENTITIES } from "../../models/entities.model";
import { Asset } from "../../models/asset.model";
import { useQuery } from "react-query";
import api from "../../services/api/api.service";
import ReactQueryUtil from "../../utils/reactQuery.util";

export function useAssets(inputs?: {
  queryParams?: VergQueryParams<keyof Asset>;
}) {
  const query = useQuery([ENTITIES.ASSET, inputs], () =>
    api.entities.asset.get({ queryParams: inputs?.queryParams })
  );
  return ReactQueryUtil.processGetQuery(query);
}
