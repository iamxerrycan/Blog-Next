import React from 'react'

const Colourboxlayout = ({children ,left ,right}) => {

    const isSidebar = true;

  return (
   <section>
    {children}
    {isSidebar ? left :right}
   </section>
  )
}

export default Colourboxlayout