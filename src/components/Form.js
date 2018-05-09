import React, { Component } from "react";

class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: 'title placeholder',
            body: 'body placeholder'
        }
    }

    onTitleChange = (event) => {
        this.setState({
            title: event.target.value,
            body: this.state.body
        })
    }

    onBodyChange = (event) => {
        this.setState({
            title: this.state.title,
            body: event.target.value
        })
    }

    submitForm = (event) => {
        console.log(this.state)
        event.preventDefault()
        this.setState({title: '', body: ''});
    }   
    
    render() {
        return (
            <div className="row">
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <input type="title" class="form-control"  placeholder="Title" value={this.state.title} onChange={this.onTitleChange}/>
                        <br/>
                        <textarea className="form-control" id="exampleTextarea" placeholder="Body"rows="3" value={this.state.body} onChange={this.onBodyChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
          </div>
        )
    }
}

export default Form;