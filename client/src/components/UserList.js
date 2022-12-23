import UserItem from "./UserItem"
export default function UserList(props) {
    return (
        <table className="table table-striped mt-4">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((user, index) => {
                    return (
                        <UserItem key={index} no={index + 1} name={user.name} phone={user.phone} />
                    )
                })}
            </tbody>
        </table>
    )
}