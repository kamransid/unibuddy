import React from 'react'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfLikes : 0
        }
        this.increaseLike = this.increaseLike.bind(this)
    }
    increaseLike(){
        this.setState({
            numberOfLikes: this.state.numberOfLikes + 1
        })
    }
    render() {
        return (
            <div>
                <img id='id1' src={this.props.item.author.profilePhoto} />
                <h2 >{this.props.item.author.firstName}</h2>
                <h3>{this.props.item.author.degree.name}</h3>
                <img src={this.props.item.image} style={{ width: '800px', height: '100px' }} />
                <h1>{this.props.item.title}</h1>
                <p>{this.props.item.text}</p>
                <p>{this.props.item.topic.name} {this.props.item.readingTime} min read</p>
                <p >{this.props.item.numberOfViews} views {this.state.numberOfLikes} likes</p>
                <button onClick={this.increaseLike}>LikeIt</button>
            </div>
        )
    }
}

export default User