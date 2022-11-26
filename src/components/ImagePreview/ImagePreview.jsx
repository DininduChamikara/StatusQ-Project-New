import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";

function ImagePreview() {

    const [advertisements, setAdvertisements] = useState([]);

  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFileArray = Array.from(selectedFiles);

    const imagesArray = selectedFileArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <Box
                sx={{
                  m: 1,
                  border: 1,
                  borderRadius: 5,
                  borderColor: "#4267b2",
                  p: 1,
                  width: 220,
                  //   height: 300,
                }}
                key={image}
              >
                <img
                  style={{ borderRadius: 10 }}
                  src={image}
                  height="250"
                  width="200"
                  alt="upload"
                />
                <Box sx={{ border: 0, borderRadius: 2, my: 1 }}>
                  {/* <Typography>Description</Typography> */}
                  <TextField />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>{index + 1}</Typography>
                  <Button onClick={() => deleteHandler(image)}>
                    delete image
                  </Button>
                </Box>
              </Box>
            );
          })}
        <Box
          sx={{
            position: "relative",
            border: "2px dashed #4267b2",
            borderRadius: 5,
            width: 220,
            height: 300,
            backgroundColor: "#f5f8ff",
            p: 2,
            m: 1,
          }}
        >
          <Typography>+ Add Images</Typography>
          <Typography>Up to 5 images</Typography>
          <input
            style={{
              position: "absolute",
              opacity: 0,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </Box>
      </Box>

      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <Box>
            <Typography>You can't upload more than 10 images!</Typography>
            <Typography>
              please delete <b> {selectedImages.length - 10} </b> of them
            </Typography>
          </Box>
        ) : (
          <Button
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </Button>
        ))}
    </Box>
  );
}

export default ImagePreview;
