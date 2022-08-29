import {
  CategoryPreviewContainer,
  CategoryTitle,
  Preview,
} from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title}</CategoryTitle>
      </h2>
      {/* here we creating preview row with only 4 items from a category. We ignore product using _ and ask for the second parameter from filter method which is index and by index filter only 4 first products */}
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
