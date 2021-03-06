import React from 'react';
import FlyoverDisplayContainer from "../containers/FlyoverDisplayContainer";

let boundsWarning = "Latitude can only be between -90 and 90. Longitude can only be between -180 and 180."

const StationTracker = (props) => {

  return (
    <div className="row">

        <div className="col-12 col-md-3 d-flex flex-column justify-content-around">
          <input
            type="number" name="Latitude" min="-90" max="90" step="0.00000001"
            value={props.inputLat}
            onChange={(e) => props.updateLat(e.target.value)}>
          </input>

          <input
            type="number" name="Longitude" step="0.00000001"
            value={props.inputLong}
            onChange={(e) => props.updateLong(e.target.value)}>
          </input>

          <button
            className="btn btn-light"
            onClick={
              (a,b)=> {
                if (
                  props.inputLat >= -90 &&
                  props.inputLat <= 90 &&
                  props.inputLong >= -180 &&
                  props.inputLong <= 180
                ) {
                  return props.loadFlyover(props.inputLat,props.inputLong);
                } else alert(boundsWarning)
              }
            }>
            Update Coordinates
          </button>
        </div>

      <div className="col-12 col-md-9">
        {<FlyoverDisplayContainer/>}
      </div>

    </div>
  );
}

export default StationTracker;
