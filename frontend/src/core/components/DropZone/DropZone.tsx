import { ChangeEvent, ReactElement, useCallback } from "react";
import Container, { ContainerProps } from "core/components/Container";
import * as Styled from "./styles";

type DropZoneProp = Omit<ContainerProps, "onChange"> & {
  image: File | string | null;
  onChange: (image: File) => void;
};

const DropZone = (prop: DropZoneProp): ReactElement => {
  const { onChange, image, ...rest } = prop;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const selectedImage = event?.target?.files?.[0];
      if (selectedImage) {
        onChange(selectedImage);
      }
    },
    [onChange]
  );
  return (
    <Container {...rest}>
      <input
        style={{ display: "none" }}
        accept={"image/*"}
        onChange={handleChange}
        id={"upload-logo"}
        name={"logo"}
        type={"file"}
      />

      <Styled.LabelContainer htmlFor={"upload-logo"}>
        {image ? (
          <Styled.Image
            src={
              typeof image === "string"
                ? image || undefined
                : URL.createObjectURL(image)
            }
            alt={"logo"}
          />
        ) : (
          <span>Click here to pick image</span>
        )}
      </Styled.LabelContainer>
    </Container>
  );
};

export default DropZone;
