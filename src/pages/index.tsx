import User from "@/components/User"
const users = [
    {
		_id: "232",
        name: "u1",
        password: "p123",
        created_on: "12-2-22"
    },
    {
		_id: "232",
        name: "u2",
        password: "p123",
        created_on: "12-2-22"
    },
    {
		_id: "232",
 
		password: "p123",
        created_on: "12-2-22"
    },
    {
		_id: "232",
        name: "u4",
        password: "p123",
        created_on: "12-2-22"
    },
]

export default function Home(props: any) {

	function addUser() {

    }

	return (
		<div className="admin_console text-center mt-14">
			Admin Console
			<div className="user_list my-8">
				{users.map((u, i) => <User key={u._id} index={i} name={u.name} pw={u.password} date={u.created_on} />)}
			</div>
			<div className="add_user mt-20"><button>Add User</button></div>
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