import { Component } from "react";

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }
    state = this.initialState

    handelChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handelChange}></input>
                <label htmlFor="job">Job</label>
                <input type="text" name="job" id="job" value={job} onChange={this.handelChange}></input>
                <button type="button" onClick={this.submitForm}>Submit</button>
            </form>
        )
    }
}

export default Form