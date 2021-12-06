import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 100px;
   
`

export const TxtSearch = styled.input`
    border: 1px solid rgba(0,0,0,0.3);
    font-size:17px;
    margin-left:20px;
    margin-top: 120px;
    padding:8px;
    width:30%;

`

export const BtnSearch = styled.button`
    background: #0f80ff;
    border:none;
    border-radius: 10px;
    color:#fff;
    font-size:15px;
    margin-left: 10px;
    margin-top:120px;
    padding: 10px;
`