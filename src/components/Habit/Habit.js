import React from 'react'
import HabitTitle from './Habit-title'
import HabitContent from './Habit-content'
class Habit extends React.Component {
    render() {
        return (
            <div className="habit">
                <HabitTitle title={this.props.title}/>
                <HabitContent content={this.props.content}/>
            </div>
        )
    }
}
export default Habit