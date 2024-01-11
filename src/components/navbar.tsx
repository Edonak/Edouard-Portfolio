import Avatar from './avatar';
import NavbarLink from './navbarLink';

export default function Navbar() {
  return (
    <div className='navbar flex justify-around h-20'>
        <div className="navigation-left">
            <Avatar />
        </div>
        <div className="navigation-right">
            <NavbarLink />
        </div>
    </div>
  )
}
