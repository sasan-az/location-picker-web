import { Location } from "features/dashboard/types";
import { useCallback, useMemo } from "react";
import { FormikHelpers } from "formik/dist/types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { upsertLocation } from "features/dashboard/apis";
import { center } from "features/dashboard/constants/map";
import { getLocation } from "features/dashboard/apis/locations";
import { useUrlQuery } from "core/hooks/useUrlQuery";
import {useRouter} from "next/router";

export type LocationForm = Partial<Omit<Location, "id">>;

export type UseLocationForm = {
  initialValues: LocationForm;
  handleSubmit: (
    values: LocationForm,
    formikHelpers: FormikHelpers<LocationForm>
  ) => void;
};

export default function useLocationForm(): UseLocationForm {
  const { query } = useUrlQuery<{ id: string }>();
  const { push } = useRouter();

  const queryClient = useQueryClient();

  const { data: location } = useQuery(
    ["location", query?.id],
    () => getLocation(query?.id),
    {
      enabled: !!query.id,
    }
  );

  const initialValues = useMemo(
    (): LocationForm => ({
      ...location,
      latitude: location?.latitude ?? center?.latitude,
      longitude: location?.longitude ?? center?.longitude,
    }),
    [location]
  );

  const { mutateAsync: mutateCreateLocation } = useMutation(upsertLocation, {
    onSuccess: async () => {
      await queryClient.refetchQueries("locations");
      await push("dashboard")

    },
  });

  const handleSubmit = useCallback(
    async (
      locationForm: LocationForm,
      formikHelpers: FormikHelpers<LocationForm>
    ) => {
      try {
        await mutateCreateLocation({ ...locationForm, id: query.id });
      } catch (e: any) {
        const error = e.response.data.error;
        if (e.response.status === 400) {
          formikHelpers.setErrors(error);
        } else {
          alert(error);
        }
      }
    },
    [query.id]
  );

  return {
    initialValues,
    handleSubmit,
  };
}
