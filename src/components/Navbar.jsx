import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar.jsx';

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">Shruti</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Collections</a></li>
      <li>
  <details>
    <summary>Arrivals</summary>
    <ul className="bg-base-100 rounded-t-none p-2">
      <li><a href="#">Banarasi</a></li>
      <li><a href="#">Embroidery</a></li>
    </ul>
  </details>
</li>

      <li><a>Sarees</a></li>
      <li><a>Offers</a></li>
      <li><a><FontAwesomeIcon icon={faShoppingCart} /></a></li>
      <li><SearchBar/></li>
      <li><a><FontAwesomeIcon icon={faHashtag} /></a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar