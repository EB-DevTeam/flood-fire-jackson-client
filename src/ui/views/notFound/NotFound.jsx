import React from 'react';
// import ContactUsComp from '../../shared/Contact/ContactUsComp';
// import HomeServices from '../Home/components/HomeServices';

function NotFound() {
    return(
        <section className="notFound__section">
            <div className="notFound__div-cont">
                <h1 className="txt-center" style={{fontSize: '64px'}}>404</h1>
                <h2 className="txt-center">Page Not Found.</h2>
                <p className="txt-center">Like all our restoration projects, we are constantly looking to improve our website. We apologize that this link is broken.</p>
            </div>
            {/* <HomeServices /> */}
            {/* <ContactUsComp/> */}
        </section>
    );
}
export default NotFound;