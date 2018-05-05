import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <div className="row">
                <form action="submit the form">
                    <div className="form-group">
                        <input type="title" class="form-control"  placeholder="Title" />
                        <br/>
                        <textarea className="form-control" id="exampleTextarea" placeholder="Body"rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
          </div>
        )
    }
}

export default Form;