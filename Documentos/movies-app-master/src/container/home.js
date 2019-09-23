import React, { Component } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Home',
            nav: [
                { label: 'Home', href: '/Home' },
                { label: 'Top Rated', href: '/top' },
                { label: 'Popular', href: '/popular' }
            ]
        }
    }

    changeTitle(newtitle) {
        this.setState({ title: newtitle })
    }

    render() {
        return (
            <React.Fragment>
                <Header pageTitle={this.state.title} />
                <h1>{this.state.title}</h1>
                <p>esto es mas texto</p>
                <a href="!#" onClick={() => this.changeTitle('inicio')}>cambiar</a>
            </React.Fragment>
        )
    }
}

export default Home