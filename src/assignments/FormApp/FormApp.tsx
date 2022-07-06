import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./FormApp.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import NavBar from "../../components/navBar/NavBar";
import {NewContacts} from './Interface'



const FormApp = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    file: "",
    education: "",
    password: ""
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    file: "",
    education: "",
    password: ""
  });

  const [editContactId, setEditContactId] = useState(nanoid());

  const handleAddFormChange:any = (event:React.ChangeEvent<HTMLInputElement>) => {
    // const fieldName:Types|null|string = event.target.getAttribute("name")   
    // const newFormData = { ...addFormData };
    // console.log(newFormData);
    // const fieldValue = event.target.value;
    event.preventDefault();
    setAddFormData({...addFormData,[event.target.name] : event.target.value});
  };
  

  const handleEditFormChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    // const fieldName = event.target.getAttribute("name");
    // const newFormData = { ...editFormData };
    // newFormData[fieldName] = fieldValue;
    // setEditFormData(newFormData);
    // const fieldValue = event.target.value;
    event.preventDefault();
    setEditFormData({...editFormData,[event.target.name]: event.target.value});
  };

  const handleAddFormSubmit:any = (event:React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();

    const newContact:NewContacts = {
      id:  nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      dob: addFormData.dob,
      gender: addFormData.gender,
      file: addFormData.file,
      education: addFormData.education,
      password: addFormData.password
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  // console.log(typeof(nanoid())) nanoid() returns a string

  const handleEditFormSubmit:any = (event:React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      email: editFormData.email,
      dob: editFormData.dob,
      gender: editFormData.gender,
      file: editFormData.file,
      education: editFormData.education,
      password: editFormData.password
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(nanoid());


  };

  const handleEditClick = (event:React.ChangeEvent<HTMLInputElement>, contact:any):void => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      id:contact.id,
      name: contact.name,
      email: contact.email,
      dob: contact.dob,
      gender: contact.gender,
      file: contact.file,
      education: contact.education,
      password: contact.password
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(nanoid());
  };

  const handleDeleteClick = (contactId:any) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    
    <div className="app-container">
      <NavBar />
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>File</th>
              <th>Education</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter an Email..."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="dob"
          required
          placeholder="Enter DOB"
          onChange={handleAddFormChange}
        />
        <input type="file" name="file" onChange={handleAddFormChange} />
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={handleAddFormChange}
        />{" "}
        Female
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={handleAddFormChange}
        />{" "}
        Male
        <input
          type="radio"
          value="Other"
          name="gender"
          onChange={handleAddFormChange}
        />{" "}
        Other
        <div>
          <label>Level of Education</label>
          <select name="education" onChange={handleAddFormChange}>
            <option value="Junior schooling">Junior schooling</option>
            <option value="secondary schooling">secondary schooling</option>
            <option value="Higher secondary schooling">
              Higher secondary schooling
            </option>
            <option value="College">College</option>
            <option value="University">University</option>
          </select>
        </div>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormApp;
function typeOf(arg0: string): any {
  throw new Error("Function not implemented.");
}

