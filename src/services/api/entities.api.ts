import { VertApiEntity } from "@verg/api-service";
import { VertApiServiceModel } from "../../models/api.model";
import { ENTITIES } from "../../models/entities.model";
import { Asset } from "../../models/asset.model";

export type VertApiEntityModel<TEntity> = VertApiEntity<ENTITIES, TEntity>;

export default class Entities {
  asset: VertApiEntityModel<Asset>;

  constructor({ vertApiInstance }: { vertApiInstance: VertApiServiceModel }) {
    this.asset = new VertApiEntity({
      vertApiInstance,
      entity: ENTITIES.ASSET,
    });
  }
}
