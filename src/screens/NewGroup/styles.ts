import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";



export const Container = styled(SafeAreaView)`
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
