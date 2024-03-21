import { Link } from "react-router-dom";
interface NavbarLinkProps {
 
  text: string;
  to: string;
  className?: string;
}

export default function NavbarLink({ text, to, className}:NavbarLinkProps) {
  
  return (
    <div className="navbar-container flex">
      <ul className="flex gap-7 pt-6 text-slate-900 font-bold">
      <li className="hover:text-blue-800 cursor-pointer"><Link to='/'>Accueil</Link></li>
      <li className="hover:text-blue-800 cursor-pointer"><Link to='/project'>Projets</Link></li>
      <li className="hover:text-blue-800 cursor-pointer"><Link to='/testimonial'>Temoignages</Link></li>
      <li className="hover:text-blue-800 cursor-pointer">  <Link  to='/contact'>Contacter</Link></li>
      <li className={`hover:text-blue-800 cursor-pointer ${className}`}>
      <Link to={to}>{text}</Link>
    </li>
      </ul>
    </div>
  );
}


        
        
      
       