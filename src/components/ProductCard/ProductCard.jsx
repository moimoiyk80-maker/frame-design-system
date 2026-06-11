import "./ProductCard.css";

import Badge
from "../Badge/Badge";

function ProductCard({
  image,
  title,
  price,
  badge,
}) {

  return (

    <article
      className="product-card"
    >

      <div
        className="product-image"
      >

        {image
          ? (
              <img
                src={image}
                alt={title}
              />
            )
          : (
              <span>
                Image
              </span>
            )}

      </div>

      <div
        className="product-content"
      >

        <h3>
          {title}
        </h3>

        <p>
          {price}
        </p>

        {badge && (

            <span
            className="product-label"
            >
            {badge}
            </span>

            )}

      </div>

    </article>

  );

}

export default ProductCard;