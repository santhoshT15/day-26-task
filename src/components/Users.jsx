import React, { useState } from 'react'
import userList from './data'
import Navbar from './Navbar';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import { Link } from 'react-router-dom';
function Users() {

    const [users, setUsers] = useState(userList);

    const addUser = user => {
        // user.id = users.length + 1;
        user.id= users[users.length-1].id + 1;
        setUsers([...users, user]);
      }

    const deleteUser = id => 
        setUsers(users.filter(user => user.id !== id));

    const [editing, setEditing] = useState(false);
    const initialUser = {id:null, name:"",username:""};
    const [currentUser, setCurrentUser] = useState(initialUser);

    const editUser = (id, user) => {
        setEditing(true);
        setCurrentUser(user);
    }
    const updateUser = (newUser) =>{
        setUsers(users.map (user => (user.id === currentUser.id ? newUser : user)));
    }

  return (<div>
    <Navbar></Navbar>

    <div className="container">
        <div className="row mt-5">
            <div className="col-lg-4 col-md-5 col-12">
                <div className="formcontainer">
                {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUser
              currentUser={currentUser}
              setEditing={setEditing}
              updateUser={updateUser}
              />
          </div>
         ):(
          <div>
            <h2>Add User</h2>
            <CreateUser addUser={addUser} />
          </div>

         )
          }
                </div>
            </div>
            <div className="col-lg-8 col-md-7">
                <div className="tablecontainer">
                    <table className="table">
                            <thead>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                            </thead>
                            <tbody>
                            {users.length > 0 ? (
                                users.map (user => {
                                    const {id, name, username} = user;
                                    return(
                                        <tr>
                                            <th scope="row">{id}</th>
                                            <td>{name}</td>
                                            <td>{username}</td>
                                            <td>
                                                <Link to="/profile" className="btn btn-success"  >Profile</Link>
                                                <button className="btn btn-danger" onClick={() => deleteUser(id)}>Delete</button>
                                                <button className="btn btn-primary" onClick={() => editUser(id, user)}>Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            ):(
                                <tr>
                                    <th scope="row">No User Found</th>
                                </tr>
                            ) }
                            </tbody>
                     </table>
                </div>
            </div>
        </div>
        
        <button>Create User</button>
    </div>
    </div>
  )
}

export default  Users