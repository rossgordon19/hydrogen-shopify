import { useState } from 'react';
import {Await, NavLink, useMatches} from '@remix-run/react';
import {Suspense, useEffect} from 'react';
import { Link } from 'react-scroll';

export function Header({header, isLoggedIn, cart}) {
  const {shop, menu} = header;
  const [menuHeightClass, setMenuHeightClass] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#mobile-menu-aside') {
        setMenuHeightClass('h-[calc(100%+50px)]');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      } else {
        setMenuHeightClass('');
        document.body.style.overflow = 'auto'; // Allow scrolling
      }
    };

    handleHashChange(); // Call once for the initial value
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <header className={`header ${menuHeightClass}`}>
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <strong>{shop.name}</strong>
      </NavLink>
      <HeaderMenu menu={menu} viewport="desktop" />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}

export function HeaderMenu({menu, viewport}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  const className = `header-menu-${viewport}`;

  function closeMobileMenu() {
    window.location.hash = ''; // Reset the hash to close the aside
  }

  const filteredMenuItems = menu.items.filter(
    (item) => !['Home', 'Catalog', 'Contact'].includes(item.title)
  );

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <Link to="products" smooth={true} duration={500} onClick={closeMobileMenu}>
          <NavLink>End of Summer '23</NavLink>
        </Link>
      )}
      {filteredMenuItems.map((item) => {
        if (!item.url) return null;
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={closeMobileMenu}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
      {viewport !== 'mobile' && (
        <Link to="products" smooth={true} duration={500}>
          <NavLink>Collection</NavLink>
        </Link>
      )}
    </nav>
  );
}

function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const handleToggle = () => {
    const headerElem = document.querySelector('.header');
    if (window.location.hash === '#mobile-menu-aside') {
      headerElem.style.display = 'none';
    } else {
      headerElem.style.display = '';
    }
  };

  const handleInitialDisplay = () => {
    if (window.location.hash === '#') {
      const headerElem = document.querySelector('.header');
      headerElem.style.display = '';
    }
  };

  useEffect(() => {
    handleInitialDisplay();
    window.addEventListener('hashchange', handleToggle);
    return () => window.removeEventListener('hashchange', handleToggle);
  }, []);

  return (
    <a
      className="header-menu-mobile-toggle"
      href="#mobile-menu-aside"
      onClick={handleToggle}
    >
      <h3>☰</h3>
    </a>
  );
}

function CartBadge({count}) {
  return <a href="#cart-aside">Cart {count}</a>;
}

function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : '',
    color: isPending ? 'white' : 'white',
  };
}
