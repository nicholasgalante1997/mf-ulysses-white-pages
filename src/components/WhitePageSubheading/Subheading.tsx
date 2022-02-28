import React from 'react';
import { CenterBox, SubText, Categories } from '../base';

interface SubheadingProps {
    author: string;
    shortDesc: string;
}

const Subheading: React.FC<SubheadingProps> = ({
    author,
    shortDesc,
}) => {
    return (
        <CenterBox>
            <SubText>
                {shortDesc}
            </SubText>
        </CenterBox>
    );
}

export default Subheading;