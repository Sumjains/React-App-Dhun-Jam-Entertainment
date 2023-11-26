import { createTheme } from "@mui/material/styles";

const headingFontSize = "32px";
const headingWidth = "600px";
const headingTextAlign = "center";

const theme = createTheme({
  palette: {
    background: {
      default: "#030303",
      secondary: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
    },
  },

  typography: {
    h1: {
      fontSize: headingFontSize,
      maxWidth: headingWidth,
      textAlign: headingTextAlign,
    },
    h2: {
      fontSize: headingFontSize,
      width: headingWidth,
      textAlign: headingTextAlign,
    },
    h3: {
      fontSize: headingFontSize,
      width: headingWidth,
      textAlign: headingTextAlign,
    },
    h4: {
      fontSize: headingFontSize,
      width: headingWidth,
      textAlign: headingTextAlign,
    },
    h5: {
      fontSize: headingFontSize,
      width: headingWidth,
      textAlign: headingTextAlign,
    },
    h6: {
      fontSize: headingFontSize,
      width: headingWidth,
      textAlign: headingTextAlign,
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "16px",
    },
    fontFamily: "Poppins",
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          maxWidth: "600px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FFFFFF", // Set the border color
              borderRadius: 15,
            },
            "&:hover fieldset": {
              borderColor: "#FFFFFF", // Set the border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFFFFF", // Set the border color on focus
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#6741D9",
          width: "600px",
          justifyContent: "center",
          borderRadius: 15,
          fontSize: "16px",
          fontFamily: "Poppins",
          color: "#FFFFFF",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#6741D9",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          "&.Mui-checked": {
            color: "white",
          },
        },
      },
    },
  },
});

export default theme;
