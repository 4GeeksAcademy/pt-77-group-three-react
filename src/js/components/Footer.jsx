import React from "react";

const Footer = () => {
    return (
        <div className="Footer">
            <footer className="bg-dark text-white py-4 mx-auto">
                <div className="container">
                    <p>Copyright &copy; Group 3 "The Best Group!" {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
