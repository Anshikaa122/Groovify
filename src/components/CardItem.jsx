import { useNavigate } from "react-router-dom";

const CardItem = ({ image, name, desc, id, variant, onClick }) => {
  const navigate = useNavigate();

  const containerClasses =
    variant === "album"
      ? "min-w-[250px] max-w-[220px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
      : "min-w-[250px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]";

  const imageClasses =
    variant === "album"
      ? "w-full h-[250px] object-cover rounded"
      : "rounded";

  const handleClick = () => {
    if (onClick) {
      onClick(name); // send artist/album name
    } else {
      navigate(`/album/${id}`);
    }
  };

  return (
    <div onClick={handleClick} className={containerClasses}>
      <img className={imageClasses} src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      {desc && <p className="text-slate-200 text-sm">{desc}</p>}
    </div>
  );
};

export default CardItem;
