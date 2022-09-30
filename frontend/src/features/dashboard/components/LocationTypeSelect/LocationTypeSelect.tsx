import { ReactElement } from "react";
import Select, { SelectProp } from "core/components/Select";
import { LocationType } from "features/dashboard/types";

const locationTypes = [
  { title: "Home", value: LocationType.HOME },
  { title: "Business", value: LocationType.BUSINESS },
];

const LocationTypeSelect = (prop: Omit<SelectProp, "items">): ReactElement => {
  return <Select items={locationTypes} {...prop} />;
};

export default LocationTypeSelect;
