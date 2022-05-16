import React, { useState } from 'react';

function PopUp() {
  return (
    <div classname="popupbrowsercontatiner">
      <h2>
        Pop Up
      </h2>
      <div classname="styletextbrowser">
        Get Your Style On
      </div>
      <div classname="andsignbrowser">
        {"&"}
      </div>
      <div classname="numberbrowser">
        20
      </div>
      <div classname="percentoffbrowser">
        {"% OFF"}
      </div>
      <div classname="emailandsubmitbrowser">
        <div classname="emailaddressformbrowser">
        <form>
          <label>
            <input type="email" name="email" placeholder="Email Address" required/>
          </label>
        </form>
        </div>
        <div classname="submissionbuttonbrowser">
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  )
}


export default PopUp;