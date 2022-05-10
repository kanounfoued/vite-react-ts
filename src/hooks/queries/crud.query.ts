import { ENTITIES } from "../../models/entities.model";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Api from "../../services/api/api.service";
import ReactQueryUtil from "../../utils/reactQuery.util";

export function useEntities<T>(entity: ENTITIES) {
  const query = useQuery([entity], () => Api.base.getEntities<T>({ entity }));
  return ReactQueryUtil.processGetQuery(query);
}

export function useAddEntity<T>(entity: ENTITIES) {
  const queryClient = useQueryClient();
  const query = useMutation(
    (body: Partial<T>) => Api.base.createEntity({ entity, body }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(entity);
      },
    }
  );
  return query;
}

export function useUpdateEntity<T>(entity: ENTITIES) {
  const queryClient = useQueryClient();
  const query = useMutation(
    (body: Partial<T> & { id: string }) =>
      Api.base.updateEntity({ entity, body }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(entity);
      },
    }
  );
  return query;
}

export function useDeleteEntity(entity: ENTITIES) {
  const queryClient = useQueryClient();
  const query = useMutation(
    (entityId: string) => Api.base.deleteEntity({ entity, entityId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(entity);
      },
    }
  );
  return query;
}
