import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Filter = styled.form`

    padding: 25px;
    margin: 10px 0;
    background-color: #F2F2F2;
    display: flex;
    align-items: center;

    div{
        flex: 1;
        margin: 0 5px;
    }

`;

export const InputForm = styled.input`

    padding: 10px;
    background-color: #FFF;
    width: 100%;
    border: 1px solid #DDD;

`;

export const SelectForm = styled.select`

    padding: 10px;
    background-color: #FFF;
    width: 100%;
    border: 1px solid #DDD;

`;

export const ButtonSubmit = styled.button`
    padding: 10px;
    background-color: #09299E;
    width: 100%;
    border: 1px solid #09299E;
    color: #FFF;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
        background-color: #0D5EDE;
        border: 1px solid #0D5EDE;
    }
`;

export const AreaCards = styled.div`

    display:  flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

`;

export const CardItem = styled.div`

    width: 226px;
    height: 341px;
    position: relative;
    margin-bottom: 10px;
    display: flex;

    div.info-card{

        background-color: rgba(0,0,0,0);
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 226px;
        height: 341px;

        div.card-title{

            font-size: 20px;
            background-color: rgba(0,0,0,0);
            color: #FFF;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            display: none;
            text-align:center;

        }

        div.card-release{

            background-color: rgba(0,0,0,0);
            color: #FFF;
            font-family: Arial, Helvetica, sans-serif;
            display: none;

        }

        div.card-overview{

            background-color: rgba(0,0,0,0);
            color: #FFF;
            font-size: 12px;
            font-family: Arial, Helvetica, sans-serif;
            text-align:  justify;
            padding: 0 15px;
            display: none;

        }

        div.card-genre{

            background-color: rgba(0,0,0,0);
            font-size: 12px;
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            padding: 0 15px;
            display: none;

            span{
                background-color: #FFF;
                padding: 4px;
                border-radius: 4px;
                color: #777;
                margin-right: 4px;
            }

        }

        &:hover{
            transition: all ease 0.7s;
            background-color: rgba(0,0,0,0.7);

            div.card-title{display: block;}
            div.card-release{display: block;}
            div.card-overview{display: block;}
            div.card-genre{display: block;}
            a{display: block;}
        }
    }

`;

export const ButtonDetails = styled(Link)`
    
    padding: 5px;
    background-color: #FFF;
    width: 80%;
    text-decoration: none;
    text-align: center;
    border: 1px solid #FFF;
    color: #999;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    transition: all ease 0.3s;
    font-family: Arial, Helvetica, sans-serif;
    display: none;

    &:hover{
        background-color: #AAA;
        border: 1px solid #AAA;
        color: #FFF;
    }

`;
