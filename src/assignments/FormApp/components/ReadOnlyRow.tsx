import React from "react";

type ReadRowProps = {
  contact:any,
  handleEditClick:any,
  handleDeleteClick:any

}


const ReadOnlyRow = (props:ReadRowProps) => {
  return (
    <tr>
      <td>{props.contact.name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.dob}</td>
      <td>{props.contact.gender}</td>
      <td>{props.contact.file}</td>
      <td>{props.contact.education}</td>
      <td>{props.contact.password}</td>
      <td>
        <button
          type="button"
          onClick={(event) => props.handleEditClick(event, props.contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => props.handleDeleteClick(props.contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
