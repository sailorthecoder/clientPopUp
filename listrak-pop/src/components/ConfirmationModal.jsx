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

  modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');

  return (
    <div>
      {modal ? (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <div className="confrimation-contatiner">
            <div className="main-text-confirmation">
              Just Like Old Friends
            </div>
            <div className="subtext-confirmation">
              We'll keep you updated on any deals, news, or gossip that comes our way!
            </div>
            <div>
              <button className="cta-confirmation">
                Go Shop!
              </button>
            </div>
          </div>
            <button className="close-modal" onClick={toggleModal}>
              X
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