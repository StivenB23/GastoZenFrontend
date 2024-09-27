import "./login.css"
import ImageLogo from "../../assets/Logo.svg"
import ImageLogin from "../../assets/img/image_login.svg"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
const Login = () => {
    const { login } = useContext(AuthContext);
    const [messageError, setMessageError] = useState("")
    const navegate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const Autentication = async (data) => {
        const isAuth = await login(data);
        if (isAuth?.error) {
            setMessageError("Las credenciales no son correctas")
            return "";
        }
        navegate("/dashboard/me")
       
    }

    return (
        <div className="container__login">
            <div className="modal">
                <div className="modal__form">
                    <img src={ImageLogo} alt="" />
                    <form onSubmit={handleSubmit(Autentication)} >
                        <h1>Iniciar Sesión</h1>
                            {messageError && <p className='text__warning--error' >{messageError}</p>}
                        <div className="">
                            <label htmlFor="email">Correo: <b className="obligatory">*</b> </label>
                            <input type="text" id="email" name="email" {...register("email", { required: "El correo no puede estar vacío" })} />
                            {errors.email && <p className='text__warning--error' >{errors.email.message}</p>}
                        </div>
                        <div className="">
                            <label htmlFor="password">Contraseña: <b className="obligatory">*</b> </label>
                            <input type="password" id="password" name="password" {...register("password", { required: "La contraseña no puede estar vacía" })} />
                            {errors.password && <p className='text__warning--error' >{errors.password.message}</p>}
                        </div>
                        <button className="button__primary">Ingresar</button>
                    </form>
                </div>
                <div className="modal__image">
                    <img src={ImageLogin} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;
