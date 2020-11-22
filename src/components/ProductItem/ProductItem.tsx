import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const ProductDiv = styled.div` 
    width: 230px;
    height: 280px;
    box-shadow: 1px 4px 10px 1px rgba(0,0,0,0.085);
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
    position: relative;
    cursor: pointer;
    .overlay{
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        rigth: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        padding: 20px;
        background: rgba(0,0,0,.8);
        transition: .5s;
        text-align: center;
        .title{
            color: var(--main-green);
            font-size: 17px;
        }
        .price {
            color: red;
            font-size: 20px;
            font-weight: 600;
            padding: 5px;
            width: 100px;
            margin: 7px auto;
        }
        a {
            display: block;
            text-decoration: none;
            color: var(--dark);
            border: none;
            padding: 8px 12px;
            cursor: pointer;
            font-size: 15px;
            font-weight: 600;
            margin-top: 24px;
            border-radius: 8px;
            background: var(--light);
        }
    }
    &:hover{
        .overlay{
            opacity: 1;
            cursor: default;
        }
    }
    .img-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center; 
        width: 100%;
        height: 100%;
        img{
            width: 90%;
            height: 90%;
            object-fit: contain;
        }
    }

`

interface Props {
    category: string;
    description: string;
    id: number;
    image: string;
    title: string;
    price: number;
}


const ProductItem:React.FC<Props> = ({ price, title, id, image, category}) => {
    return (
        <ProductDiv>
            <div className="overlay">
                <h3 className="title">{title.substring(0, 50)}...</h3>
                <h4 className="price">$ {price}</h4>
                <Link to={`/product/${category}/${id}`} className="btn">View Product</Link>
            </div>
            <div className="img-wrapper">
                <img src={image} alt="Showing product item"/>
            </div>
        </ProductDiv>
    )
}

export default ProductItem
