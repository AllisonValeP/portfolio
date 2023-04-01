import { HeaderContainer,HeaderContent, MenuButton,DropdownContainer } from './styles'
import { NavLink } from 'react-router-dom'

import React,{useState} from 'react';

export function Header (){

    const [open, setOpen] = useState(false);

return (
        <HeaderContainer>
           <NavLink to="/" title="Home">
                <span>AllisonV</span>
            </NavLink>
            
             <HeaderContent> {/*menu */}
                <MenuButton onClick={() =>console.log('clique')}>
                    Imagens
                </MenuButton>

                <MenuButton onClick={() =>{setOpen(!open)}}>
                    Videos
                </MenuButton>
            </HeaderContent>

                <DropdownContainer variant={'desative'}>
                   <DropdownItem title="Rastros" rote="/rastros"/>
                   <DropdownItem title="Videos" rote="/videos"/>
                </DropdownContainer>
          
        </HeaderContainer>
        
)
  function DropdownItem(props){
    return( 
            <ul>
                <NavLink to={props.rote}>
                    {props.title}
                </NavLink>
            </ul>
    );
  }
}