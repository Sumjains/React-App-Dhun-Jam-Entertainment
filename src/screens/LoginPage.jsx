import { Stack, Typography, TextField, Button, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleSignIn = async () => {
    try {
      const url = "https://stg.dhunjam.in/account/admin/login";

      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const id = data.data.id;
        history.push(`/dashboard/${id}`);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        if (errorData.response) {
          alert(errorData.ui_err_msg);
        } else {
          const text = errorData.username
            ? errorData.username
            : errorData.password;
          alert(`${Object.keys(errorData)}: ${text[0]}`);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      minHeight="100vh"
      spacing={6}
    >
      <item>
        <Typography variant="h1" component="h1">
          Venue Admin Login
        </Typography>
      </item>

      <item>
        <TextField
          sx={{ width: "600px" }}
          placeholder="Username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <TextField
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          sx={{ mt: 3, width: "600px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((show) => !show)}
                  edge="end"
                  style={{ color: "#FFFFFF" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </item>
      <item>
        <Button size="large" sx={{ mb: 1 }} onClick={handleSignIn}>
          Sign In
        </Button>
        <br />
        <Link sx={{ color: "#FFFFFF" }} href="#">
          New Registration?
        </Link>
      </item>
    </Stack>
  );
}

export default LoginPage;
