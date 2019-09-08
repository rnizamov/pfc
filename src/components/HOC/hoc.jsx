import React from "react";

function hoc(Component) {
    class Hoc extends React.Component {
        
        render() {
            const { extraProp, ...passThroughProps } = this.props;

            return <Component extraProp={extraProp}  {...passThroughProps} />;
         }
    };

    Hoc.displayName = `WithSubscription(${getDisplayName(Component)})`;

    // hoistNonReactStatic(Hoc, Component);

    return Hoc;
  }

  function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
  }