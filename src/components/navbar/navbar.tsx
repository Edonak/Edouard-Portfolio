
import Avatar from '../primaryComponents/avatar';
import NavbarLink from './navbarLink';

interface NavbarProps {
  
}

export default function Navbar(props: NavbarProps):JSX.Element {
  return (
    <div className='navbar fixed top-0 left-0 w-full flex justify-around h-20 bg-white'>
        <div className="navigation-left">
            <Avatar />
        </div>
        <div className="navigation-right">
            <NavbarLink />
        </div>
    </div>
  )
}
