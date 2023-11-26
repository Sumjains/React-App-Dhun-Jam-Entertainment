import { Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DashboardQuestions from "./components/DashboardQuestions";
import Graph from "./components/Graph";
import RadioButtons from "./components/RadioButtons";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function AdminDashboard() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isChargeCustomers, setIsChargeCustomers] = useState(false);
  const [isCustomSongMandatory, setIsCustomSongMandatory] = useState(false);
  const [isRegularSongMandatory, setIsRegularSongMandatory] = useState(false);
  const [customSongRequestAmount, setCustomSongRequestAmount] = useState(0);
  const [regularSongRequestAmount1, setRegularSongRequestAmount1] = useState(0);
  const [regularSongRequestAmount2, setRegularSongRequestAmount2] = useState(0);
  const [regularSongRequestAmount3, setRegularSongRequestAmount3] = useState(0);
  const [regularSongRequestAmount4, setRegularSongRequestAmount4] = useState(0);
  const [isFetchData, setIsFetchData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://stg.dhunjam.in/account/admin/${id}`
        );

        if (!response.ok) {
          console.error(response);
        }

        const result = await response.json();
        const data = result.data;

        setName(data.name);
        setLocation(data.location);
        setIsChargeCustomers(data.charge_customers);
        setIsCustomSongMandatory(data.charge_customers);
        setIsRegularSongMandatory(data.charge_customers);
        setCustomSongRequestAmount(data.amount.category_6);
        setRegularSongRequestAmount1(data.amount.category_7);
        setRegularSongRequestAmount2(data.amount.category_8);
        setRegularSongRequestAmount3(data.amount.category_9);
        setRegularSongRequestAmount4(data.amount.category_10);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [isFetchData]);

  const saveData = async () => {
    try {
      const response = await fetch(
        `https://stg.dhunjam.in/account/admin/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: {
              category_6: customSongRequestAmount,
              category_7: regularSongRequestAmount1,
              category_8: regularSongRequestAmount2,
              category_9: regularSongRequestAmount3,
              category_10: regularSongRequestAmount4,
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setIsFetchData(!isFetchData);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
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
      minHeight="100vh"
      spacing={2}
      sx={{ mt: 5, mb: 5 }}
    >
      <item>
        <Typography variant="h1" component="h1">
          {`${name}, ${location} on Dhun Jam`}
        </Typography>
      </item>

      <item>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1 }} sx={{ mt: 2 }}>
          <Grid xs={3} />
          <Grid xs={3}>
            <item>
              <DashboardQuestions question="Do you want to charge your customers for requesting songs?" />
            </item>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <item>
              <RadioButtons value={isCustomSongMandatory ? "yes" : "no"} />
            </item>
          </Grid>
          <Grid xs={3} />

          <Grid xs={3} />
          <Grid xs={3}>
            <item>
              <DashboardQuestions question="Custom song request amount-" />
            </item>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <item>
              <TextField
                inputProps={{ style: { textAlign: "center" } }}
                type="number"
                InputProps={{
                  readOnly: !isChargeCustomers,
                  inputProps: { min: 99 },
                }}
                required={isChargeCustomers}
                value={customSongRequestAmount}
                onChange={(event) =>
                  setCustomSongRequestAmount(event.target.value)
                }
              />
            </item>
          </Grid>
          <Grid xs={3} />

          <Grid xs={3} />
          <Grid xs={3}>
            <item>
              <DashboardQuestions question="Regular song request amounts, from high to low-" />
            </item>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <item>
              <Grid container spacing={1}>
                <Grid xs={3}>
                  <item>
                    <TextField
                      type="number"
                      required={isChargeCustomers}
                      InputProps={{
                        readOnly: !isChargeCustomers,
                        inputProps: { min: 79 },
                      }}
                      value={regularSongRequestAmount1}
                      onChange={(event) =>
                        setRegularSongRequestAmount1(event.target.value)
                      }
                    />
                  </item>
                </Grid>
                <Grid xs={3}>
                  <item>
                    <TextField
                      type="number"
                      required={isChargeCustomers}
                      InputProps={{
                        readOnly: !isChargeCustomers,
                        inputProps: { min: 59 },
                      }}
                      value={regularSongRequestAmount2}
                      onChange={(event) =>
                        setRegularSongRequestAmount2(event.target.value)
                      }
                    />
                  </item>
                </Grid>
                <Grid xs={3}>
                  <item>
                    <TextField
                      type="number"
                      required={isChargeCustomers}
                      InputProps={{
                        readOnly: !isChargeCustomers,
                        inputProps: { min: 39 },
                      }}
                      value={regularSongRequestAmount3}
                      onChange={(event) =>
                        setRegularSongRequestAmount3(event.target.value)
                      }
                    />
                  </item>
                </Grid>
                <Grid xs={3}>
                  <item>
                    <TextField
                      type="number"
                      required={isChargeCustomers}
                      InputProps={{
                        readOnly: !isChargeCustomers,
                        inputProps: { min: 19 },
                      }}
                      value={regularSongRequestAmount4}
                      onChange={(event) =>
                        setRegularSongRequestAmount4(event.target.value)
                      }
                    />
                  </item>
                </Grid>
              </Grid>
            </item>
          </Grid>
          <Grid xs={3} />
        </Grid>
      </item>

      <item style={{ width: "600px" }}>
        {isChargeCustomers && (
          <Graph
            custom={customSongRequestAmount}
            category1={regularSongRequestAmount1}
            category2={regularSongRequestAmount2}
            category3={regularSongRequestAmount3}
            category4={regularSongRequestAmount4}
          />
        )}
      </item>

      <item>
        <Button
          size="large"
          sx={{ "&:hover": { border: "1px solid #F0C3F1" } }}
          onClick={saveData}
          disabled={
            !isChargeCustomers ||
            (isChargeCustomers &&
              (customSongRequestAmount < 99 ||
                regularSongRequestAmount1 < 79 ||
                regularSongRequestAmount2 < 59 ||
                regularSongRequestAmount3 < 39 ||
                regularSongRequestAmount4 < 19))
          }
        >
          Save
        </Button>
      </item>
    </Stack>
  );
}

export default AdminDashboard;
