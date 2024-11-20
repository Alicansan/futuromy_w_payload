import Link from 'next/link'
import React from 'react'


interface MenuLinkProps {
    link: string
    name: string
}


const MenuLink = ({link, name}: MenuLinkProps) => {
  return (
     <Link
              className="font-mono text-sm font-medium text-gray-600 hover:tex-gray-800 md:text-base"
              href={link}
            >
              {name}
            </Link>
            
  )
}

export default MenuLink
