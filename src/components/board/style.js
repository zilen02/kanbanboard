import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    minWidth: "300px",
    width: "300px",
    // background: "rgba(54,0,141,0.25)",
    marginRight: "2rem",
    padding: "10px",
    borderRadius: "4px",
    height: "100%",
  },
  boardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  boardTitle: {
    // background: "rgba(54,0,141,0.45)",
    paddingRight: "6px",
    paddingLeft: "6px",
    borderRadius: "4px",
    color: "#fff",
  },
  boardCards: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    gap: "10px",
  },
  horIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // color: "rgba(54, 0, 141, 0.6)",
  },
});
