import { Asset } from "./../../models/asset.model";
import { VertApiEntity } from "@verg/api-service";
import { ENTITIES } from "../../models/entities.model";
import { VertApiServiceModel } from "../../models/api.model";
import { User } from "../../models/user.model";
import { Area } from "../../models/area.model";
import { Unit } from "../../models/unit.model";

export type VertApiEntityModel<TEntity> = VertApiEntity<ENTITIES, TEntity>;

export default class Entities {
  area: VertApiEntityModel<Area>;
  user: VertApiEntityModel<User>;
  unit: VertApiEntityModel<Unit>;
  asset: VertApiEntityModel<Asset>;

  constructor({ vertApiInstance }: { vertApiInstance: VertApiServiceModel }) {
    this.area = new VertApiEntity({
      vertApiInstance,
      entity: ENTITIES.AREA,
    });

    this.user = new VertApiEntity({
      vertApiInstance,
      entity: ENTITIES.USER,
    });

    this.unit = new VertApiEntity({
      vertApiInstance,
      entity: ENTITIES.UNIT,
    });

    this.asset = new VertApiEntity({
      vertApiInstance,
      entity: ENTITIES.ASSET,
    });
  }
}
