import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from '@nextui-org/react'
import { AcmeLogo } from './AcmeLogo.jsx'
import { useState } from 'react'
import { useAuth } from '../../contexts/authContext.jsx'

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { state: { isLoggedIn, user }, logout } = useAuth()

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link href='/'>
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/artisans'>
            Artisans
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/about'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/services'>
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/contact'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>


      {
        isLoggedIn
          ? (
            <NavbarContent as='div' justify='end'>
              <NavbarItem>
                <Link href='/cart'>
                  <Button isIconOnly color="primary" aria-label="Like">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                      <path
                          d="M1.92773 0.633057C1.66252 0.633057 1.40816 0.738413 1.22063 0.92595C1.03309 1.11349 0.927734 1.36784 0.927734 1.63306C0.927734 1.89827 1.03309 2.15263 1.22063 2.34016C1.40816 2.5277 1.66252 2.63306 1.92773 2.63306H3.14773L3.45273 3.85506C3.45576 3.86913 3.4591 3.88313 3.46273 3.89706L4.82073 9.32706L3.92773 10.2191C2.66773 11.4791 3.55973 13.6331 5.34173 13.6331H13.9277C14.193 13.6331 14.4473 13.5277 14.6348 13.3402C14.8224 13.1526 14.9277 12.8983 14.9277 12.6331C14.9277 12.3678 14.8224 12.1135 14.6348 11.926C14.4473 11.7384 14.193 11.6331 13.9277 11.6331H5.34173L6.34173 10.6331H12.9277C13.1134 10.633 13.2954 10.5812 13.4533 10.4835C13.6112 10.3858 13.7387 10.2461 13.8217 10.0801L16.8217 4.08006C16.8979 3.92764 16.9339 3.75828 16.9262 3.58806C16.9185 3.41784 16.8675 3.25241 16.7779 3.10745C16.6884 2.96249 16.5633 2.84283 16.4145 2.7598C16.2657 2.67678 16.0981 2.63315 15.9277 2.63306H5.20773L4.89773 1.39006C4.84356 1.17381 4.71869 0.981865 4.54294 0.844712C4.3672 0.707559 4.15066 0.633063 3.92773 0.633057H1.92773ZM14.9277 16.1331C14.9277 16.5309 14.7697 16.9124 14.4884 17.1937C14.2071 17.475 13.8256 17.6331 13.4277 17.6331C13.0299 17.6331 12.6484 17.475 12.3671 17.1937C12.0858 16.9124 11.9277 16.5309 11.9277 16.1331C11.9277 15.7352 12.0858 15.3537 12.3671 15.0724C12.6484 14.7911 13.0299 14.6331 13.4277 14.6331C13.8256 14.6331 14.2071 14.7911 14.4884 15.0724C14.7697 15.3537 14.9277 15.7352 14.9277 16.1331ZM5.42773 17.6331C5.82556 17.6331 6.20709 17.475 6.48839 17.1937C6.7697 16.9124 6.92773 16.5309 6.92773 16.1331C6.92773 15.7352 6.7697 15.3537 6.48839 15.0724C6.20709 14.7911 5.82556 14.6331 5.42773 14.6331C5.02991 14.6331 4.64838 14.7911 4.36707 15.0724C4.08577 15.3537 3.92773 15.7352 3.92773 16.1331C3.92773 16.5309 4.08577 16.9124 4.36707 17.1937C4.64838 17.475 5.02991 17.6331 5.42773 17.6331Z"
                          fill="white"/>
                    </svg>
                  </Button>
                </Link>
              </NavbarItem>
              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                      isBordered
                      as='button'
                      className='transition-transform'
                      color='primary'
                      name='Jason Hughes'
                      size='sm'
                      src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label='Profile Actions' variant='flat'>
                  <DropdownItem key='profile' className='h-14 gap-2'>
                    <p className='font-semibold'>Signed in as</p>
                    <p className='font-semibold'>{user.email}</p>
                  </DropdownItem>
                  <DropdownItem key='my-dashboard' className=''>
                    <Link href='/dashboard'>Dashboard</Link>
                  </DropdownItem>
                  <DropdownItem key='logout' color='danger' onPress={logout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
            )
            : (
                <NavbarContent justify='end'>
                  <NavbarItem>
                    <Link href='/cart'>
                      <Button isIconOnly color="primary" aria-label="Like">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                          <path
                              d="M1.92773 0.633057C1.66252 0.633057 1.40816 0.738413 1.22063 0.92595C1.03309 1.11349 0.927734 1.36784 0.927734 1.63306C0.927734 1.89827 1.03309 2.15263 1.22063 2.34016C1.40816 2.5277 1.66252 2.63306 1.92773 2.63306H3.14773L3.45273 3.85506C3.45576 3.86913 3.4591 3.88313 3.46273 3.89706L4.82073 9.32706L3.92773 10.2191C2.66773 11.4791 3.55973 13.6331 5.34173 13.6331H13.9277C14.193 13.6331 14.4473 13.5277 14.6348 13.3402C14.8224 13.1526 14.9277 12.8983 14.9277 12.6331C14.9277 12.3678 14.8224 12.1135 14.6348 11.926C14.4473 11.7384 14.193 11.6331 13.9277 11.6331H5.34173L6.34173 10.6331H12.9277C13.1134 10.633 13.2954 10.5812 13.4533 10.4835C13.6112 10.3858 13.7387 10.2461 13.8217 10.0801L16.8217 4.08006C16.8979 3.92764 16.9339 3.75828 16.9262 3.58806C16.9185 3.41784 16.8675 3.25241 16.7779 3.10745C16.6884 2.96249 16.5633 2.84283 16.4145 2.7598C16.2657 2.67678 16.0981 2.63315 15.9277 2.63306H5.20773L4.89773 1.39006C4.84356 1.17381 4.71869 0.981865 4.54294 0.844712C4.3672 0.707559 4.15066 0.633063 3.92773 0.633057H1.92773ZM14.9277 16.1331C14.9277 16.5309 14.7697 16.9124 14.4884 17.1937C14.2071 17.475 13.8256 17.6331 13.4277 17.6331C13.0299 17.6331 12.6484 17.475 12.3671 17.1937C12.0858 16.9124 11.9277 16.5309 11.9277 16.1331C11.9277 15.7352 12.0858 15.3537 12.3671 15.0724C12.6484 14.7911 13.0299 14.6331 13.4277 14.6331C13.8256 14.6331 14.2071 14.7911 14.4884 15.0724C14.7697 15.3537 14.9277 15.7352 14.9277 16.1331ZM5.42773 17.6331C5.82556 17.6331 6.20709 17.475 6.48839 17.1937C6.7697 16.9124 6.92773 16.5309 6.92773 16.1331C6.92773 15.7352 6.7697 15.3537 6.48839 15.0724C6.20709 14.7911 5.82556 14.6331 5.42773 14.6331C5.02991 14.6331 4.64838 14.7911 4.36707 15.0724C4.08577 15.3537 3.92773 15.7352 3.92773 16.1331C3.92773 16.5309 4.08577 16.9124 4.36707 17.1937C4.64838 17.475 5.02991 17.6331 5.42773 17.6331Z"
                              fill="white"/>
                        </svg>
                      </Button>
                    </Link>
                  </NavbarItem>
                  <NavbarItem className='hidden lg:flex'>
                    <Link href='#'>Login</Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Button as={Link} color='primary' href='/authentication' variant='flat'>
                      Sign Up
                    </Button>
                  </NavbarItem>
                </NavbarContent>
            )
      }


    </Navbar>
  )
}

export default Header
