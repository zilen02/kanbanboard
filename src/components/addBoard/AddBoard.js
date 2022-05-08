import React, { useState } from "react";
import useStyles from "./style";
import AddIcon from "@mui/icons-material/Add";
import { Menu } from "@material-ui/core";

const AddBoard = ({ boards, setBoards }) => {
  const [bname, setBname] = useState("");
  const [fbname, setFbname] = useState("");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setBname("");
  };
  const handleSubmit = () => {
    if (bname == "") {
      setAnchorEl(null);
    } else {
      newBoard["title"] = bname;
      newBoard["id"] = Date.now() + Math.random() * 2;
      console.log(newBoard);
      setBname("");
      setAnchorEl(null);
      const tempBoards = [...boards];
      tempBoards.push(newBoard);
      setBoards(tempBoards);
      setNewBoard({
        id: Date.now() + Math.random() * 2,
        title: "",
        color: "#636363",
        cards: [],
      });
    }
  };
  const [newBoard, setNewBoard] = useState({
    id: Date.now() + Math.random() * 2,
    title: "",
    color: "#636363",
    cards: [],
  });
  return (
    <>
      <div>
        <div
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className={classes.horIcon}
        >
          <AddIcon />
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className={classes.menu}
        >
          <input
            type="text"
            name="boardname"
            value={bname}
            placeholder="New Board..."
            className={classes.input}
            onChange={(e) => setBname(e.target.value)}
          ></input>
          <button onClick={handleSubmit} type="submit" className={classes.btn}>
            Done
          </button>
        </Menu>
      </div>
    </>
  );
};

export default AddBoard;
