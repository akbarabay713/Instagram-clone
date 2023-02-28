import Card from "./Card";

const Container = ({ posts }) => {
  const post = posts?.map((doc) => {
    return <Card key={doc.id} images={doc.images} />;
  });
  return (
    <div className="grid grid-cols-3 justify-items-center mt-5">{post}</div>
  );
};

export default Container;
