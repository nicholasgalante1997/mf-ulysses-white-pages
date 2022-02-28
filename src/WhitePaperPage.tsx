import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useFederatedModule } from 'react-federated-module-loader';
import { SpinnerInfinity } from 'spinners-react';
import { WhitePageHeader } from './components/WhitePageHeader';
import { Subheading } from './components/WhitePageSubheading'
import { Page, Heading, Categories } from './components/base';


interface WhitePaperPageProps {
  articleKey?: string;
}
const WhitePaperPage: React.FC<WhitePaperPageProps> = ({ articleKey }) =>  {
  const { scriptFailed, error, isLoading, data } = useFederatedModule(
    'http://localhost:4002/remoteEntry.js',
    'app_data',
    './OriginObject'
  );
  const [name, setName] = useState<string>(null);
  const [author, setAuthor] = useState<string>(null);
  const [shortDesc, setShortDesc] = useState<string>(null);
  const [imageModule, setImageModule] = useState<string>(null);
  const [categories, setCategories] = useState<string[]>(null);

  useEffect(() => {
    if (data) {
      setName(data.default.meta.name);
      setAuthor(data.default.meta.author);
      setCategories(data.default.meta.categories);
      setShortDesc(data.default.meta.shortDesc);
      setImageModule(data.default.meta.imageModule);
    }
  }, [data])

  if (scriptFailed) {
      console.log('scriptFailed: true')
      return <p>script failed to append to the dom</p>
  }

  if (error) {
      console.error('useRemoteObject errored out')
      return <p>error</p>
  }

  if (isLoading) {
      return (
      <Page>
        <SpinnerInfinity enabled={isLoading} color={'black'} />
      </Page>
      );
  }

  if (data) {
    console.log(data.default.meta.categories);
  }

    return (
      <Page>
        <WhitePageHeader 
          name={name} 
          imageModule={imageModule}
        />
        <Subheading 
          author={author}
          shortDesc={shortDesc}
        />
        <Categories categories={categories ?? []} />
        <ReactMarkdown
          components={{
            h1: Heading,
          }}
        >
          {data && data.default.markdown} 
        </ReactMarkdown>
      </Page>
    );
}

export default WhitePaperPage;
