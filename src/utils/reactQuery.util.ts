import { FieldDetail, VergMeta } from "@verg/api-service";
import { head } from "lodash";
import { UseQueryResult } from "react-query";

class ReactQueryUtilities {
  fieldsDetailIdsToOmit;

  constructor(inputs?: { fieldsDetailIdsToOmit?: Array<string> }) {
    this.fieldsDetailIdsToOmit = inputs?.fieldsDetailIdsToOmit ?? ["id"];
  }

  filterFieldsDetails<TEntityModel, TFieldDetail = FieldDetail<TEntityModel>>(
    fieldsDetail: Array<TFieldDetail> | undefined
  ) {
    return (
      fieldsDetail?.filter(
        (field) =>
          !this.fieldsDetailIdsToOmit.includes(
            (field as unknown as { id: string })?.id
          )
      ) ?? []
    );
  }

  processGetQuery<TEntityModel, TFieldDetail = FieldDetail<keyof TEntityModel>>(
    query: UseQueryResult<
      {
        data: {
          byId?: { [key: string]: TEntityModel } | undefined;
          data: Array<TEntityModel>;
          meta: VergMeta<TFieldDetail>;
        };
      },
      unknown
    >
  ) {
    const queryData = query?.data?.data;
    return {
      ...query,
      data: {
        ...queryData,
        data: queryData?.data ?? [],
        fieldsDetail: this.filterFieldsDetails<TFieldDetail>(
          queryData?.meta?.fields?.base_fields
        ),
      },
    };
  }

  processGetByIdQuery<
    TEntityModel,
    TFieldDetail = FieldDetail<keyof TEntityModel>
  >(
    query: UseQueryResult<
      {
        data: {
          data: TEntityModel;
          meta: VergMeta<TFieldDetail>;
        };
      },
      unknown
    >
  ) {
    const queryData = query?.data?.data;
    return {
      ...query,
      data: {
        ...queryData,
        fieldsDetail: this.filterFieldsDetails<TFieldDetail>(
          queryData?.meta?.fields?.base_fields
        ),
      },
    };
  }

  processGetQueryReturnFirstIndex<TEntityModel>(
    query: UseQueryResult<
      {
        data: {
          data: Array<TEntityModel>;
          meta: VergMeta<TEntityModel>;
        };
      },
      unknown
    >
  ) {
    const queryData = query?.data?.data;
    return {
      ...query,
      data: {
        ...queryData,
        data: head(queryData?.data),
        fieldsDetail: this.filterFieldsDetails<TEntityModel>(
          queryData?.meta?.fields?.base_fields
        ),
      },
    };
  }
}

const ReactQueryUtil = new ReactQueryUtilities();

export default ReactQueryUtil;
