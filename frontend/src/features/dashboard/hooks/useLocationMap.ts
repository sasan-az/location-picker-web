import { useQuery } from "react-query";
import getLocations from "features/dashboard/apis/locations";
import { useCallback, useMemo } from "react";
import { LatLng, Location } from "features/dashboard/types";
import { center } from "features/dashboard/constants/map";
import { useRouter } from "next/router";

type UseLocationMap = {
  isLoading: boolean;
  initialLocation: LatLng;
  locations: Location[];
  handleEditClick: (id: number) => Promise<void>;
};

export default function useLocationMap(): UseLocationMap {
  const { push } = useRouter();

  const handleEditClick = useCallback(
    async (id: number) => {
      await push(`/location?id=${id}`);
    },
    [push]
  );

  const {
    isLoading,
    isFetching,
    data: locations,
  } = useQuery("locations", getLocations);

  const initialLocation = useMemo(
    () =>
      new LatLng(
        Number(locations?.[0]?.latitude ?? center.latitude),
        Number(locations?.[0]?.longitude ?? center.longitude)
      ),
    [locations]
  );

  return {
    initialLocation,
    isLoading: isLoading || isFetching,
    locations: locations ?? [],
    handleEditClick,
  };
}
