import React from 'react';
import {addFeature} from '../actions/Actions' //import action creator 
import { connect } from 'react-redux'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {() => props.addFeature(props.addedFeature)}>Add</button> 
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
//add object creator to connect function and call via props
export default connect(
  null,
  {addFeature})(
    AdditionalFeature);
//export default AdditionalFeature