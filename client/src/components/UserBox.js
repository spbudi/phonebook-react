import { Component } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import UserSearchForm from "./UserSearchForm";

export default class UserBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                { name: 'Budi', phone: 'Madiun' },
                { name: 'Windy', phone: 'Tulungagung' }
            ]
        }
    }

    addUser = (name, phone) => {
        this.setState(function (state, props) {
            return {
                users: [
                    {
                        name,
                        phone
                    }, ...state.users
                ]
            }
        })
    }

    showAdd = (props) => {
        if (!props.show) {
            return null;
        }
        return (
            <div className="card mt-4">
            <div className="card-header">
                <h6>Adding Form</h6>
            </div>
            <div className="card-body">
                <UserForm add={this.addUser} cancel={this.handleCancelClick}/>
            </div>
        </div>
        );
    }

    handleClickAdd = () => {
        this.setState(state => ({
            isAdd: !state.isAdd
        }));
    }

    handleCancelClick = () => {
        this.setState({
            isAdd: false
        });
    }

    render() {

        return (
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header text-center p-4">
                        <h1>Phone Book Apps</h1>
                    </div>
                </div>
                <div>
                    {this.state.isAdd ? <this.showAdd show={this.state.isAdd} /> : <button className='btn btn-primary mt-4' onClick={this.handleClickAdd} ><i class="fa-solid fa-plus"></i> add</button>}
                </div>

                <div className="card mt-4">
                    <div className="card-header">
                        <h6>Search Form</h6>
                    </div>
                    <div className="card-body">
                        <UserSearchForm add={this.addUser} />
                    </div>
                </div>
                <UserList data={this.state.users} />
            </div>

        )
    }
}