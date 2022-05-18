import React, { useState } from 'react';

function PopUpModal({page, setPage}) {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleBrowserSubmission = (e) => {
    e.preventDefault();
    setPage(!page);
  }

  modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

  return (
    <div>
      {modal ? (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Pop Up</h2>
            <div classname="popupbrowsercontatiner">
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
                  <button onClick={handleBrowserSubmission} type="submit">Sign Up</button>
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