import errorImg from "../assets/images/error.png";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-4xl font-bold text-red-600">OOPS!</h1>
                <h2 className="text-lg text-gray-800">Something went wrong</h2>
                <img src={errorImg} alt="Error" className="w-64 h-64 object-cover m-3" />
                <h2 className="text-base text-gray-700">{error.status + ": " + error.statusText}</h2>
            </div>
        </div>
    );
};

export default Error;