import React from 'react'

class FilterSelector extends React.Component {

    handleChange = (e) => {
        return this.props.filterSelected(e.target.value)
    }

    render (){
        return(
            <div className='ui input'>
                <select onChange={this.handleChange}>
                    <option value='none'>No Filter</option>
                    <option value='greased'>Greased</option>
                    <option value='name'>Name</option>
                    <option value='weight'>Weight</option>
                </select>
            </div>
        )
    }
}
export default FilterSelector