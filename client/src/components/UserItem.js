export default function UserItem(props, index){
        return (
            <tr>
                <td>{props.no}</td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>
                <button className="btn btn-success" type="submit"><i class="fa-solid fa-pencil"></i> Edit</button>
                <button className="btn btn-danger" type="submit"><i class="fa-regular fa-trash-can"></i> Delete</button>
                </td>
            </tr>
        )
}