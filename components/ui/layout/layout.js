import React from 'react'
import Header from '../../navigation/header/header'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout
