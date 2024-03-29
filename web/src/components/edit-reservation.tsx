import dayjs, { Dayjs } from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { grey, orange } from "@mui/material/colors";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ReservationSetUp } from "../models/reservationSetup";
import { EditUserReservation } from "../models/editReservation";
import { useFormik } from 'formik';
import * as yup from 'yup';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: orange[900],
    },
  },
  typography: {
    fontSize: 20,
  },
});


function EditReservation({ reservationID }: { reservationID: string }) {

  const token = localStorage.getItem("authToken");
  const [reservationView, setReservationView] = useState<EditUserReservation | null>(null);
  const [editedReservation, setEditedReservation] = useState<EditUserReservation | null>(null);

  const [isDateCompleted, setDateCompleted] = React.useState(false);
  const [isTimeCompleted, setTimeCompleted] = React.useState(false);
  const [reservationSetUp, setReservationSetUp] = useState<ReservationSetUp[]>([]);
  const [selectOffice, setSelectOffice] = useState(false);
  const [selectFloor, setSelectFloor] = useState(false);
  const [selectDesk, setSelectDesk] = useState(false);
  const [selectedOfficeID, setSelectedOfficeID] = useState('');
  const [selectedFloorID, setSelectedFloorID] = useState('');
  const [selectedDeskID, setSelectedDeskID] = useState('');

  const [arrivalTime, setArrivalTime] = React.useState<Dayjs | null>(dayjs()
  );
  const [leavingTime, setLeavingTime] = React.useState<Dayjs | null>(
    dayjs()
  );

  const [timeDiff, setTimeDiff] = useState(true);


  const [startTime, setStartTime] = React.useState<Dayjs | null>(dayjs()
  );
  const [endTime, setEndTime] = React.useState<Dayjs | null>(dayjs()
  );
  const [allDay, setAllDay] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const [isDateSelected, setDateSelected] = useState(false);


  //if Date changes empty start/end Time and mark that date has changed
  const handleDateChange = (newValue: Dayjs | null) => {
    setAllDay(false);
    setValue(newValue);
    if (newValue) {
      setDateSelected(true);
      setDateCompleted(true);
      setDisabledButton(false)
      setSelectedOfficeID("");
      setSelectedFloorID("");
      setSelectedDeskID("");
      setEndTime(null);
      setStartTime(null);
    } else {
      setDateCompleted(false);
      setDateSelected(false);
    }
  };

  // All day button
  const handleAllDayToggle = (event: React.ChangeEvent<HTMLInputElement>) => {

    setAllDay(event.target.checked);
    if (event.target.checked) {
      setStartTime(dayjs().set("hour", 7).set("minute", 0));
      setEndTime(dayjs().set("hour", 18).set("minute", 0));
      setTimeCompleted(true);
      setDisabledButton(false)
      setSelectedOfficeID("");
      setSelectedFloorID("");
      setSelectedDeskID("");
    } else {
      setTimeCompleted(!!startTime && !!endTime);
      setSelectedOfficeID("");
      setSelectedFloorID("");
      setSelectedDeskID("");
    }
  };

  //sets new value for startTime if it was changed 
  const handleStartTimeChange = (newValue: Dayjs | null) => {
    if (newValue && !allDay) {
      setStartTime(newValue);
      setDisabledButton(false)
      setSelectedOfficeID("");
      setSelectedFloorID("");
      setSelectedDeskID("");
      if (endTime) {
        setTimeCompleted(false);
      } else {
        setTimeCompleted(true);
      }
    } else {
      setStartTime(null);
      setTimeCompleted(false);
    }
  };

  //sets new value for endTime if it was changed and mark that time was completed
  const handleEndTimeChange = (newValue: Dayjs | null) => {
    if (newValue && !allDay) {
      setEndTime(newValue);
      setDisabledButton(false)
      if (startTime) {
        setTimeCompleted(false);
        setSelectedOfficeID("");
        setSelectedFloorID("");
        setSelectedDeskID("");
      } else {
        setTimeCompleted(true);
      }
    } else {
      setEndTime(null);
      setTimeCompleted(false);
    }
  };

  //takes the date from reservation and sets the value for date
  useEffect(() => {
    if (reservationView) {
      const formattedArrivalTime = dayjs(reservationView.arrivalTime);
      setValue(formattedArrivalTime);
    }
  }, [reservationView]);

  // Push the reservation that we want to edit into UI
  // in order to see the current reservation
  useEffect(() => {
    if (reservationView) {
      setSelectedOfficeID(reservationView.officeID);
      setSelectedFloorID(reservationView.floorID);
      setSelectedDeskID(reservationView.deskID);
    }
  }, [reservationView]);

  //After changing date set all fields except Arrival/Leaving Time disabled and value to null
  useEffect(() => {
    if (isDateCompleted && isTimeCompleted) {
      setSelectOffice(true);
      setSelectFloor(true);
      setSelectDesk(true);
      setSelectedOfficeID('');
      setSelectedFloorID('');
      setSelectedDeskID('');
    } else {
      setSelectOffice(false);
      // setSelectFloor(false);
      // setSelectDesk(false);
    }
  }, [isDateCompleted, isTimeCompleted]);

  // Formating date according to database preferences
  useEffect(() => {
    if (value) {
      const datePart = value.format("YYYY-MM-DD");

      if (startTime) {
        const adjustedStartTime = startTime.add(3, 'hour');
        setArrivalTime(dayjs(`${datePart}T${adjustedStartTime.format("HH:mm:ss")}`));
      }

      if (endTime) {
        const adjustedEndTime = endTime.add(3, 'hour');
        setLeavingTime(dayjs(`${datePart}T${adjustedEndTime.format("HH:mm:ss")}`));
      }
    }
  }, [startTime, endTime, value]);

  // Get all available desks along with offices/floors from database using arrivalTime and leavingTime
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://localhost:7156/api/Desk/availableDesks?arrivalTime=${arrivalTime}&leavingTime=${leavingTime}`;

        const id = reservationView?.reservationID;
        if (id) {
          url += `&id=${id}`;
        }

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setReservationSetUp(data);

      } catch (error) {
        console.error('Unknown error occurred:', error);
      }

      console.log(reservationSetUp.length)
    };
    fetchData();
  }, [arrivalTime, leavingTime, reservationView]);

  //remove duplicated Officces by id
  const uniqueOffices: ReservationSetUp[] = reservationSetUp
    ? reservationSetUp.reduce((acc: ReservationSetUp[], curr: ReservationSetUp) => {
      if (!acc.find((item: ReservationSetUp) => item.officeID === curr.officeID)) {
        acc.push(curr);
      }
      return acc;
    }, [])
      .map((reservationSetUp: ReservationSetUp) => ({
        officeID: reservationSetUp.officeID,
        officeName: reservationSetUp.officeName,
        floorID: reservationSetUp.floorID,
        floorName: reservationSetUp.floorName,
        deskID: reservationSetUp.deskID,
        deskName: reservationSetUp.deskName
      }))
    : [];

  //remove duplicated Floors by id
  const uniqueFloors: ReservationSetUp[] = reservationSetUp
    ? reservationSetUp.filter((curr: ReservationSetUp, index: number, arr: ReservationSetUp[]) => {
      const firstIndex = arr.findIndex((item) => item.floorID === curr.floorID);
      return index === firstIndex && curr.officeID === selectedOfficeID;
    })
      .map((reservationSetUp: ReservationSetUp) => ({
        officeID: reservationSetUp.officeID,
        officeName: reservationSetUp.officeName,
        floorID: reservationSetUp.floorID,
        floorName: reservationSetUp.floorName,
        deskID: reservationSetUp.deskID,
        deskName: reservationSetUp.deskName,
      }))
    : [];

  //remove duplicated Desks by id
  const uniqueDesks: ReservationSetUp[] = reservationSetUp
    ? reservationSetUp.filter((curr: ReservationSetUp, index: number, arr: ReservationSetUp[]) => {
      const firstIndex = arr.findIndex((item) => item.deskID === curr.deskID);

      return index === firstIndex && curr.officeID === selectedOfficeID && curr.floorID === selectedFloorID;
    })
      .map((reservationSetUp: ReservationSetUp) => ({
        officeID: reservationSetUp.officeID,
        officeName: reservationSetUp.officeName,
        floorID: reservationSetUp.floorID,
        floorName: reservationSetUp.floorName,
        deskID: reservationSetUp.deskID,
        deskName: reservationSetUp.deskName,
      }))
    : [];

  const [disabledButton, setDisabledButton] = useState(false);


  const handleEditClick = async () => {

    const editedReservation = {
      reservationID: reservationView?.reservationID,
      arrivalTime: arrivalTime?.toDate() || new Date(),
      leavingTime: leavingTime?.toDate() || new Date(),
      officeID: selectedOfficeID,
      floorID: selectedFloorID,
      deskID: selectedDeskID,
    }
    try {

      const response = await fetch(`https://localhost:7156/api/Reservation/EditReservation`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editedReservation)
      });
      if (response.ok) {
        window.location.reload();
      } else {
        console.error('Error editing reservation');
      }
    } catch (error) {
      console.error('Error editing reservation:', error);
    }
  };

  //Get the reservation from backend that has following params:
  // reservationID : string;
  // arrivalTime :string ;
  // leavingTime :string;
  // officeName : string;
  // officeID : string;
  // floorName : string;
  // floorID : string;
  // deskName : string;
  // deskID : string;
  useEffect(() => {
    const fetchReservationView = async () => {
      try {
        const response = await fetch(`https://localhost:7156/api/Reservation/${reservationID}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const Data = await response.json();
        setReservationView(Data);

      } catch (error) {
        console.error('Unknown error occurred:', error);
      }
    }
    fetchReservationView();
  }, [reservationID]);

  // set StartTime and EndTime according to reservation that user selected to edit
  useEffect(() => {
    if (reservationView) {
      const formattedArrivalTime = dayjs(reservationView.arrivalTime);
      setStartTime(formattedArrivalTime);
      const formattedLeavingTime = dayjs(reservationView.leavingTime);
      setEndTime(formattedLeavingTime);
    }
  }, [reservationView]);
  const shouldDisableDate = (date: Dayjs) => {
    return date.day() === 0 || date.day() === 6;
  };


  

  const handleOfficeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOfficeID(event.target.value);
    setSelectFloor(false);
    setSelectDesk(true);
    setSelectedDeskID("");
    setSelectedFloorID("");
    setDisabledButton(false);
  };
  const handleFloorChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedFloorID(event.target.value);
    setSelectDesk(false);
    setDisabledButton(false);
  }
  const handleDeskChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedDeskID(event.target.value);
    if (startTime !== endTime){
        setDisabledButton(true);
    }
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            p: 2,
            mb: 3,
          }}
        >
          <div></div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              p: 2,
              mb: 2,
            }}
          ></Box>
        </Box>
        <FormControl sx={{ width: "64ch", mb: 5 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DatePicker
                label="Date"
                value={value}
                onChange={handleDateChange}
                minDate={dayjs()}
                shouldDisableDate={shouldDisableDate}
                sx={{ width: "64ch" }}
              />

              <FormGroup sx={{ mr: -20, ml: "auto" }}>
                <FormControlLabel
                  control={
                    <Switch checked={allDay} disabled={value === null} onChange={handleAllDayToggle} />
                  }
                  label="All day"
                />
              </FormGroup>
            </Box>
          </LocalizationProvider>
        </FormControl>

        {!allDay && (
          <div>
            <Box sx={{ display: "flex", mb: 3 }}>
              <DemoItem component="TimePicker">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <>
                      <TimePicker
                        label="Start"
                        value={startTime}
                        onChange={handleStartTimeChange}
                        shouldDisableTime={(time) => {
                          const hour = dayjs(time).hour();
                          const minutes = dayjs(time).minute();

                          return hour < 7 || (minutes !== 0 && minutes !== 30) || hour > 18;
                        }}
                        maxTime={
                          endTime
                            ? dayjs(endTime).subtract(30, 'minutes')
                            : undefined
                        }

                        disabled={value === null}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderColor: grey[900],
                            width: "18ch",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: grey[900],
                          },
                          "& .MuiOutlinedInput-input": {
                            color: grey[900],
                          },
                        }}
                      />
                      <Typography
                        variant="body1"
                        component="span"
                        style={{ margin: "0 10px" }}
                      >
                        to
                      </Typography>
                      <TimePicker
                        label="End"
                        onChange={handleEndTimeChange}
                        shouldDisableTime={(time) => {
                          const hour = dayjs(time).hour();
                          const minutes = dayjs(time).minute();

                          return hour < 7 || (minutes !== 0 && minutes !== 30) || hour > 18;
                        }}
                        disabled={value === null}
                        value={endTime}
                        minTime={
                          startTime
                            ? dayjs(startTime).add(30, 'minutes')
                            : undefined
                        }

                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderColor: grey[900],
                            width: "18ch",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: grey[900],
                          },
                          "& .MuiOutlinedInput-input": {
                            color: grey[900],
                          },
                        }}
                      />
                    </>
                  </div>
                </LocalizationProvider>
              </DemoItem>
            </Box>
          </div>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            mt: 2,
          }}
        >
          <FormControl sx={{ width: "64ch", mb: 5 }}>
            <InputLabel id="select-office">Office</InputLabel>
            <Select
              labelId="select-office"
              id="select-office"
              value={selectedOfficeID || ""}
              label="Office"
              disabled={endTime === null || startTime === null || endTime <= startTime}
              onChange={handleOfficeChange}

            >
              {uniqueOffices?.map((reservationSetUp: ReservationSetUp, index: number) => (
                <MenuItem key={index} value={reservationSetUp.officeID}>
                  {reservationSetUp.officeName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: "25ch", mb: 5, alignItems: "left" }}>
            <InputLabel id="select-floor">Floor</InputLabel>
            <Select
              labelId="select-floor"
              id="select-floor"
              value={selectedFloorID || ""}
              label="Floor"
              disabled={selectedOfficeID === ""}
              onChange={handleFloorChange}

            >

              {uniqueFloors?.map((reservationSetUp: ReservationSetUp, index: number) => (
                <MenuItem key={index} value={reservationSetUp.floorID}>
                  {reservationSetUp.floorName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: "25ch", mb: 5, alignItems: "left" }}>
            <InputLabel id="select-desk">Desk</InputLabel>
            <Select
              labelId="select-desk"
              id="select-desk"
              value={selectedDeskID || ""}
              label="Desk"

              onChange={handleDeskChange}

              disabled={selectedFloorID === ""}
            >

              {uniqueDesks?.map((reservationSetUp: ReservationSetUp, index: number) => (
                <MenuItem key={index} value={reservationSetUp.deskID}>
                  {reservationSetUp.deskName}
                </MenuItem>
              ))}

            </Select>
          </FormControl>
          <Button type="submit" variant="contained" size="large"
            color="secondary" sx={{
              height: "50px",
              color: "white",
              textTransform: "none",
            }}
            disabled={!disabledButton}
            onClick={handleEditClick}>
            Submit
          </Button>
        </Box>
      </Box>

    </ThemeProvider>
  );
}

export default EditReservation;


