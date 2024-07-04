import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 40px 0;
`;

export const Tittle = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    color: ${({theme}) => theme.COLORS.WHITE};
`;

export const SubTittle = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
`;