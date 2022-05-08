import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "28rem",
    height: "18rem",
    background: "#ffffff",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    ["@media (max-width:600px)"]: {
      width: "18rem",
      height: "20rem",
    },
  },
  content: {
    overflowY: "auto",
    flex: 0.95,
  },
  btn: {
    flex: 0.05,
    width: "30%",
    padding: "0.4rem",
    fontSize: "1.2rem",
    outline: "none",
    border: "none",
    cursor: "pointer",
    marginRight: "1rem",
    color: "#ffffff",
    borderRadius: "2px",
    background: "#16B5EA",
    marginTop: "1rem",
  },
  modalHeading: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    marginBottom: "2rem",
    ["@media (max-width:960px)"]: {
      gap: "0.2rem",
    },
  },
  head: {
    color: "#1f1f1f",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
});
