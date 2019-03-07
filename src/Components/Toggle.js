import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const Toggle = ({ checked, handleChange, beforeLabel, afterLabel }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            aria-label="beforeLabel"
          />
        }
        label={checked ? afterLabel : beforeLabel}
      />
    </FormGroup>
  );
};

export default Toggle;