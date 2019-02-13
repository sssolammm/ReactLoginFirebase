import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class LogIn extends React.Component {
  render() {
    console.log(this.props.numero);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>LogIn</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    numero: state.reducerPrueba
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}

// export default LogIn;
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);