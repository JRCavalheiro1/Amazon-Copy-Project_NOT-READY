import { Container } from "./style"
import { ComponentAnimation } from "../../../../shared/components/ComponentAnimation/ComponentAnimation"
import { Button } from "../../../../shared/components/Index"
import { ProductModal } from "./ProductModal/ProductModal";

type CartModalProps = {
    isOpen?: boolean,
    productData: any,
}
const variants = {
    visible: {x: 0, opacity: 1},
    initial: {x: "100vh", opacity: 0},
    exit: {x: "100vh", opacity: 0}
    
}

export const CartModal = ({isOpen, productData} : CartModalProps) => {
    return (
            <Container>
                <ComponentAnimation
                    key="cart-modal"
                    style={{top: 0, position: "absolute", right: 0, zIndex: 2}}
                    isOpen={isOpen}
                    variants={variants}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    transition={{duration: 0.5}}
                    children={
                        <div className="cart-modal">
                            <div className="cart-info">
                                <div className="cart-m-total-cost">
                                    <span>Subtotal</span>
                                    <h2>{productData.price}</h2>
                                </div>
                                <div className="free-delivery">
                                    <p id="normal-p">
                                    <p id="green-p"> Seu pedido se qualifica para <b>Frete GRÁTIS</b>.</p> 
                                    Selecione Frete GRÁTIS ao finalizar o pedido.<br/> <a id="link-p" href="#">Veja detalhes.</a>
                                    </p>
                                </div>
                                <div className="go-to-cart-page">
                                    <Button 
                                        type="button"
                                        style={{background: "#f2f2f2", border: "1px solid #d9d5d5", padding: "3px", fontSize: "10px"}}>
                                            Ir para o carrinho
                                        </Button>
                                </div>
                            </div>

                            <ProductModal props={productData}/>
                            
                        </div>
                    }
                />                     
               
             </Container>
    )
}