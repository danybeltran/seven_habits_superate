import React from 'react'
class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#Home" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.props.habit0}>Inicio<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Habit1" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.props.habit1}>Hábito 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Habit2" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.props.habit2}>Hábito 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Habit3" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.props.habit3}>Hábito 3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Habit4" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.props.habit4}>Hábito 4</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Habit5" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.props.habit5}>Hábito 5</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Habit6" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.props.habit6}>Hábito 6</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Habit7" data-toggle="collapse" data-target=".navbar-collapse.show" onClick={this.props.habit7}>Hábito 7</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBar