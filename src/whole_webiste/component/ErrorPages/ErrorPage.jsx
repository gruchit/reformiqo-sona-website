import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorImage from '../../../assets/error3.svg';
import './Error.css';
import Helmet from 'react-helmet';
function ErrorPage() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "{{Category Name}}",
        "url": "{{Category URL}}",
        "description": "{{Category Description}}"
    }
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
            </Helmet>
            <div className=''>
                <div className=" error-page d-flex flex-column align-items-center justify-content-center">
                    <img src={ErrorImage} alt="Error Illustration" className="error-image bounce" loading='lazy' />
                    <h1 className="error-title">404 - Page Not Found</h1>
                    <p className="error-message">
                        The page you’re looking for doesn’t exist. It might have been moved or deleted.
                    </p>
                    <button className="btn mt-3 btn-primary" onClick={handleBackHome}>
                        Go Back Home
                    </button>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;
