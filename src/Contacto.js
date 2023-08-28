import "./Contacto.css"
export default function Contacto() {
    return (
        <>  <div>
            <div class="login-box">
                <p>Contacto</p>
                <form>
                    <div class="user-box">
                        <label>Nombre</label>
                        <input required="" name="" type="text">
                        </input>
                    </div>
                    <div class="user-box">
                        <label>Apellido</label>
                        <input required="" name="" type="text">
                        </input>
                    </div>
                    <div class="user-box">
                        <label>Email</label>
                        <input required="" name="" type="text">
                        </input>
                    </div>
                    <div class="user-box">
                        <label>Edad</label>
                        <input required="" name="" type="text">
                        </input>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Enviar
                    </a>
                </form>
            </div>
        </div>
        </>
    )
}