import { HighlightOff } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import LanguageTextfield from "../LanguageTextfield/LanguageTextfield";

function ImagePreview() {
  ///
  const [finalMessage, setFinalMessage] = useState();

  const [advertisements, setAdvertisements] = useState([]);

  let advertisementObj = {
    file: null,
    description: "",
  };

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFileArray = Array.from(selectedFiles);

    const imagesArray = selectedFileArray.map((file, description) => {
      advertisementObj.file = URL.createObjectURL(file);
      advertisementObj.description = description;

      return advertisementObj;
    });

    setAdvertisements((previousAdvertisements) =>
      previousAdvertisements.concat(imagesArray)
    );

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(advertisement) {
    setAdvertisements(advertisements.filter((e) => e !== advertisement));
    URL.revokeObjectURL(advertisement);
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
        {advertisements &&
          advertisements.map((advertisement, index) => {
            return (
              <Box
                sx={{
                  m: 1,
                  border: 1,
                  borderRadius: 5,
                  borderColor: "#4267b2",
                  p: 1,
                  width: 260,
                }}
                key={advertisement.file}
              >
                <img
                  style={{ borderRadius: 10 }}
                  src={advertisement.file}
                  height="300"
                  width="240"
                  alt="upload"
                />
                <Box sx={{ border: 0, borderRadius: 2, my: 1 }}>
                  <LanguageTextfield
                    index={index}
                    advertisements={advertisements}
                    setFinalMessage={setFinalMessage}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ ml: 1 }}>{index + 1}</Typography>
                  <IconButton onClick={() => deleteHandler(advertisement)}>
                    <HighlightOff color="error" />
                  </IconButton>
                </Box>
              </Box>
            );
          })}
        <Box
          sx={{
            position: "relative",
            border: "2px dashed #4267b2",
            borderRadius: 5,
            width: 260,
            height: 520,
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
            // multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </Box>
      </Box>

      {/* {advertisements.length > 0 &&
        (advertisements.length > 10 ? (
          <Box>
            <Typography>You can't upload more than 10 images!</Typography>
            <Typography>
              please delete <b> {advertisements.length - 10} </b> of them
            </Typography>
          </Box>
        ) : (
          <Button
            onClick={() => {
              console.log(advertisements);
            }}
          >
            UPLOAD {advertisements.length} IMAGE
            {advertisements.length === 1 ? "" : "S"}
          </Button>
        ))} */}

      {advertisements.length > 5 && (
        <Box>
          <Typography>You can't upload more than 5 images!</Typography>
          <Typography>
            please delete <b> {advertisements.length - 5} </b> of them
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ImagePreview;
