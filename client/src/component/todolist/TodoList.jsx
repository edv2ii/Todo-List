import React , { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div `
    display: grid;
    place-items: center;
    height: 100vh;
    padding: 0 20px;
`

const Card = styled.div `
    width: 100%;
    height: 100vh;
`

const ListItem = styled.div `
    display: grid;
    grid-template-columns: 50fr 1fr;
    gap: 30px;

    .col1 {
        position: relative;
    }
    
    .col1 input {
        font-weight: 600;
        padding: 10px 15px;
        background:  ${(props) => props.$color};
        width: 100%;
        padding: 0px 20px 0 60px;
        height: 45px;
        border-radius: 50px;
        border: none;
        outline: none; /* This removes the default focus outline */
        color: #000; /* Text color */
        font-size: 16px; /* Font size */
        color: #827676
    }

    .col1 img {
        transform: translateY(-50%);
        top: 50%;
        position: absolute;
        z-index: 1;
        left: 20px;
        margin: auto auto;
    }

    .col2 {
        display: grid;
        place-items: center;
    }

    .col2 img { 
        padding-left: 60px;
    }

    && img {
        width: 25px;
    }

`

const AddList = styled.div `
    padding: 10px 15px;
    background-color: #ffffff;
    border: 1px solid purple; 
    border-radius: 50px;
    display: flex;

    input {
        border: 0;
        font-size: 18px;
        outline:none;
    }
`


const TodoList = () => {

    const [todoList, setTodoList] = useState(false)
    const [heartImg, setHeartImg] = useState("heart1")
    const [listItem, setListItem] = useState([{ todoList: false, heartImg: heartImg }])
    const [inputValue, setInput] = useState("")

    

    function addList() {
        // setListItem([...listItem, { todoList: false, heartImg: heartImg }])
    }

    function delList(indexToDelete) {
        setListItem(prevListItems => {
            return prevListItems.filter((item, index) => index !== indexToDelete);
        });
    }

    function handleChangeInput(e, index) {
        
    }

    function handleChangeDoUndo(value, index) {
        setListItem(prevListItems => {
            const newListItems = [...prevListItems];
            newListItems[index] = {
                ...newListItems[index],
                todoList: !newListItems[index].todoList,
                heartImg: newListItems[index].heartImg === "heart1" ? "heart2" : "heart1"
            };
            return newListItems;
        });
    }

    // function doUndo() {
    //     setTodoList(!todoList)

    //     if (!todoList) {
    //         setHeartImg("heart1")
    //     }
    //     else setHeartImg("heart2")
    // }
    let colors = [
        "#C1C3F3",
        "#CBB7DA",
        "#ECC3D5",
        "#FFDDE4",
        "#FFEBE5"
    ]

    const uniqueColors = Array.from(new Set(colors));
    const colorSequence = uniqueColors.concat(uniqueColors.slice(0, -1).reverse());
    return (
        <>
            <Container className="container">
                <Card className="card">
                    <div className="row" style={{ display: "grid", gap: "10px"}}>
                            {/* <ListItem >
                                <img onClick={doUndo} src={`./src/icon/heart/${heartImg}.png`} alt="heart" />
                                <input type="text" />
                            </ListItem> */}
                            <AddList onClick={addList}>
                                <div className="col1">
                                    <input placeholder="Add your list" type="text" />

                                </div>
                            </AddList>
                            {listItem.map((item, index) => {
                                const { todoList, heartImg } = item
                                const colorIndex = index % colorSequence.length;

                                return (
                                    <React.Fragment key={index}>
                                        <ListItem $color={colorSequence[colorIndex]} >
                                            <div className="col1">
                                                <img  onClick={e => handleChangeDoUndo(item, index)} src={`./src/icon/heart/${heartImg}.png`} alt="heart" />
                                                <input onChange={e => handleChangeInput(e.target.value)} type="text" value={item.value} />
                                            </div>
                                            <div className="col2">
                                                <img onClick={(e) => delList(index)} src="./src/icon/remove/cancel.png" alt="" />
                                            </div>
                                            
                                        </ListItem>
                                    </React.Fragment>
                                )
                            })}
                            
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default TodoList;