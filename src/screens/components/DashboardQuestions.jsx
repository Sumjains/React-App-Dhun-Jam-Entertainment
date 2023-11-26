import { Typography } from "@mui/material";

function DashboardQuestions({ question }) {
  return (
    <Typography
      variant="body1"
      style={{ maxWidth: "300px", minWidth: "fitContent" }}
    >
      {question}
    </Typography>
  );
}

export default DashboardQuestions;
