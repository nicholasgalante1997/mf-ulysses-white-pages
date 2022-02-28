import React, { useEffect, useState } from 'react';
import { SpinnerInfinity } from 'spinners-react';
import { useFederatedModule } from 'react-federated-module-loader';
import { FixedHeading, HeaderBox, HeaderImage } from '../base';
import { titlecaseString } from '../../utils';


interface WhitePageHeaderProps {
    name: string;
    imageModule: string;
}

const WhitePageHeader: React.FC<WhitePageHeaderProps> = ({ 
    name,
    imageModule
}) => {
    const { data, isLoading, error, scriptFailed } = useFederatedModule(
        'http://localhost:4002/remoteEntry.js',
        'app_data',
        imageModule
    )

    const [imgUrl, setImgUrl] = useState<string>(null);

    useEffect(() => {
        if (data) {
            setImgUrl(data.default);
        }
    }, [data]);

    if (isLoading || !imgUrl) {
        return (
            <SpinnerInfinity color="black" />
        )
    }

    if (error || scriptFailed) {
        console.log('an error occurred');
        console.log(error, 'error');
        console.log(scriptFailed, 'script failed');
        return <p>error;</p>
    }

    return (
        <HeaderBox>
            <HeaderImage src={imgUrl} />
            <FixedHeading>{titlecaseString(name)}</FixedHeading>
        </HeaderBox>
    );
}

export default WhitePageHeader;