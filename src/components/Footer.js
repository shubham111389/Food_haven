// Footer component for footer section

import Footer1 from "./FooterHelper";


const Footer = () => {
  
  return (
    
    
    <div className="flex-col bg-black">
      <div>
      <Footer1/>
      </div>
    <div className=" bg-black mx-96 justify-center">
     <div className=" bg-black text-white  ">
      <strong className="opacity-50">
           Created  By 
           </strong>
      <i className="fa-solid fa-heart cursor-pointer px-1"></i>
      <a
        href="https://www.linkedin.com/in/shubham-annpurne-0183bb232/"
        target="_blank"
        title="Shubham Annpurne's Linkedin Profile"
        className="font-medium opacity-100"
      >
        Shubham Annpurne
      </a>
      <i className="fa-solid fa-copyright px-1 opacity-50"></i><strong className="opacity-50">
           @ 2023
           </strong>
      <strong className="px-2 font-medium opacity-100 cursor-pointer">
         Food <span className="px-1"> Haven </span>
       </strong>
      
      


     
    </div>
    </div>
    </div>
    
  );
    
    
    
  
  
};
    
    
 
export default Footer;

