import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}