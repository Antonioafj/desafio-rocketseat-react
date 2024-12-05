import styled from "styled-components"

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    paddind: 20px 160px;
`


export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <div></div>
            <div></div>
        </TagHeader>
    )
}