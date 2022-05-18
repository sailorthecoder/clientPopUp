import React, { useState } from 'react';
import validator from 'validator';

function PopUpModal({page, setPage}) {
  const [modal, setModal] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(true);


  const toggleModal = () => {
    setModal(!modal);
  };

  const handleBrowserSubmission = (e) => {
    setPage(!page);
  };

  const handleEmailAddress = (e) => {
    e.preventDefault();
      setEmail(e.target.value);
      validateEmail(e);
  };

  const registerEmail = (obj) => {
    console.log(obj);
  };

  const objPopulation = (e) => {
    e.preventDefault();
    let dataObj = {
      email : email
    }
    registerEmail(dataObj);
    handleBrowserSubmission();
  };

  const validateEmail = (e) => {
    e.preventDefault();
    return validator.isEmail(e.target.value) ? setEmailError(false) : setEmailError(true);
  };

  modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');

  return (
    <div>
      {modal ? (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Pop Up</h2>
            <div className="popupbrowsercontatiner">
              <div className="styletextbrowser">
                Get Your Style On
              </div>
              <div className="andsignbrowser">
                {"&"}
              </div>
              <div className="numberbrowser">
                20
              </div>
              <div className="percentoffbrowser">
                {"% OFF"}
              </div>
              <div className="emailandsubmitbrowser">
                <div className="emailaddressformbrowser">
                <form>
                  <input onChange={handleEmailAddress} type="text" placeholder="Email Address" required/>
                  <div className="submissionbuttonbrowser">
                    {emailError || email.length <= 0 ?
                    <div>
                      <button disabled={true}>Sign Up</button>
                    </div> :
                    <button onClick={objPopulation} type="submit">Sign Up</button>}
                  </div>
                </form>
                </div>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      ) : null}
      <button onClick={toggleModal} type="submit">
        RESET
      </button>
    </div>
  );
}

export default PopUpModal;