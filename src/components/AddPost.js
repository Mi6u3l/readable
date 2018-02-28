import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../actions'
import uuidv1 from 'uuid/v1';
import serializeForm from 'form-serialize'


class AddPost extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const {addPost, closePostModal} = this.props
        const values = serializeForm(e.target, {hash: true})
        const body = {
            id: uuidv1(),
            timestamp: Date.now(),
            title: values.title,
            body: values.body,
            author: values.author,
            category: values.category
        }
       
        addPost(body);
        closePostModal();
    }

    createSelectItems() {
        let categories = this.props.categories.categories;
        let items = [];
        for (let i = 0; i < categories.length; i++) {
            items.push(
                <option key={categories[i].path} value={categories[i].path}>{categories[i].name}</option>
            );
        }
        return items;
    }

    render() {
        return (
            <div>
                Add new post
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text' name='title' placeholder='Title'/>
                        <input type='text' name='body' placeholder='Body'/>
                        <input type='text' name='author' placeholder='Author'/>
                        <select name='category' defaultValue="">
                            <option value=""  disabled>
                                Select category...
                            </option>
                            {this.createSelectItems()}
                        </select>
                        <div>
                            <button>
                                Save
                            </button>
                            <button onClick={this.props.closePostModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps({categories}) {
    return {
        categories: categories[Object.keys(categories)]
    }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (body) => dispatch(createPost(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)