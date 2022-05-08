import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    height: "fit-content",
    background: "#ffffff",
    padding: "0.4rem",
    borderRadius: "3px",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  horIcon: {
    display: "block",
    width: "25px",
    height: "25px",
    background: "#eeeeee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    color: "#636363",
  },
  cardTitle: {
    cursor: "pointer"
  },
  cardTags: {
    marginBottom: "1rem",
  },
  cardFooter: {
    display: "flex",
    color: "#636363",
  },
  cardDateIcon: {
    marginRight: "0.4rem",
  },
});
