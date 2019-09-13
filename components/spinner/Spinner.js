import React from 'react';

import classes from './spinner.styles.scss';

const Spinner = () => (
   <div className={classes.spinnerOverlay}>
    <div className={classes.spinnerContainer}/>
   </div>
)

export default Spinner;