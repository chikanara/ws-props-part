import React from "react";

const Footer = ({children,total}) => {
  return (
    <div>
           <h3>Total price :{total} </h3>
      {children}
      &copy; Copy Rights 2021
    </div>
  );
};
Footer.defaultProps={
    total:500
}
export default Footer;
