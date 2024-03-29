// file to export the Firebase module (exports Firebase class, Firebase context for Consumer and Provider components)

import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';

export default Firebase;

export { FirebaseContext, withFirebase }

// import React from 'react';

// const Firebase = () => (
//   <div>
//     <h1>Firebase</h1>
//   </div>
// );

// export default Firebase;
