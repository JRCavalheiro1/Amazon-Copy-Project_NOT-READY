import { Input, Button, Alert, Alert2, ConditionsText} from "../../../../shared/components/Index";
import { validationSigninSchema as validationSchema } from "../../../Register/Validation";
import { Help } from "../Help/Help";
import { Container } from "./style";
import { auth } from "../../../../Firebase/firebase-cfg";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useFormik} from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface loginValues {
    email: string,
    password: string
    
}

const initialValues: loginValues = {
    email: "",
    password: ""
}



export const FormLogin = () => {
    const [emailLogged, setEmailLogged] = useState(false);
    const [emailData, setEmailData] = useState("");

    const navigate = useNavigate();
    
    const user = auth.currentUser;
    const handleLogin = ({email, password} : loginValues) => {
        signInWithEmailAndPassword(auth, email, password).
        then(() => {
            console.log("Logado com sucesso " + user?.displayName);
            navigate("/menu");
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const onSubmit = (values : loginValues) => {
        setEmailLogged(true);
        handleLogin(values);
    }
    
    const formik = useFormik<loginValues>({
        validationSchema,
        initialValues,
        onSubmit
    });

    return (
        <Container send={emailLogged} >
            <form onSubmit={formik.handleSubmit}>

                <h1>Fazer login</h1>

                <div className="login-content" >
                <Input
                    label={"Número de celular ou e-mail"}
                    type={"text"}
                    name={"email"}
                    value={formik.values.email} 
                    onChange={formik.handleChange}
                    onInput={(e)=> setEmailData(e.target.value)} //capta o valor do campo do input
                    style={{border: formik.errors.email && formik.touched.email ? "2px solid #CC0C39" : undefined}}
                />
                {formik.errors.email && formik.touched.email && <Alert2 message={formik.errors.email}/>}
                
                </div>
                
                <div className="password-content">
                
               <p>{emailData}</p> <a onClick={()=> setEmailLogged(false)} href="#"> Alterar</a>

                <Input
                    label={"Senha"}
                    a={"Esqueci a senha"}
                    type={"password"}
                    name={"password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    style={{border: formik.errors.password && formik.touched.password ? "2px solid #CC0C39" : undefined}}
                />
                    {formik.errors.password && formik.touched.password && <Alert2 message={formik.errors.password}/>}
                </div>

                <Button 
                    type={"submit"}
                >
                    Continuar 
                </Button>

            </form>

            <div className="login-content">
                <ConditionsText/>
                <Help/>
            </div>

        </Container>
    )
}

