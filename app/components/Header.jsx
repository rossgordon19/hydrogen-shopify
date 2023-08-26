import {Await, NavLink, useMatches} from '@remix-run/react';
import {Suspense, useEffect} from 'react';
import {Link} from 'react-scroll';

export function Header({header, isLoggedIn, cart}) {
  const {shop, menu} = header;
  return (
    <header className="header">
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

  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      const headerElem = document.querySelector('.header');
      headerElem.style.display = '';
      window.location.href = '/';
    }
  }

  const filteredMenuItems = (menu || FALLBACK_HEADER_MENU).items.filter(
    (item) => !['Home', 'Catalog', 'Contact'].includes(item.title),
  );

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <Link to="products" smooth={true} duration={500}>
          <NavLink>Products</NavLink>
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
            onClick={closeAside}
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
          <NavLink>Collections</NavLink>
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

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : '',
    color: isPending ? 'white' : 'white',
  };
}
