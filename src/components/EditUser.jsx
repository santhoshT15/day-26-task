import React, { useEffect, useState } from 'react'

function EditUser(props) {
    const [user, setUser] = useState(props.currentUser);

    const handleChange = e =>{
        const {name, value} = e.target;
        setUser({...user,[name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(user.name && user.username){
            props.updateUser(user);
        }
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

  return (
    <div>
        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="" value={user.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">UserName</label>
                <input type="text" className="form-control" name="" value={user.username} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Mail ID</label>
                <input type="email" className="form-control" name="" value={user.mailId} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Location</label>
                <input type="text" className="form-control" name="" value={user.location} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Contact</label>
                <input type="text" className="form-control" name="" value={user.contact} onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Edit user</button>
            <button className="btn btn-secondary" type="submit" onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default EditUser