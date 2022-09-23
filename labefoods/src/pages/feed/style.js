import styled from "styled-components";

export const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1{
        border-bottom: 1px solid lightgray;
        padding: 15px;
        width: 100vw;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    /* display: flex; */
    
    i{
        position: absolute;
        padding-left: 15px;
        padding-top: 22px;
        color: lightgray;
    }

    input{
        flex-shrink: 0;
        height: 3em;
        width: 70%;
        margin: 10px auto 0;
        padding-left: 41px;
        padding-top: 1px;
    }
`

export const Categories = styled.div`
    flex-shrink: 0;
    display: flex;
    gap: 15px;
    overflow: scroll;
    height: 2em;
    align-self: normal;
    margin: 15px 15px;

    .selected {
            color: red;
        }

    button {
        width: auto;
        height: auto;
        background: transparent;
        cursor: pointer;    
        border: none !important;
        font-weight: 700;
        font-size: 1.2rem;
    }



    ::-webkit-scrollbar { 
        display: none; 
    }
`

export const RestaurantCardContainer = styled.div`
    overflow: auto;
`

export const RestaurantCard = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 95vw;
    overflow: hidden;
    margin-bottom: 10px;

    img{
        width: 100%;
        height: 15rem;
    }

    h3 {
        color: var(--title-red);
        text-align: start;
        margin-left: 53px;
    }

    div {
        display: flex;
        justify-content: space-around;
    }

    div p {
        color: var(--subtitle-gray);
    }
`
