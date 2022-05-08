import { Grid, Typography, Menu, MenuItem, Divider } from "@material-ui/core";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import Card from "../card/Card";
import useStyles from "./style";
import moment from "moment";

const Board = ({
  boards,
  setBoards,
  board,
  handleDragEnd,
  handleDragEnter,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleColor = (e) => {
    const { myValue } = e.currentTarget.dataset;
    console.log(myValue);
    const boardIndex = boards.findIndex((item) => item.id === board.id);
    if (boardIndex < 0) return;

    const tempBoards = [...boards];
    if (myValue == "Gray") {
      tempBoards[boardIndex].color = "#636363";
    } else if (myValue == "Purple") {
      tempBoards[boardIndex].color = "#36008D";
    } else if (myValue == "Green") {
      tempBoards[boardIndex].color = "#00c9b8";
    } else if (myValue == "Pink") {
      tempBoards[boardIndex].color = "#ffb3c1";
    } else if (myValue == "Yellow") {
      tempBoards[boardIndex].color = "#fcd200";
    } else if (myValue == "Red") {
      tempBoards[boardIndex].color = "#fe5e54";
    }
    setBoards(tempBoards);
    setAnchorEl(null);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    const boardIndex = boards.findIndex((item) => item.id === board.id);
    if (boardIndex < 0) return;

    const tempBoards = [...boards];
    tempBoards.splice(boardIndex, 1);
    setBoards(tempBoards);
  };
  const [newCard, setNewCard] = useState({
    id: Date.now() + Math.random() * 2,
    title: "Untitled",
    tags: [],
    desc: "",
    ddate: moment(Date.now()).format("MMMM DD, YYYY"),
  });
  const [style, setStyle] = useState({
    display: "flex",
    opacity: 0,
    color: board.color + "90",
  });
  const classes = useStyles();
  const handleAdd = () => {
    const boardIndex = boards.findIndex((item) => item.id === board.id);
    if (boardIndex < 0) return;
    setNewCard({
      id: Date.now() + Math.random() * 2,
      title: "Untitled",
      tags: [],
      desc: "",
      ddate: moment(Date.now()).format("MMMM DD, YYYY"),
    });
    const tempBoards = [...boards];
    tempBoards[boardIndex].cards.splice(0, 0, newCard);
    setBoards(tempBoards);
  }

  if (!board) {
    return <></>;
  }

  return (
    <>
      <Grid
        style={{ background: board.color + "25" }}
        onMouseEnter={(e) => {
          setStyle({
            display: "flex",
            opacity: 1,
            color: board.color + "90",
          });
        }}
        onMouseLeave={(e) => {
          setStyle({
            display: "flex",
            opacity: 0,
            color: board.color + "90",
          });
        }}
        className={classes.container}
      >
        <div className={classes.boardTop}>
          <Typography
            variant="subtitle1"
            style={{ background: board.color }}
            className={classes.boardTitle}
          >
            {board.title}
            <span> {board.cards.length}</span>
          </Typography>
          <div style={style}>
            <div
              style={style}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={classes.horIcon}
            >
              <MoreHorizRoundedIcon />
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleDelete}>Delete Board</MenuItem>
              <Divider />
              <MenuItem data-my-value={"Purple"} onClick={handleColor}>
                Purple
              </MenuItem>
              <MenuItem data-my-value={"Gray"} onClick={handleColor}>
                Gray
              </MenuItem>
              <MenuItem data-my-value={"Green"} onClick={handleColor}>
                Green
              </MenuItem>
              <MenuItem data-my-value={"Pink"} onClick={handleColor}>
                Pink
              </MenuItem>
              <MenuItem data-my-value={"Yellow"} onClick={handleColor}>
                Yellow
              </MenuItem>
              <MenuItem data-my-value={"Red"} onClick={handleColor}>
                Red
              </MenuItem>
            </Menu>
            <div onClick={handleAdd} className={classes.horIcon}>
              <AddIcon />
            </div>
          </div>
        </div>
        <div className={classes.boardCards}>
          {board.cards?.map((card) => {
            return (
              <Card
                card={card}
                board={board}
                boards={boards}
                setBoards={setBoards}
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDragEnter}
                key={card.id}
              />
            );
          })}
        </div>
      </Grid>
    </>
  );
};

export default Board;
