import { Component } from "react";

export default class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.add(this.state.name, this.state.phone)
        this.setState({ name: '', phone: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="name" className="col-form-label">Name</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="inputPassword6" name="name" className="form-control" aria-describedby="passwordHelpInline" onChange={this.handleInputChange} value={this.state.name} />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="phone" className="col-form-label">Phone</label>
                    </div>
                    <div className="col-auto">
                        <input type="integer" id="phone" name="phone" className="form-control" aria-describedby="passwordHelpInline" onChange={this.handleInputChange} value={this.state.phone} />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success" type="submit"><i class="fa-regular fa-circle-check"></i> Save</button>
                        <button className="btn btn-warning text-light" onClick={this.props.cancel}><i class="fa-solid fa-ban"></i> Cancel</button>
                    </div>
                </div>
            </form>
        )
    }
}