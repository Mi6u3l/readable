import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from '../actions';
import { Link } from 'react-router-dom';


class ListCategories extends Component {
  
  componentDidMount() {
    const {getCategories} = this.props
    getCategories()
  }
  render() {
    const {categories} = this.props
    return (
    <div>
        {categories
          ? <ul>
              {categories.categories.map((category) => (
                <li key={category.path}>
                 <Link
                    to={`/${category.path}`}
                >{category.name}</Link>
                </li>
              ))}
            </ul>
          : <div>Loading categories...</div>
        }
      </div>
    );
  }
}

function mapStateToProps({categories}) {
  return {
    categories: categories[Object.keys(categories)]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories)