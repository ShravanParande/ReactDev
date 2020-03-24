import React,{Component} from 'react';
import ReactDom from 'react-dom';

// const Header = ( ) =>{ functional without render method
    
class Header extends Component { //class component with render
    render() {
    return (
        <header>
            <center>
                <h1> React App</h1>
                <input />
            </center>
            <hr/>
        </header>
    )
}
}

export default Header;