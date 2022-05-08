import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Board from "../board/Board";
import useStyles from "./style";
import data from "../../db/boards";
import AddBoard from "../addBoard/AddBoard";

const Boards = () => {
  const classes = useStyles();
  const [boards, setBoards] = useState(data);
  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });
  const handleDragEnd = (cid, bid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === target.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === target.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);

    setTarget({
      bid: "",
      cid: "",
    });
  };
  const handleDragEnter = (cid, bid) => {
    console.log(boards, cid, bid);
    setTarget({ cid, bid });
  };
  return (
    <Grid className={classes.container}>
      {boards?.map((board) => {
        return (
          <Board
            boards={boards}
            board={board}
            setBoards={setBoards}
            handleDragEnd={handleDragEnd}
            handleDragEnter={handleDragEnter}
            key={board.id}
          />
        );
      })}
      <AddBoard boards={boards} setBoards={setBoards} />
    </Grid>
  );
};

export default Boards;
