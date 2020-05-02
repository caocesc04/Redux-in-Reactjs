import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPost extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const newDescribe = this.getDescribe.value;
        const data = {
            newTitle,
            newMessage,
            newDescribe
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                        defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getDescribe = input}
                        defaultValue={this.props.post.describe} cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditPost);