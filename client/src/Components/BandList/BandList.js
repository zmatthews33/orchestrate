import "./BandList.scss";
import React, { useState, useEffect, useContext } from "react";
import useAPI from "../../Utils/useAPI";
import { AppContext } from "../../App";
import axios from "axios";
export default function BandList() {
    const [bands, setBands] = useState([]);
    const { userId } = useContext(AppContext);

    const getBands = useAPI("get", `/api/artist?created_by=${userId}`);

    useEffect(() => {
        if (getBands) setBands(getBands);
    }, [getBands]);

    const deleteBand = el => {
        axios
            .delete(`/api/artist/${el._id}`)
            .then(response =>
                setBands([
                    ...bands.filter(band => band._id !== response.data._id)
                ])
            );
    };

    return (
        <div id="bandList">
            {bands.map(band => (
                <div className="band_">
                    <div className="band_name">{band.name}</div>
                    <span
                        className="band_delete"
                        onClick={() => deleteBand(band)}
                    >
                        x
                    </span>
                </div>
            ))}
        </div>
    );
}
