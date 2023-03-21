import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const User = (props: any) => {

    const router = useRouter();
    // console.log(props.id);
    

    const [data, setData] = useState({
        name: props.name,
        password: props.password,
        salary: props.salary,
        edit: props.newUser?true:false
    })

    async function deleteUser() {
        await axios.delete(`http://localhost:3000/api/user/${props.id}`);
        router.reload();
    }

    function modifyUser() {
        const newData = {
            ...data,
            edit: !data.edit
        }
        setData(newData);
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        const newData = {
            name: e.target[0].value,
            password: e.target[1].value,
            salary: Number(e.target[2].value),
            edit: false
        }
        
        const {edit, ...saveData} = newData;

        if(props.newUser) {
            //Create
            await axios.post("api/user", saveData);
        } else {
            //Modify
            await axios.put(`api/user/${props.id}`, saveData);
        }
        router.reload();
        setData(newData);
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="i_user grid grid-cols-5 mt-6 px-10">
            <p className="border-2 border-black"><span>{props.index+1}</span></p>
            {!data.edit?
            <>
            <p className="border-2 border-black">{data.name}</p>
            <p className="border-2 border-black">{data.password}</p>
            <p className="border-2 border-black">{data.salary}</p></>
            :
            <>
            <input type="text" required className="border-2 border-blue-600 text-center" defaultValue={data.name} />
            <input type="text" required className="border-2 border-blue-600 text-center" defaultValue={data.password} />
            <input type="number" required className="border-2 border-blue-600 text-center" defaultValue={data.salary} />
            </>}
            <div className="modify border-2 border-black grid grid-cols-2">
                {props.newUser?<></>:<button className='bg-red-500' onClick={deleteUser}>Del</button>}
                {data.edit?
                <>
                <button type="submit" className={props.newUser?"bg-green-500":'bg-blue-500'}>{props.newUser?"Add":"Done"}</button>
                {props.newUser?<></>:<button className='bg-yellow-500' onClick={(modifyUser)}>Cancel</button>}
                </>
                :
                <button className='bg-blue-500' onClick={modifyUser}>Edit</button>
                }
            </div>

        </form>
        </>
    )
}

export default User

function deleteUser() {
    throw new Error('Function not implemented.');
}
