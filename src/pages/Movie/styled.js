import styled from 'styled-components';

export const AreaDetails = styled.div`

    margin-top: 25px;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;

    div.poster{
        margin-right: 15px;
    }

    div.details{
        display: flex;
        flex-direction: column;

        h2{
            font-size: 32px;
            font-weight: bold;
        }

        small.release{
            font-weight: bold;
            margin-top: 10px;
        }

        p.note{
            margin-top: 10px;
            margin-bottom: 10px;
        }

        div.area-genre{

            margin: 25px 0 ;

            span{
                padding: 8px;
                background-color: rgba(0,0,0,0.7);
                margin-right: 5px;
                color: #FFF;
                font-size: 12px;
                border-radius: 10px;
            }

        }

        p.details-overview{
            background-color: #EEE;
            text-align: justify;
            padding: 25px;
            border-radius: 10px;
        }

    }

`;

export const AreaButtonBack = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    a{
        padding: 10px 25px;
        text-decoration: none;
        background-color: #5C73F2;
        color: #FFF;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 10px;

        &:hover{
            background-color: #829FD9;
        }
    }


`;