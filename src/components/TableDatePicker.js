import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {Form} from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";

function TableDatePicker({ date, setDate }) {
  return (
    <>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        isClearable
        placeholderText="Select date"
      /> 
      {/* <Form.Input value={date} onChange={(date) => setDate(date)}></Form.Input> */}
    </>
  );
}

export default TableDatePicker;
