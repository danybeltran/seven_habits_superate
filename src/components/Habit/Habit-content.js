import React from 'react'
class HabitContent extends React.Component {
    render() {
        return (
            <div>
                <p className="lead">{this.props.content}</p>
            </div>
        )
    }
}
export default HabitContent