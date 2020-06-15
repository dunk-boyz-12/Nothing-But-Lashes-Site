import React, { Component, useState } from 'react'

const Slide = ({src}) => {

   let styles = {
      height: 90+"vh",
      width: 100+"%",
      opacity: 75+"%",
   };
   return (
        <img src={src} style={styles}></img>
   );

}

export default Slide