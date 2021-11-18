import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Search, Button,Input, Form } from "semantic-ui-react";
import { doSearch } from "../actions/entries.actions";
import '../App.css'
function Searchbar({ entries, searchTerm, setSearchTerm }) {


  const dispatch = useDispatch();

 
  return (
    <>



     <Form>
    <Form.Field>
     
      <input onChange={(event) => setSearchTerm(event.target.value)} placeholder='Search...' className='SearchBar' icon="search"/>
    </Form.Field>
  </Form>
     
    </>
  );
}

export default Searchbar;
