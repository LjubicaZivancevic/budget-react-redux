import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ entries, deleteEntry, addEntry, editEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
         {...entry}
         deleteEntry={deleteEntry}     
         addEntry={addEntry}
         editEntry={editEntry}
        ></EntryLine>
      ))}
    </Container>
  );
}

export default EntryLines;
