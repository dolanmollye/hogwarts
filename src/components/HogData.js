import React from 'react'

export default class HogData extends React.Component {
    render () {
        return (
            <div className='hogDetails' >
                <p>{this.props.hog.specialty}</p>
                <p>Greased: {this.props.hog.greased ? "Greasy" : "Dry"}</p>
                <p>Weight: {this.props.hog.weight}</p>
                <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
            </div>
        )
    }
}