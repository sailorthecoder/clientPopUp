import React, { useState } from 'react';

function ConfirmationModal({page, setPage}) {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleBrowserSubmission = (e) => {
    e.preventDefault();
    setPage(!page);
  };

  modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

  return (
    <div>
      {modal ? (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <div classname="confrimationbrowsercontatiner">
            <h2>
              Confirmation Page
            </h2>
            <div classname="maintextconfirmationbrowser">
              Just Like Old Friends
            </div>
            <div classname="subtextconfirmationbrowser">
              We'll keep you updated on any deals, news, or gossip that comes our way!
            </div>
            <div classname="ctaconfirmationbrowser">
              <button>
                Go Shop!
              </button>
            </div>
          </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      ) : null}
      <button onClick={handleBrowserSubmission} type="submit">
        RESET
      </button>
    </div>
  );
}

export default ConfirmationModal;