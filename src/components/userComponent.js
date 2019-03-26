import React from 'react'
import '../myCss.css'

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
                <h2 style={{float:'right', marginRight:'560px', color:'#53ddef'}} >{this.props.item.author.firstName}</h2>
                <h3 style={{float:'right', marginRight:'470px', marginTop:'-70px'}}>{this.props.item.author.degree.name}</h3>
                {/* <img src='../like.png' style={{float:'right', marginTop:'-110px', marginRight:'100px'}} onClick={this.increaseLike}/> */}
                <button style={{float:'right', marginTop:'-110px', marginRight:'80px',}} onClick={this.increaseLike}>Like</button>
                <img src={this.props.item.image} style={{ width: '800px', height: '100px' }} />
                <h1>{this.props.item.title}</h1>
                <p>{this.props.item.text}</p>
                <p style={{opacity:'.5'}}>{this.props.item.topic.name} {this.props.item.readingTime} min read</p>
                <p  style={{float:'right', marginTop:'-30px', opacity:'.5', marginRight:'60px'}}>{this.props.item.numberOfViews} views {this.state.numberOfLikes} likes</p>
                
            </div>
        )
    }
}

export default User