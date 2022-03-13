import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Page } from './components/base';

const FullLengthRow = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const SearchContainer = styled.div`
    width: 80%;
    height: 100%;
`

const SortContainer = styled.div`
    width: 10%;
    padding-left: 5%;
`

const Input = styled.input`
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    font-family: 'Lora', serif;
    font-weight: 100;
    font-style: normal;
    color: rgba(0,0,0,0.5);
    padding-left: 8px;
`

const LiteratureGeneralPage: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>(null)
    const [sortValue, setSortValue] = useState<string>(null)

    useEffect(() => {
        console.log({ searchValue });
        console.log({ sortValue })
    }, [searchValue, sortValue]);

    return (
        <Page>
            <FullLengthRow>
                <SearchContainer>
                    <Input 
                        placeholder='Search by title' 
                        name="search" value={searchValue} 
                        onChange={(e) => setSearchValue(e.target.value)} 
                    />
                </SearchContainer>
                <SortContainer>
                    <select name="sort" value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
                        <option value="Chronological">
                            Chronological
                        </option>
                        <optgroup label="By Genre">
                            <option value="Genre/Violent">Violent</option>
                        </optgroup>
                    </select>
                </SortContainer>
            </FullLengthRow>
        </Page>
    );
}

export default LiteratureGeneralPage;