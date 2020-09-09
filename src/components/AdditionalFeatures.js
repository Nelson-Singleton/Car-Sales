import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux'

//step 2: connect components to the redux store
const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

//wrap export in connect
//pass component in 2nd call
//first call: take in a function and object
//function is abstracted out of the connect call via mapStateToProps

const mapStateToProps = state => { 
  return { 
    additionalFeatures: state.AdditionalFeatures 
  }} 

export default connect(
  mapStateToProps,
  {}
  ) (AdditionalFeatures);
