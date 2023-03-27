import { HeaderContainer,HeaderContent, MenuButton } from './styles'
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
                <MenuButton onClick={() =>{setOpen(!open)}}>
                    Imagens
                </MenuButton>

                <NavLink to="/videos" title="Videos">
                    <button>Videos</button>
               </NavLink>
            </HeaderContent>

           
                <ul>
                   <DropdownItem title="Rastros" rote="/rastros"/>
                   <DropdownItem title="Videos" rote="/videos"/>
                </ul>
          
        </HeaderContainer>
        
)
  function DropdownItem(props){
    return(
        <li>
            <NavLink to={props.rote} title="Rastros">
                <a>{props.title}</a>
            </NavLink>
        </li>
    );
  }
}