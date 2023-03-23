import { HeaderContainer,HeaderContent } from './styles'

import { NavLink } from 'react-router-dom'

export function Header (){
    return(
        <HeaderContainer>
           <NavLink to="/" title="Home">
                <span>AllisonV</span>
            </NavLink>
            
            <HeaderContent>
                <NavLink to="/images" title="Imagens">
                    <button>Imagens</button>
                </NavLink>
                <NavLink to="/videos" title="Videos">
                    <button>Videos</button>
               </NavLink>
            </HeaderContent>

        </HeaderContainer>
    )
}