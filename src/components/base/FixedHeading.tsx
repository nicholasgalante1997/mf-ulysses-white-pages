import React from 'react';
import styled from 'styled-components'
import Heading from './Heading';

const FixedHeading = styled(Heading)`
    position: absolute;
    bottom: -2.25rem;
    left: 24px;
    font-size: ${(props: { fontSize: string }) => props.fontSize};
    font-weight: 500;
    font-family: 'Lora', serif;
    opacity: 1.0;
    z-index: 1;
    color: #800000;
    text-decoration: underline;
`


export default FixedHeading;