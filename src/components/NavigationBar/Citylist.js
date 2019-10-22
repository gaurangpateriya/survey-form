import React from 'react';

const CityList =(props)=>{
  return (
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
    <ul style={{listStyle='none'}}>
      <li>Ahemdabad</li>
      <li>Banglore</li>
      <li>Chandigarh Tricity</li>
      <li>Chennai</li>
      <li>Delhi NCR</li>
      <li>Dubai</li>
      <li>hyderabd</li>
      <li>Jaipur</li>
      <li>Kolkata</li>
      <li>Pune</li>
      <li>Mumbai</li>
    </ul>
    </Menu>
  )
}
