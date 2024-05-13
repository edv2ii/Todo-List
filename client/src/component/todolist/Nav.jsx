import styled from "styled-components"

const Navigation = styled.div`
    height: 100px;
    display: flex;
    justify-content: end;
`

const Title = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: max-content;
    min-width: 200px;
    padding: 10px;
    border-radius: 0px 0px 0 50px;
    background: #FFEBE5;
    

    && h3 {
        color: black;

    }
`

const Nav = () => {
    return (
        <>
            <Navigation >
                <Title>
                    <h3>TodoList</h3>
                </Title>
            </Navigation>
        </>
    )
}

export default Nav;