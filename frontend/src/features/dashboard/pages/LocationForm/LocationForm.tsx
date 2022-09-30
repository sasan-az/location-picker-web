import { ReactElement } from "react";
import * as Styled from "./styles";
import Input from "core/components/Input";
import Container from "core/components/Container";
import { Form, Formik } from "formik";
import LocationTypeSelect from "features/dashboard/components/LocationTypeSelect";
import DropZone from "core/components/DropZone";
import useLocationForm from "features/dashboard/hooks/useLocationForm";
import dynamic from "next/dynamic";
import { LatLng } from "features/dashboard/types";

const FormMap = dynamic(() => import("features/dashboard/components/FormMap"), {
  ssr: false,
});

const LocationForm = (): ReactElement => {
  const { initialValues, handleSubmit } = useLocationForm();

  return (
    <main>
      <Container alignItems={"center"} flexDirection={"column"}>
        <Styled.FormContainer>
          <Styled.Header>
            <span>ShareLocation</span>
          </Styled.Header>
          <Container mx={"50px"} my={"20px"} flexDirection={"column"}>
            <Formik
              enableReinitialize={true}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                setFieldValue,
              }) => (
                <Form>
                  <Styled.RowContainer>
                    <Styled.Label>Location Name:</Styled.Label>
                    <Input
                      placeholder={"Name"}
                      container={{ my: "5px", flex: 2 }}
                      value={values?.name ?? ""}
                      error={errors.name}
                      name={"name"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Styled.RowContainer>

                  <Styled.RowContainer>
                    <Styled.Label>Location on map:</Styled.Label>
                    <Container flex={2} height={"200px"}>
                      <FormMap
                        location={
                          new LatLng(
                            Number(values.latitude),
                            Number(values.longitude)
                          )
                        }
                        onClick={(location) => {
                          setFieldValue("longitude", location.longitude);
                          setFieldValue("latitude", location.latitude);
                        }}
                      />
                    </Container>
                  </Styled.RowContainer>

                  <Styled.RowContainer>
                    <Styled.Label>Location on type:</Styled.Label>
                    <LocationTypeSelect
                      value={values.locationType}
                      onChange={(event) =>
                        setFieldValue("locationType", event.target.value)
                      }
                      my={"10px"}
                      flex={2}
                    />
                  </Styled.RowContainer>

                  <Styled.RowContainer>
                    <Styled.Label>Logo :</Styled.Label>
                    <DropZone
                      flex={2}
                      height={"200px"}
                      image={
                        typeof values?.logo === "string"
                          ? `${process.env.NEXT_PUBLIC_STORAGE_SERVER}/${values.logo}`
                          : values?.logo ?? null
                      }
                      onChange={(image) => setFieldValue("logo", image)}
                    />
                  </Styled.RowContainer>

                  <Styled.Button type="submit">Save</Styled.Button>
                </Form>
              )}
            </Formik>
          </Container>
        </Styled.FormContainer>
      </Container>
    </main>
  );
};

export default LocationForm;
