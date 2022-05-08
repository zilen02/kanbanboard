import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./style";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

const ModalContent = ({ card, board, boards, setBoards }) => {
  const classes = useStyles();
  const [title, setTitle] = useState(card.title);
  const [date, setDate] = useState(card.ddate);

  const handleSave = () => {
    const boardIndex = boards.findIndex((item) => item.id === board.id);
    if (boardIndex < 0) return;
    const cardIndex = boards[boardIndex]?.cards?.findIndex(
      (item) => item.id === card.id
    );
    if (cardIndex < 0) return;

    const tempBoards = [...boards];
    tempBoards[boardIndex].cards[cardIndex]["title"] = title;
    const currDate = moment(date.toISOString()).format("MMMM DD, YYYY");
    tempBoards[boardIndex].cards[cardIndex]["ddate"] = currDate;
    setBoards(tempBoards);
  };

  return (
    <Box className={classes.box}>
      <div className={classes.content}>
        <div className={classes.modalHeading}>
          <Typography variant="subtitle1" className={classes.head}>
            Title :
          </Typography>
          <TextField
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></TextField>
        </div>
        <div className={classes.modalHeading}>
          <Typography variant="subtitle1" className={classes.head}>
            Date :
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <button className={classes.btn} onClick={handleSave}>
        Save
      </button>
    </Box>
  );
};

export default ModalContent;
