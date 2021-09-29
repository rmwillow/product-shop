import React from "react";
import { Form, FormControl } from "react-bootstrap";
import "../style.css";
const SearchBox = () => {
  return (
    <Form inline>
      <FormControl
        type="text"
        name="seacrh"
        //onChange={handleSearchInput}
        placeholder="Search product..."
        className="mr-sm-2"
      />
    </Form>
  );
};

export default SearchBox;