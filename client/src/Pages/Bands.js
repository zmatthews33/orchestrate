import React, {useState} from "react";
import BandList from "../Components/BandList/BandList";
import "../Styles/Bands.scss";
import {Page} from "../Components/Containers";
import Modal from '../Components/Modal/Modal'
import AddArtist from '../Components/AddArtist/AddArtist'


function Bands() {
  const [ModalOpen, setModalOpen] = useState(true)

  const toggleModal = () => {
    setModalOpen(!ModalOpen);
  }

  return (
    <Page>
      <h1>Artists</h1>
      <BandList />
      <button onClick={() => toggleModal()}>Add an artist</button>
      {ModalOpen &&
        (
          <Modal closeModal={toggleModal} returnLink="artists">
            <AddArtist />
          </Modal>
        )
      }
    </Page>
  );
}

export default Bands;

// <button>
// <Link className="add-artist" to="/addartist">
//   Add an Artist
// </Link>
// </button>