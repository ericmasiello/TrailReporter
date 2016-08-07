import React, {Component} from 'react';

export default (WrappedComponent) => {
  class WorkflowHOC extends Component {
    constructor(props) {
      super(props);
      this.goTo = this.goTo.bind(this);
      this.goBack = this.goBack.bind(this);
    }
    goTo(routeTo) {
      const name = routeTo;
      const {navigator} = this.props;
      return () => {
        navigator.push({name});
      };
    }
    goBack() {
      this.props.navigator.pop();
    }
    render() {
      return <WrappedComponent {...this.props} goTo={this.goTo} goBack={this.goBack} />;
    }
  }

  WorkflowHOC.displayName = 'WorkflowHOC';
  WorkflowHOC.propTypes = {
    navigator: React.PropTypes.object.isRequired
  };

  return WorkflowHOC;
};
