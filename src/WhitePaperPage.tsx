import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useFederatedModule } from 'react-federated-module-loader';

const Page = styled.main`
  padding: 16px;
  margin-left: 10vw;
  margin-right: 10vw;
`

const Heading = styled.h2<{children: any}>`
  font-size: xx-large;
  color: deeppink;
`
interface WhitePaperPageProps {
  articleKey?: string;
}
const WhitePaperPage: React.FC<WhitePaperPageProps> = ({ articleKey }) =>  {
  const { scriptReady, scriptFailed, error, isLoading, data } = useFederatedModule(
    'http://localhost:4002/remoteEntry.js',
    'app_data',
    './OriginObject'
)

  if (scriptReady) {
      console.log('scriptReady: true')
  }

  if (scriptFailed) {
      console.log('scriptFailed: true')
      return <p>loading</p>
  }

  if (error) {
      console.error('useRemoteObject errored out')
      return <p>error</p>
  }

  if (isLoading) {
      console.log('useRemoteObject is loading')
      return <p>loading...</p>
  }

  if (data) {
      console.log('target' + ' / ' + JSON.stringify(data))
  }
  return (
    <Page>
      <ReactMarkdown
        components={{
          h1: Heading,
        }}
      >
        {data && data.default.markdown} 
      </ReactMarkdown>
    </Page>
  );
  // return (data && data.html);
}

export default WhitePaperPage;
