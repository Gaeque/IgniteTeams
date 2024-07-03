import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`

    width: 100%;
    heigh: 90px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 8px;

    flex-direction: row;
    align-items: center;

    padding: 24px;
    margin-bottom: 12px
`;


export const Tittle = styled.text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled.Image`
width: 30px;
height: 28px;
`;