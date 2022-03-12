import React from 'react';
import { datatype } from 'prop-types';

function PropsFuncDefault_005(props) {
    return (
        <h2>{props.msg} [ THIS IS PropsFuncDefault_005 ]</h2>
    );
}

PropsFuncDefault_005.defaultProps = {
    msg: "기본값",
}

export default PropsFuncDefault_005;