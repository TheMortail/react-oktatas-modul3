import { FC } from 'react';
import { ProductsCardComponentProps } from './types';
import classes from './ProductsCardComponent.module.scss';

const ProductsCardComponent: FC<ProductsCardComponentProps> = (props) => {
  const { id, name, price, image, description } = props;
  return (
    <div className={classes.card}>
      <img src={image} alt={name} className={classes.cardImage} />
      <div className={classes.cardContent}>
        <h2 className={classes.cardTitle}>{name}</h2>
        <p className={classes.cardDescription}>{description}</p>
        <div className={classes.cardDetails}>
          <span className={classes.cardId}>ID: {id}</span>
          <span className={classes.cardPrice}>${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardComponent;
