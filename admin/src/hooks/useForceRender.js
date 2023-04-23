import React from 'react'

export function useForceRerender() {
    const [state, setState] = React.useState({ value: 10 });
  
    function rerenderForcefully() {
      setState((prev) => {
        return { ...prev };
      });
    }
  
    return rerenderForcefully;
}