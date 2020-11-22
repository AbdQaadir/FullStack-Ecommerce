import React from 'react'
// import styled from 'styled-components';

import {Container} from '../../styles/GlobalStyles';



interface Props {
    products: Array<any>
}

const ProductPage:React.FC<Props> = ({products}) => {
    return (
        <Container>
            Hello PAge
        </Container>
    )
}

export default ProductPage
