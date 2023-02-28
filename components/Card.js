const Card = ({ images }) => {
  return (
    <div className="w-72 h-72">
      <img src={images} alt="post" className="w-full h-full object-contain" />
    </div>
  );
};

export default Card;
