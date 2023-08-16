import React from 'react';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import logoimg from '../../assets/logo-cs.svg'

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink
} from './styles'

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoimg} alt="Logo CS Wallet" />
                <Title>CS Wallet</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>

        </Container>
    );
}

export default Aside;