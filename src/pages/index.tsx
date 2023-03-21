import User from "@/components/User"
import axios from "axios";
import { useEffect, useState } from "react"

export default function Home(props: any) {

	const [userData, setUserData] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			const res = await axios.get("api/user/all");
			// console.log(res.data);
			
			setUserData(res.data);
		}

		fetchUsers();
	}, [])

	function addUser() {
		// setNewUsers([...newUsers, "."]);
    }

	return (
		<div className="admin_console text-center mt-14">
			Admin Console
			<div className="user_list my-8">
				<div className="grid grid-cols-5 mt-6 px-10">
					<div className="">Index</div>
					<div className="">Name</div>
					<div className="">Password</div>
					<div className="">Salary</div>
					<div className=""></div>
				</div>
				{userData.map((u, i) => <User newUser={false} key={u._id} id={u._id} index={i} name={u.name} password={u.password} salary={u.salary} />)}
				<div className="new_users mb-7 mt-7">Add New Users</div>				
				<User index={userData.length} newUser={true} name={""} password={""} salary={""} />
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	return {
		props: {
			hello: "world"
		}
	}
}