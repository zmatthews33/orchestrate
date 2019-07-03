import "./BandList.scss";
import React, { useState, useEffect } from "react";
import useAPI from "../../Utils/useAPI";
export default function BandList() {
    const [bands, setBands] = useState([]);

    const getBands = useAPI("get", "/api/artist");

    useEffect(() => {
        if (getBands) setBands(getBands);
    }, [getBands]);

    return (
        <div id="bandList">
            {bands.map(band => (
                <div className="band_">
                    <div className="band_name">{band.name}</div>
                </div>
            ))}
        </div>
    );
}
