import Image from "next/image";
const Card = ({ images }) => {
  return (
    <div className="w-72 h-72 shadow mb-5">
      <Image
        src={images}
        alt="post"
        className="w-full h-full object-contain"
        width="400"
        height="400"
      />
    </div>
  );
};

export default Card;
