import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import styles from './styles.css';

function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => { clearTimeout(timeout); };
    }, [navigate]);

    return (
        <>
            <h1>404 Not Found Page</h1>
            <button onClick={() => {
                navigate(-1);
            }}>Go back</button>
        </>
    );
}

export default NotFoundPage;
