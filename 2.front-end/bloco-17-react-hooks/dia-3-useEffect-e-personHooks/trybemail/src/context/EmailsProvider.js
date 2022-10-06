import React, { useState } from 'react'
import EmailContext from './EmailsContext';

function EmailsProvider({children}) {
    const [read, setRead] = useState(true);

    const contextValue = {read, setRead};

  return (
    <EmailContext.Provider value={contextValue}>
        {children}
    </EmailContext.Provider>
  )
}

export default EmailsProvider;