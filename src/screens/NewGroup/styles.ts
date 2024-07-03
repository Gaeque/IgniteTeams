import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;

`;

export const ImgPessoas = styled.Image`  
    width: 40px;
    height: 30px;
    align-self: center;
`;
