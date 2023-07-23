import React, { useEffect, useState } from "react";
import { MdOutlineNoteAlt, MdDeleteForever } from "react-icons/md";
import { NoteStyle, Icons, DeleteIcon } from "../../note-app/note-app.styles";

const Note = ({note, onClick, text, cardBg}) => {

const [ newCardBg, setNewCardBg ] = useState();

useEffect(() => {
  !newCardBg && setNewCardBg(cardBg);
}, [newCardBg])

  return (
    <NoteStyle className={`card shadow ${newCardBg}`}>
      <div className="card-header text-right">
        <Icons>
          <MdOutlineNoteAlt />
          <DeleteIcon>
            <MdDeleteForever onClick={() => onClick(note.id)}/>
          </DeleteIcon>
        </Icons>
      </div>
      <div className="card-body p-0">
        <textarea style={{ border: "none", outline: "none", height: "100%", resize: "none", padding: "10px",  borderRadius: "0 0 5px 5px"}} >{text}</textarea>
      </div>
    </NoteStyle>
  );
};

export default Note;
