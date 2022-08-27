import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} className='title'>
          {title.toUpperCase()}
        </Link>
      </h2>
      {/* here we creating preview row with only 4 items from a category. We ignore product using _ and ask for the second parameter from filter method which is index and by index filter only 4 first products */}
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
