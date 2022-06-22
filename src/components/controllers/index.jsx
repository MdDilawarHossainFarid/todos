import React from "react";
import PropType from "prop-types";
import { Row, Col } from "reactstrap";

import SearchPanel from "./search-panel";
import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

const Controller = ({
  term,
  handleSearch,
  toggleForm,
  handleFilter,
  view,
  changeView,
  clearSelected,
  clearCompleted,
  reset,
}) => (
  <div>
    <SearchPanel
      term={term}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    <Row className="my-4">
      <Col md={{ size: 4 }}>
        <FilterController handleFilter={handleFilter} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }} className="d-flex">
        <div className="ml-auto">
          <BulkController
            clearSelected={clearSelected}
            clearCompleted={clearCompleted}
            reset={reset}
          />
        </div>
      </Col>
    </Row>
  </div>
);

Controller.proptype = {
  term: PropType.string.isRequired,
  view: PropType.string.isRequired,
  handleSearch: PropType.func.isRequired,
  toggleForm: PropType.func.isRequired,
  handleFilter: PropType.func.isRequired,
  changeView: PropType.func.isRequired,
  clearSelected: PropType.func.isRequired,
  clearCompleted: PropType.func.isRequired,
  reset: PropType.func.isRequired,
};

export default Controller;
