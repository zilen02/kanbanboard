import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  horIcon: {
    display: "block",
    width: "35px",
    height: "35px",
    background: "#eeeeee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    color: "#636363",
    "&:hover": {
      background: "#e4e4e6",
    },
  },
  menu: {
    padding: "5rem",
  },
  input: {
    padding: "0.4rem",
    marginRight: "1rem",
    marginLeft: "1rem",
    outline: "none"
  },
  btn: {
    outline: "none",
    border: "none",
    cursor: "pointer",
    padding: "0.43rem",
    marginRight: "1rem",
    color: "#ffffff",
    borderRadius: "2px",
    background: "#16B5EA",
  },
});
