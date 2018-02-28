import React, {Component} from 'react';
import {connect} from 'react-redux';
import serializeForm from 'form-serialize'


class AddPost extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, {hash: true})
        console.log(values);
    }

    createSelectItems() {
        console.log(this.props.categories);
        let categories = this.props.categories.categories;
        let items = [];
        console.log(categories);
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

export default connect(mapStateToProps)(AddPost)
