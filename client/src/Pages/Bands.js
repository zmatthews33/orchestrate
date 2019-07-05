import React, { useContext, useReducer, useEffect } from "react";
import BandList from "../Components/BandList/BandList";
import "../Styles/Bands.scss";
import { Page } from "../Components/Containers";
import Modal from "../Components/Modal/Modal";
import AddArtist from "../Components/AddArtist/AddArtist";
import useAPI from "../Utils/useAPI";
import axios from "axios";

import { AppContext } from "../App";

function Bands() {
  const { userId } = useContext(AppContext);

  const InitState = {
    modalOpen: false,
    bands: []
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [State, setState] = useReducer(reducer, InitState);

  const getBands = useAPI("get", `/api/artist?created_by=${userId}`);

  useEffect(() => {
    if (getBands) setState({ bands: getBands });
  }, [getBands]);

  const toggleModal = () => {
    setState({ modalOpen: !State.modalOpen });
  };

  const deleteBand = id => {
    axios
      .delete(`/api/artist/${id}`)
      .then(res =>
        setState({ bands: [...State.bands.filter(band => band._id !== id)] })
      )
      .catch(err => console.log(err));
  };

  return (
    <Page>
      <h1>Artists</h1>
      <BandList bands={State.bands} deleteBand={deleteBand} />
      <button onClick={() => toggleModal()}>Add an artist</button>
      {State.modalOpen && (
        <Modal closeModal={toggleModal} returnLink="artists">
          <AddArtist userId={userId} />
        </Modal>
      )}
    </Page>
  );
}

export default Bands;
