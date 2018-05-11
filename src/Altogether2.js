import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                title: "Andre Nakkurt raises at valuation of $22.5m",
                body: "That Estonian is at it again.  He fucking nailed it."
            },
            {
                title: "Mark's last name is actually Honda",
                body: "Mark Suzuki has fooled us all, his last name is actually from The Power of Dreams"
            },
            {
                title: "BMW M returns to Natural Aspiration",
                body: "BMW will debut a new engine, codenamed 'S56', it will make a return to form for the Bavarian auto maker which has been criticized for losing their way in recent years."
            }
        ]
    }
    render() {
        const titles = this.state.map(post => post.title)
        return (
            <Jumbotron />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <TitleList titles={titles} />
                        {/* <Form /> */}
                    </div>
                    <div className="col-sm-6">
                        <PostList posts={this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">
                    Microblog
                </h1>
            </div>
        )
    }
}

class TitleList extends Component {
    render() {
        return (
            <div>
                <ul className="nav flex-column">
                    {this.props.titles.map(title => (
                        <li className="nav-item">
                            <a className="nav-link active" href="#title-1">
                                {title}
                            </a>
                        </li>                                                
                    ))}
                </ul>
            </div>
        )
    }
}

class PostList extends Component {
    render() {
        return (
            <div>
                <h1>Top Heading</h1>
                {this.props.post.map(post => (
                    <Post title={post.title} body={post.body}/>
                ))}
            </div>
        )
    }
}

class Post extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'input title',
            body: 'input body'
        }
    }

    onTitleChange = (event) => {
        this.setState({
            title: event.target.value,
            body: this.state.body
        })
    })

    onBodyChange = (event) => {
        this.setState({
            title: this.state.title,
            body: this.state.body
        })
    }

    submitForm = (event) => {
        event.preventDefault()
        this.setState({title: '', body: ''})
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <input type="title" className="form-control" placeholder="Title" value={this.state.title} onChange={this.onTitleChange}/>
                        <textarea className="form-control" id="exampleTextarea" rows="10" value={this.state.body} onChange={this.onBodyChange}/>
                    
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
    }

}