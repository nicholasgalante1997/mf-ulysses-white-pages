import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-left: 24px;
    margin-left: 16px;
    padding-top: 0px;
    padding-bottom: 0px;
`;

const Category = styled.span`
    font-family: 'Lora', serif;
    font-weight: 200;
    font-size: 1rem;
    font-style: italic;

    color: #800000;

    display: inline-flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 4px;
    padding: 16px;
    margin-left: 0.5rem;
`;

const CategoryNomer = styled.h1`
    font-family: 'Lora', serif;
    font-weight: 200;
    color: black;
    font-size: 1rem;
    font-style: italic;
`

interface CategoriesProps {
    categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => (
    <Container>
        <CategoryNomer>
            tags:
        </CategoryNomer>
        {categories.map(c => <Category>{c}</Category>)}
    </Container>
);

export default Categories;