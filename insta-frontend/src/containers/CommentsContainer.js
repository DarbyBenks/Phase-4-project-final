import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { getComments } from '../actions/comments'
import Comments from '../components/comments/Comments'

class CommentsContainer extends Component {

  componentDidMount(){
    this.props.getComments()
  }

  render(){
    console.log(this.props)
    return(<div>
      {this.props.loading ? <h3>...loading...</h3> :< Comments comments={this.props.comments}  /> }
    </div>)
  }
}

const mapStateToProps = state => {
  
  return{
    comments: state.comments.comments,
    loading: state.comments.loading
  }
}

export default connect(mapStateToProps)(CommentsContainer)