import styled from 'styled-components'

export const HeaderContainer = styled.header`
    margin: 0 auto;
    max-width:1120px;
    display: flex;
    justify-content:space-between;
    padding: 1.5rem 7.5rem 1.5rem; 
   
   
 span{
    color: ${props => props.theme["white"]};
};
`

export const HeaderContent = styled.div`
    margin: 0 8rem;
    display:flex;
    justify-content: space-between;
    gap: 3rem;
    


button{
    padding: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${props => props.theme["white"]};
    background-color:transparent;
    border: none;
    border-radius:0.5rem;
    transition: 0.3s;


    :hover{
        background-color:${props => props.theme["gray-100"]};
        color: ${props => props.theme["black"]};
        transition: 0.3s
    }
}
`