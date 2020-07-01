import styled from 'styled-components'
import { Typography, Button } from '@material-ui/core'

export const CartFooterWrapper = styled.footer`
    width: 92%;
`

export const Text = styled(Typography)`
    font-size: 16px;
    height: 16px;
    letter-spacing: -0.4px;
    margin-bottom: 8px;
`

export const PriceBoxWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 16px;
    margin: 13px 0 24px;
`

export const Title = styled(Typography)`
    margin: 16px 0 8px;
    border-bottom: 1px solid black;
    font-size: 16px;
    letter-spacing: -0.39px;
`

export const FormWrapper = styled.form`
`

export const PayementOptionBoxWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const RadioButtonWrapper = styled.input`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    margin-bottom: 11px;
`
export const ConfirmButtonWrapper = styled(Button)`
    width: 100%;
    height: 42px;
    border-radius: 2px;
    background-color: ${props => props.bgcolor};
    margin: ${props => props.margintop} 0 16px 0;
    margin-bottom: 64px;
`