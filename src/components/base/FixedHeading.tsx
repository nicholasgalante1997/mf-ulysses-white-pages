import React from 'react';
import styled from 'styled-components'
import Heading from './Heading';

const FixedHeading = styled(Heading)`
    position: absolute;
    bottom: -3rem;
    left: 24px;
    font-size: 6rem;
    font-weight: 500;
    font-family: 'Lora', serif;
    opacity: 1.0;
    z-index: 1;
`

export default FixedHeading;