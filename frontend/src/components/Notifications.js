import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <React.Fragment>
      {call.isReceivedCall && !callAccepted && (
        <div 
            style={{ 
                display: 'flex', 
                justifyContent: 'space-around' 
            }}
        >
          <h1>{call.name || "Unknown"} is calling:</h1>
          
          <Button 
            variant="contained" 
            color="primary" 
            onClick={answerCall}
        >
            Pick Up Call
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Notifications;