import {Stack} from "@mui/material";
import foto1 from "./../fotos/happyBirth.jpeg"
import VideoPlayer from "./VideoPlayer.tsx";

function MainThing() {

    return (
        <>
            <Stack spacing={70}>
                <p></p>
                <h1>hallo lisa</h1>
                <img src={foto1}/>
                <p>will du so cool bisch han ich e Website kmacht.</p>
                <p>d'Website isch aber eigentlich nöd s'Geschenk</p>
                <p>dis eigentliche geschenk isch...</p>
                <p>öpis unglaubliches</p>
                <p>...</p>
                <p>(mach audio ah)</p>
                <p>es isch sehr cool</p>
                <p>vertrau</p>
                <p>... i hope they play FE!N</p>
                <p>ok da isch es</p>
                <VideoPlayer/>
            </Stack>

        </>
    )
}

export default MainThing

