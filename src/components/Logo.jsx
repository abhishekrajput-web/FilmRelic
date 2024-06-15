import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div className="flex-1">
      <Link className="btn btn-ghost normal-case text-xl text-gray-100" to="/">
      {/* daisyUI */}
      Film_Relic
      </Link>
  </div>
  )
}

export default Logo;