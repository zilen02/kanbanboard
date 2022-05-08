import {
  Grid,
  Typography,
  Menu,
  MenuItem,
  Modal,
  Box,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./style";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Tags from "../tags/Tags";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ModalContent from "../modalContent/ModalContent";

const Card = ({
  card,
  board,
  boards,
  setBoards,
  handleDragEnd,
  handleDragEnter,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDelete = () => {
    setAnchorEl(null);
    const boardIndex = boards.findIndex((item) => item.id === board.id);
    if (boardIndex < 0) return;
    const cardIndex = boards[boardIndex]?.cards?.findIndex(
      (item) => item.id === card.id
    );
    if (cardIndex < 0) return;

    const tempBoards = [...boards];
    tempBoards[boardIndex].cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setCurrentCard({
      cid: "",
      bid: "",
    });
    setModalOpen(false);
  };
  const classes = useStyles();
  const [style, setStyle] = useState({ display: "none" });
  if (!card) {
    return <></>;
  }
  return (
    <>
      <div
        className={classes.card}
        draggable
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
        onDragEnd={() => handleDragEnd(card.id, board.id)}
        onDragEnter={() => handleDragEnter(card.id, board.id)}
      >
        <div className={classes.cardTop}>
          <Typography
            onClick={() => handleModalOpen(card.id, board.id)}
            variant="subtitle1"
            className={classes.cardTitle}
          >
            {card.title}
          </Typography>
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
            <MenuItem onClick={handleDelete}>Delete Card</MenuItem>
          </Menu>
        </div>
        <div className={classes.cardTags}>
          <Grid container spacing={1}>
            {card?.tags?.map((tag, id) => {
              return (
                <Grid item xs="auto">
                  <Tags text={tag.text} color={tag.color} key={id} />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div className={classes.cardFooter}>
          {card.ddate ? (
            <>
              <div className={classes.cardDateIcon}>
                <CalendarTodayIcon fontSize="small" />
              </div>
              <Typography className={classes.cardDateText} variant="subtitle2">
                {card.ddate}
              </Typography>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ModalContent
            card={card}
            board={board}
            boards={boards}
            setBoards={setBoards}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Card;
