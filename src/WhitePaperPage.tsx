import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useFederatedModule } from 'react-federated-module-loader';
import { SpinnerInfinity } from 'spinners-react';
import { WhitePageHeader } from './components/WhitePageHeader';
import { Subheading } from './components/WhitePageSubheading'
import { Page, Heading, Categories } from './components/base';

const SectionTitle = styled(Heading)`
  font-size: 2rem;
  font-weight: 600;
  font-style: italic;
  text-decoration: underline;
  align-self: flex-start;
  padding-left: 24px;
  padding-right: 24px;
`

const Paragraph = styled.p<{children: any}>`
  padding-left: 24px;
  padding-right: 24px;
  line-height: 1.25;
  font-weight: 300;
`

interface WhitePaperPageProps {
  articleKey?: string;
}

const WhitePaperPage: React.FC<WhitePaperPageProps> = ({ articleKey }) =>  {
  const { scriptFailed, error, isLoading, data } = useFederatedModule(
    'http://localhost:4002/remoteEntry.js',
    'app_data',
    articleKey
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
            h1: SectionTitle,
            p: Paragraph
          }}
        >
          {data && data.default.markdown} 
        </ReactMarkdown>
      </Page>
    );
}

export default WhitePaperPage;
