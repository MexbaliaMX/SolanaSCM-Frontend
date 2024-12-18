import Container from "react-bootstrap/Container";
import FloatingButton from "../Components/FloatingButton";
import Grid from "../Components/Grid";
import NavbarApp from "../Components/NavBar";

export default function MainPage({solanaConfig, walletConnection, currentUser}){
    return (
        <Container fluid>
            <NavbarApp type="home" solanaConfig = {solanaConfig} walletConnection={walletConnection} currentUser={currentUser}/>
            <Grid/>
            <FloatingButton/>
        </Container>
    );
}