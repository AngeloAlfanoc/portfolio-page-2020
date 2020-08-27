import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            location:window.location.pathname,
        };
    }
    handleChecked = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
    handleClicked = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
    buildMenu = (href, Link, style)=> {
        return (
        <li className={style} onClick={this.handleClicked}>
            <a className="nav-link" href={href}>{Link}</a>
        </li>);
    }
    render() {
        const {isChecked,location} = this.state;
        return (
            <div className="menu-wrap elem-ease-in">
                <input
                    onChange={this.handleChecked}
                    type='checkbox'
                    id='toggle'
                    style={{
                    display: 'none'
                }}/>
                <label
                    className={isChecked
                    ? 'toggle-btn btn-toggle-btn  elem-ease-in'
                    : 'toggle-btn  elem-ease-in'}
                    htmlFor='toggle' style={this.props.toggleButtonAnim}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </label>

                <nav
                    className={isChecked
                    ? 'active-nav'
                    : ''}>

                    <ul className="d-flex flex-row flex-wrap justify-content-center">
                        {location === '/'? this.buildMenu('/', 'Home', 'nav-item col-sm-12 active') : this.buildMenu('/', 'Home', 'nav-item col-sm-12')}                  
                        {location === '/projects'? this.buildMenu('/projects', 'Projects', 'nav-item col-sm-12 active'):this.buildMenu('/projects', 'Projects', 'nav-item col-sm-12')}
                        {location === '/contact'? this.buildMenu('/about', 'Contact', 'nav-item col-sm-12  active'):this.buildMenu('/contact', 'Contact', 'nav-item col-sm-12')}
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Nav;