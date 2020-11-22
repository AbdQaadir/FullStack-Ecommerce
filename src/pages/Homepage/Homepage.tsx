import React from 'react';

// Components
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main'

interface Props {
    products: Array<any>
}

const categories = ["men clothing", "jewelery", "electronics", "women clothing", ]
const Homepage:React.FC<Props> = ({products}) => {
    return (
       <>
       <Header />
       <Main />
       {categories.map((item) => <FeaturedProducts products={products} title={item}/>)}
       </>
    )
}

export default Homepage
