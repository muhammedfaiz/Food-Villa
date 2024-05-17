import errorImg from "../assets/images/error.png";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
  return (
    <div className="error-container">
        <h1>OOPS!</h1>
        <h2>Something went wrong</h2>
        <img src={errorImg} alt="Error" />
        <h2>{error.status+":"+error.statusText}</h2>
    </div>
  )
}
export default Error