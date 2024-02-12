import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import CartDetails from "./bookListComponents/CartDetails";
import { BookContext, ThemeContext } from "./contexts";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(BookContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="logo image" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="ring icon" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setDarkMode(!darkMode)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={darkMode === true ? Sun : Moon}
                  width="24"
                  height="24"
                  alt="moon icon"
                />
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCart(true)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={ShoppingCart}
                  width="24"
                  height="24"
                  alt="shopping cart icon"
                />
                {state.cartData.length > 0 && (
                  <span className="absolute bottom-6 w-6 h-6 left-6 font-semibold text-white border rounded-full flex justify-center items-center bg-emerald-300">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
