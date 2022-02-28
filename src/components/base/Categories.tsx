import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin: 0px;
`;

const Category = styled.h2`
    font-family: 'Lora', serif;
    font-weight: 800;
    color: darkred;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-style: bold;
    padding-left: 2rem;
`;

const CategoryNomer = styled.h1`
    font-family: 'Lora', serif;
    font-weight: 600;
    color: black;
    font-size: 2rem;
    font-style: italic;
`

interface CategoriesProps {
    categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => (
    <Container>
       <CategoryNomer>
           Categories:
        </CategoryNomer> 
        {categories.map(c => <Category>{c}</Category>)}
    </Container>
);

export default Categories;