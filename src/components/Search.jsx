import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
  makeStyles
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0"
    }
  });
});

const TypeSearch = () => {
  const { search } = useStyles();

  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  return (
    <div id="app">
      <FormControl className={search}>
        <TextField
          size="small"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
                onClick={handleClick}
              >
                <ClearIcon />
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    </div>
  );
};

export default TypeSearch;
