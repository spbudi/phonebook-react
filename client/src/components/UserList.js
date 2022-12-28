import UserItem from "./UserItem"
import React from "react"
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
                        <UserItem 
                        key={user.id} 
                        no={index + 1} 
                        id= {user.id}
                        name={user.name} 
                        phone={user.phone} 
                        sent= {user.sent}
                        remove={()=> props.removeUser(user.id)} 
                        resend={()=> props.resendUser(user.id, user.name, user.phone)} 
                        update={props.updateUser}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}