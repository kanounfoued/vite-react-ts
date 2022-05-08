import { FieldsDetails } from "@verg/api-service";
import { Location } from "./geo.model";

export interface Unit {
  id: string;
  gname: string;
  address: string;
  property_id: string;
  unit_number: string;
  property_sub_type: string;
  property_size_sqm: number;
  balcony_area: number;
  common_area: number;
  actual_common_area: number;
  floor: string;
  room_type: string;
  parking: string;
  parking_allocation_type: string;
  creation_date: string;
  registration_type: string;
  pre_registration_number: string;
  is_free_hold: string;
  is_lease_hold: string;
  parent_property_id: string;
  building_number: string;
  building_name: string;
  grand_parent_property_id: string;
  land_number: string;
  land_sub_number: string;
  land_type: string;
  zip_code: string;
  municipality_number: string;
  master_project: string;
  project_number: string;
  project_name: string;
  area: string;
  zone: string;
  area_id: string;
  zone_id: string;
  land_id: string;
  building_id: string;
  location: Location;
}

export type UnitFieldDetails = FieldsDetails<Unit>;
