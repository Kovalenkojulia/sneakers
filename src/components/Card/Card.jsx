import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

console.log(styles);

function Card({
  id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="120" />
          <rect x="3" y="140" rx="5" ry="5" width="155" height="15" />
          <rect x="366" y="218" rx="0" ry="0" width="13" height="6" />
          <rect x="6" y="168" rx="5" ry="5" width="100" height="15" />
          <rect x="4" y="233" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
          <rect x="147" y="223" rx="0" ry="0" width="2" height="8" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={isFavorite ? "/img/heart.svg" : "/img/heart-unliked.svg"}
              alt="Unliked"
            />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>{price} $</b>
            </div>

            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isAdded ? "/img/checked.svg" : "/img/plus.svg"}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
