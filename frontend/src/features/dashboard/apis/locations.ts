import { ApiResponse, get, patch, post } from "core/helpers/axios";
import { Location } from "features/dashboard/types";
import { LocationForm } from "features/dashboard/hooks/useLocationForm";

export default function getLocations(): Promise<Location[]> {
  return get<ApiResponse<Location[]>>("/locations").then(
    (res) => res.data.data
  );
}

export function getLocation(id: string): Promise<Location> {
  return get<ApiResponse<Location>>("/locations/" + id).then(
    (res) => res.data.data
  );
}

export function upsertLocation(
  param: LocationForm & { id?: string }
): Promise<Location> {
  const { name, locationType, logo, longitude, latitude, id } = param;
  const formData = new FormData();

  name && formData.append("name", name);
  locationType && formData.append("locationType", locationType);
  longitude && formData.append("longitude", longitude);
  latitude && formData.append("latitude", latitude);
  logo && typeof logo !== "string" && formData.append("logo", logo);

  return (id ? patch : post)<ApiResponse<Location>>(
    `/locations${id ? `/${id}` : ""}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).then((res) => res.data.data);
}
