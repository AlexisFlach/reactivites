import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

interface Props {
    openForm: () => void;
}

const Navbar = ({openForm}: Props) => {
    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '20px'}} />
                </Menu.Item>
                <Menu.Item name="Activities"/>
                <Menu.Item>
                    <Button onClick={openForm} positive content="Create activity"/>
                </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}

export default Navbar
