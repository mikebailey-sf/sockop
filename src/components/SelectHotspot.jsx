import React from 'react';
import DropoffForm from './DropoffForm';
import Hotspot from './Hotspot';

const SelectHotspot = (props) => (
  
  props.hotspotSelected ?
    <div>
      <DropoffForm  
        hotspotSelected = {props.hotspotSelected}
        history = {props.history}
        districtSelected = {props.districtSelected}
      />
    </div>
  :
    <div className='hotspot-list'>
      {props.hotspots.map((hotspot) =>
        <Hotspot 
          selectHotspot = {props.selectHotspot}
          hotspot = {hotspot}
          key = {hotspot.location}
        />
      )}
    </div>
);
export default SelectHotspot;