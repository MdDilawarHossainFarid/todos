import React from "react";
import PropType from "prop-types";
import { Button, ButtonGroup } from "reactstrap";

const BulkController = ({ clearSelected, clearCompleted, reset }) => (
  <ButtonGroup>
    <Button color="danger" onClick={clearSelected}>
      Clear Selected
    </Button>
    <Button color="danger" onClick={clearCompleted}>
      Clear Completed
    </Button>
    <Button color="danger" onClick={reset}>
      Reset
    </Button>
  </ButtonGroup>
);

BulkController.propTypes = {
  clearSelected: PropType.func.isRequired,
  clearCompleted: PropType.func.isRequired,
  reset: PropType.func.isRequired,
};

export default BulkController;
