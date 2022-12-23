import { Component } from "react";

export default class UserSearchForm extends Component {

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
                        <label htmlFor="searchName" className="col-form-label">Name</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="searchName" name="searchName" className="form-control" aria-describedby="passwordHelpInline" onChange={this.handleInputChange} />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="searchPhone" className="col-form-label">Phone</label>
                    </div>
                    <div className="col-auto">
                        <input type="integer" id="searchPhone" name="searchPhone" className="form-control" aria-describedby="passwordHelpInline" onChange={this.handleInputChange} />
                    </div>
                </div>
            </form>
        )
    }
}