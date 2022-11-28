import {
  AddCircleOutline,
  HighlightOff,
} from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import LanguageTextfield from "../LanguageTextfield/LanguageTextfield";
import uploadImg from "../../images/cloud-upload-image.png";
import { useDispatch, useSelector } from "react-redux";
import { changeCampaignAdvertisements } from "../../store/reducers/saveCampaign";
import { useEffect } from "react";

function ImagePreview() {
  const [finalMessage, setFinalMessage] = useState();


  const [advertisementObjArr, setAdvertisementObjArr] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);

  ///////// 
  const {selectedAdvertisements} = useSelector((state) => state.saveCampaign);

  useEffect(() => {
    setAdvertisements(selectedAdvertisements)
  }, [selectedAdvertisements])

  // console.log(selectedAdvertisements)

  if(advertisements[1]){
    // console.log("1 description",advertisements[1].description)
  }

  let advertisementObj = {
    id: null,
    file: null,
    description: "",
  };

  const onAddTextOnlyAdvertisement = () => {
    const imagesArray = (file, description) => {
      advertisementObj.id = "id" + Math.random().toString(16).slice(2);
      advertisementObj.file = file;
      advertisementObj.description = description;

      return advertisementObj;
    };

    setAdvertisements((previousAdvertisements) =>
      previousAdvertisements.concat(imagesArray)
    );
  };

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const description = event.target.description;

    const selectedFileArray = Array.from(selectedFiles, description);
    
    const imagesArray = selectedFileArray.map((file, description) => {
      advertisementObj.id = "id" + Math.random().toString(16).slice(2);
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

  function deleteHandler(advertisement, index) {
    console.log("deleting index is ", index)

    // setAdvertisements(advertisements.filter((e) => e !== advertisement));
    setAdvertisements(advertisements.filter((e) => e !== advertisements[index]));

    URL.revokeObjectURL(advertisement);
  }

  const dispatch = useDispatch();

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
                  height: 520,
                }}
                key={index}
              >
                {advertisement.file ? (
                  <Box>
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
                        rowsCount={2}
                        advertisements={advertisements}
                        // finalMessageText = {advertisements[index].description}
                        finalMessageText = {advertisements[index].description ? advertisements[index].description : ""}
                        // finalMessageText = {"Hello Tello 3 mello 2"}
                        setFinalMessage={setFinalMessage}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box sx={{ border: 0, borderRadius: 2, mt: 2, mb: 1 }}>
                    <LanguageTextfield
                      index={index}
                      rowsCount={15}
                      advertisements={advertisements}
                      finalMessageText = {advertisements[index].description ? advertisements[index].description : ""}
                      setFinalMessage={setFinalMessage}
                    />
                  </Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ ml: 1 }}>{index + 1}</Typography>
                  <IconButton onClick={() => deleteHandler(advertisement, index)}>
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
            textAlign: "center",
          }}
        >
          <Typography>+ Add Image Advertisement</Typography>
          <Box sx={{ mt: 14 }}>
            <img width={"100px"} src={uploadImg} alt="" />
            <Typography sx={{ fontWeight: 500 }}>Drag & Drop</Typography>
            <Typography sx={{ fontWeight: 500 }}>your images here</Typography>
          </Box>

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
            accept="image/png , image/jpeg, image/webp"
          />
        </Box>

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
          <Typography>+ Add Text Only Advertisement</Typography>
          <Box sx={{ textAlign: "center", mt: 24 }}>
            <Button
              variant="outlined"
              startIcon={<AddCircleOutline />}
              onClick={onAddTextOnlyAdvertisement}
            >
              Add New
            </Button>
          </Box>
        </Box>
      </Box>

      {advertisements.length > 0 &&
        (advertisements.length > 5 ? (
          <Box>
            <Typography>You can't upload more than 10 images!</Typography>
            <Typography>
              please delete <b> {advertisements.length - 5} </b> of them
            </Typography>
          </Box>
        ) : (
          <Button
            onClick={() => {
              console.log("button clicked", advertisements);

              let i = 0;
              setAdvertisementObjArr([]);

              advertisements.forEach((element) => {
                if (element.id) {
                  const advertisementObj = {
                    id: 2,
                    file: element.file,
                    description: element.description,
                  };

                  advertisementObjArr.push(advertisementObj);

                  i = i + 1;
                } else if (element.description) {

                  const advertisementObj = {
                    id: 3,
                    file: "",
                    description: element.description,
                  };

                  advertisementObjArr.push(advertisementObj);

                  i = i + 1;
                }
              });

              dispatch(
                changeCampaignAdvertisements({
                  selectedAdvertisements: advertisementObjArr,
                })
              );
            }}
          >
            UPLOAD {advertisements.length} IMAGE
            {advertisements.length === 1 ? "" : "S"}
          </Button>
        ))}

      {/* {advertisements.length > 5 && (
        <Box sx={{textAlign:'center', my:1, borderTop:2, borderBottom:2, py:1, color:'red'}}>
          <Typography>You can't upload more than 5 advertisements!</Typography>
          <Typography>
            please delete <b> {advertisements.length - 5} </b> of them
          </Typography>
        </Box>
      )} */}
    </Box>
  );
}

export default ImagePreview;
