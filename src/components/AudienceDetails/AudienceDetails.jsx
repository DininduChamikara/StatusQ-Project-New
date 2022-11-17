import { Man, Woman } from "@mui/icons-material";
import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckAndCountRow from "../CheckAndCountRow/CheckAndCountRow";
import DiscreteSlider from "../DiscreteSlider/DiscreteSlider";

function AudienceDetails() {
  const [whatsappMaleViews, setWhatsAppMaleViews] = useState(50);
  const [facebookMaleViews, setFacebookMaleViews] = useState(50);
  const [instagramMaleViews, setInstagramMaleViews] = useState(50);

  const { platforms } = useSelector((state) => state.savePromoter);

  return (
    <Box sx={{ my: 2 }}>
      <Paper variant="outlined" sx={{ width: "75vw", p: 1 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1 }}>
          Your Social Media Audience
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "#336cad",
            mx: 1,
          }}
        >
          Give some weights on your openion,
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontStyle: "italic",
            color: "#336cad",
            mx: 1,
            mb: 1,
          }}
        >
          (Approximate level of accuracy expected for below details)
        </Typography>
        <Divider />

        {/* question 01 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 2,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#336cad",
              mx: 1,
            }}
          >
            01. Select the percentage of your social media audience on gender
          </Typography>
        </Box>

        {platforms.whatsapp.whatsAppChecked && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: 67,
              mt: 3,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                px: 1,
              }}
            >
              <Box>
                <Typography sx={{ color: "#336cad" }}>
                  WhatsApp Audience
                </Typography>
                <Typography sx={{ color: "#336cad", fontSize: "0.65rem" }}>
                  From my overall status views, approximately
                </Typography>
                <Typography sx={{ color: "#336cad", fontSize: "0.65rem" }}>
                  {whatsappMaleViews}% get from males and{" "}
                  {100 - whatsappMaleViews}% get from females
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "60%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: 1,
                  borderRadius: 3,
                  alignItems: "center",
                  p: 1,
                  px: 2,
                  ml: 1,
                }}
              >
                <Typography>Male {whatsappMaleViews}</Typography>
                <Man />
                <Box sx={{ mt: 1, mx: 1 }}>
                  <DiscreteSlider setViews={setWhatsAppMaleViews} />
                </Box>
                <Woman />
                <Typography>{100 - whatsappMaleViews} Female</Typography>
              </Box>
            </Box>
          </Box>
        )}

        {platforms.facebook.facebookChecked && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: 67,
              mt: 3,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                px: 1,
              }}
            >
              <Box>
                <Typography sx={{ color: "#336cad" }}>
                  Facebook Audience
                </Typography>
                <Typography sx={{ color: "#336cad", fontSize: "0.65rem" }}>
                  From my overall story views, approximately
                </Typography>
                <Typography sx={{ color: "#336cad", fontSize: "0.65rem" }}>
                  {facebookMaleViews}% get from males and{" "}
                  {100 - facebookMaleViews}% get from females
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "60%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: 1,
                  borderRadius: 3,
                  alignItems: "center",
                  p: 1,
                  px: 2,
                  ml: 1,
                }}
              >
                <Typography>Male {facebookMaleViews}</Typography>
                <Man />
                <Box sx={{ mt: 1, mx: 1 }}>
                  <DiscreteSlider setViews={setFacebookMaleViews} />
                </Box>
                <Woman />
                <Typography>{100 - facebookMaleViews} Female</Typography>
              </Box>
            </Box>
          </Box>
        )}

        {platforms.instagram.instagramChecked && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: 67,
              mt: 3,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                px: 1,
              }}
            >
              <Box>
                <Typography sx={{ color: "#336cad" }}>
                  Instagram Audience
                </Typography>
                <Typography sx={{ color: "#336cad", fontSize: "0.65rem" }}>
                  From my overall story views, approximately
                </Typography>
                <Typography sx={{ color: "#336cad", fontSize: "0.65rem" }}>
                  {instagramMaleViews}% get from males and{" "}
                  {100 - instagramMaleViews}% get from females
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "60%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: 1,
                  borderRadius: 3,
                  alignItems: "center",
                  p: 1,
                  px: 2,
                  ml: 1,
                }}
              >
                <Typography>Male {instagramMaleViews}</Typography>
                <Man />
                <Box sx={{ mt: 1, mx: 1 }}>
                  <DiscreteSlider setViews={setInstagramMaleViews} />
                </Box>
                <Woman />
                <Typography>{100 - instagramMaleViews} Female</Typography>
              </Box>
            </Box>
          </Box>
        )}

        {/* question 02 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 3,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#336cad",
              mx: 1,
            }}
          >
            02. Select the age levels you can promote
          </Typography>
        </Box>

        {platforms.whatsapp.whatsAppChecked && (
          <Box>
            <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
              On WhatsApp,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"13 - 15 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"16 - 18 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"19 - 25 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"26 - 35 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"36 - 60 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"Over 60 years"}
              categoryText={"age category"}
            />
          </Box>
        )}

        {platforms.facebook.facebookChecked && (
          <Box>
            <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
              On Facebook,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"13 - 15 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"16 - 18 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"19 - 25 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"26 - 35 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"36 - 60 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"Over 60 years"}
              categoryText={"age category"}
            />
          </Box>
        )}

        {platforms.instagram.instagramChecked && (
          <Box>
            <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
              On Instagram,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"13 - 15 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"16 - 18 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"19 - 25 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"26 - 35 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"36 - 60 years"}
              categoryText={"age category"}
            />
            <CheckAndCountRow
              categoryLabal={"Over 60 years"}
              categoryText={"age category"}
            />
          </Box>
        )}

        {/* question 03 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 3,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#336cad",
              mx: 1,
            }}
          >
            03. Select the educational categories you can promote
          </Typography>
        </Box>

        {platforms.whatsapp.whatsAppChecked && (
          <Box>
            <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
              On WhatsApp,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Ordinary Level"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Advanced Level"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Undergraduates"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Postgraduates"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Others"}
              categoryText={"educational category"}
            />
          </Box>
        )}

        {platforms.facebook.facebookChecked && (
          <Box>
            <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
              On Facebook,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Ordinary Level"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Advanced Level"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Undergraduates"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Postgraduates"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Others"}
              categoryText={"educational category"}
            />
          </Box>
        )}

        {platforms.instagram.instagramChecked && (
          <Box>
            <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
              On Instagram,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Ordinary Level"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Advanced Level"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Undergraduates"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Postgraduates"}
              categoryText={"educational category"}
            />
            <CheckAndCountRow
              categoryLabal={"Others"}
              categoryText={"educational category"}
            />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 3,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#336cad",
              mx: 1,
            }}
          >
            04. Select the regional areas (Provinces) where your social media
            audience is located in
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
            On WhatsApp,
          </Typography>

          <CheckAndCountRow
            categoryLabal={"Western Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Central Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Southern Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Uva Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Nothern Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Eastern Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Sabaragamuwa Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Northern Western Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"North Central Province"}
            categoryText={"province"}
          />
        </Box>

        {/* facebook */}
        <Box>
          <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
            On Facebook,
          </Typography>

          <CheckAndCountRow
            categoryLabal={"Western Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Central Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Southern Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Uva Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Nothern Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Eastern Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Sabaragamuwa Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Northern Western Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"North Central Province"}
            categoryText={"province"}
          />
        </Box>

        {/* instagram */}
        <Box>
          <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
            On Instagram,
          </Typography>

          <CheckAndCountRow
            categoryLabal={"Western Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Central Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Southern Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Uva Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Nothern Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Eastern Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Sabaragamuwa Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"Northern Western Province"}
            categoryText={"province"}
          />
          <CheckAndCountRow
            categoryLabal={"North Central Province"}
            categoryText={"province"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 3,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#336cad",
              mx: 1,
            }}
          >
            05. Choose the languages ​​your social media audience is using
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
            On WhatsApp,
          </Typography>

          <CheckAndCountRow
            categoryLabal={"Sinhala"}
            categoryText={"language users"}
          />
          <CheckAndCountRow
            categoryLabal={"Tamil"}
            categoryText={"language users"}
          />
          <CheckAndCountRow
            categoryLabal={"English"}
            categoryText={"language users"}
          />
        </Box>

        {/* facebook */}
        <Box>
          <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
            On Facebook,
          </Typography>

          <CheckAndCountRow
            categoryLabal={"Sinhala"}
            categoryText={"language users"}
          />
          <CheckAndCountRow
            categoryLabal={"Tamil"}
            categoryText={"language users"}
          />
          <CheckAndCountRow
            categoryLabal={"English"}
            categoryText={"language users"}
          />
        </Box>

        {/* instagram */}
        <Box>
          <Typography sx={{ color: "#336cad", ml: 30, mt: 3 }}>
            On Instagram,
          </Typography>

          <CheckAndCountRow
            categoryLabal={"Sinhala"}
            categoryText={"language users"}
          />
          <CheckAndCountRow
            categoryLabal={"Tamil"}
            categoryText={"language users"}
          />
          <CheckAndCountRow
            categoryLabal={"English"}
            categoryText={"language users"}
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default AudienceDetails;
