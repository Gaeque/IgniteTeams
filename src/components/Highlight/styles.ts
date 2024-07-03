import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 40px 0;
`;

export const Tittle = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD}px;
    color: ${({theme}) => theme.COLORS.WHITE};
`;

export const SubTittle = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.MD};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    margin-top: 20px;
`;