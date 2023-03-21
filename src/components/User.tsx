import axios from 'axios';
import React, { useState } from 'react'

const User = (props: any) => {

    const [editMode, setEditMode] = useState(false);

    async function deleteUser() {
        await axios.delete(`http://localhost:3000/api/user/${props._id}`);
    }

    function modifyUser() {
        setEditMode(!editMode);
    }

    function pushEdit() {
        
    }

    return (
        <>
        <div className="i_user grid grid-cols-5 mt-6 px-10">
            <p className="border-2 border-black"><span>{props.index+1}</span></p>
            {!editMode?
            <>
            <p className="border-2 border-black">{props.name}</p>
            <p className="border-2 border-black">{props.pw}</p>
            <p className="border-2 border-black">{props.date}</p></>
            :
            <>
            <input type="text border-2 border-black" defaultValue={props.name} />
            <input type="text border-2 border-black" defaultValue={props.pw} />
            <input type="text border-2 border-black" defaultValue={props.date} />
            </>}
            <div className="modify border-2 border-black">
                <div onClick={deleteUser}>Del</div>
                <div onClick={modifyUser}>{editMode?"":"/Edit"}</div>
                <div onClick={pushEdit}>{editMode?"Done":""}</div>
            </div>

        </div>
        </>
    )
}

export default User

function deleteUser() {
    throw new Error('Function not implemented.');
}
