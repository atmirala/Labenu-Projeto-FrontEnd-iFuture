import React from 'react'
import * as S from './styles'
import { turnsDate } from './constants'

export function CardHistory(props){

    const { order } = props

    const date = turnsDate(order.createdAt)

    return (
        <S.Order>
            <S.TextStyled color="primary">
                {order.restaurantName}
            </S.TextStyled>

            <S.DateStyled>
                {date}
            </S.DateStyled>

            <S.TextStyled weight="bold">
                SUBTOTAL {order.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </S.TextStyled>
        </S.Order>
    )
}

export default CardHistory