import React from "react";
import PropType from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const FilterController = ({ handleFilter }) => (
  <ButtonGroup>
    <Button onClick={() => handleFilter("All")}>All</Button>
    <Button onClick={() => handleFilter("running")}>Running</Button>
    <Button onClick={() => handleFilter("completed")}>Completed</Button>
  </ButtonGroup>
);

FilterController.propTypes = {
  handleFilter: PropType.func.isRequired,
};

export default FilterController;
