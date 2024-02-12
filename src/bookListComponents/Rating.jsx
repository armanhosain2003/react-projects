import Star from "../assets/star.svg";

function Rating({ rating }) {
  const stars = Array(rating).fill();
  return stars.map((star, index) => (
    <img key={index} src={Star} width="14" height="14" alt="star image" />
  ));
}

export default Rating;
