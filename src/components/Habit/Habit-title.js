import React from 'react'
class HabitTitle extends React.Component {
    render() {
        return (
            <div>
                <p className="display-4">{this.props.title}</p>
            </div>
        )
    }
}
export default HabitTitle