import { Container } from "./style";
import { Header } from "./components/Header/Header";
import { Sugestions } from "./components/Sugestions/Sugestions";
import { CartModal } from "./components/CartModal/CartModal";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, fireStore } from "../../Firebase/firebase-cfg";
import { Outlet } from "react-router-dom";

{/*
    verificar usuário logado
    -criar um ciclo de vida toda vez que iniciar a aplicação    

*/}

export const Menu = ()=> {
    const [nameUser, setNameUser] = useState('');

    const userId = auth.currentUser?.uid;
    
    useEffect(()=> {
        getUserDocument(userId);
    }, [getUserDocument, nameUser])

    async function getUserDocument(id: any) {
            const userDoc = await getDoc(doc(fireStore, 'users', id));
            const userDocName = userDoc.get('name');
            setNameUser(userDocName);
    }

    return (
        <Container>
            <Header name={nameUser}/>
            <Sugestions name={nameUser}/>
            
            <Outlet/>

            {/*Footer*/}
        </Container>
    )
}