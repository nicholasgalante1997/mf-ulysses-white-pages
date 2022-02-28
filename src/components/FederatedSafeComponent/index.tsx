/* eslint-disable react/display-name */
import React from 'react';
import FederatedWrapper from './FederatedWrapper';

interface FederatedWrapperComponentProps {
    error?: string | React.ReactNode | JSX.Element;
    delayed?: string | React.ReactNode | JSX.Element;
    fallbackKey?: string;
    [x: string]: any;
}

export const safeWrapFederatedComponent = (Component) => ({ error, delayed, fallbackKey, ...props}: FederatedWrapperComponentProps) => (
    <FederatedWrapper error={error} delayed={delayed} fallbackKey={fallbackKey}>
        <Component {...props} />
    </FederatedWrapper>
);