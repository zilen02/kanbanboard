import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    marginLeft: "5rem",
    marginRight: "5rem",
    marginTop: "3rem",
    marginBottom: "3rem",
    width: "100%",
    height: "100%",
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar-track": {
      borderRadius: "30px",
      backgroundColor: "#ffffff",
    },
    ["@media (max-width:960px)"]: {
      marginLeft: "1rem",
      marginRight: "1rem",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
});
