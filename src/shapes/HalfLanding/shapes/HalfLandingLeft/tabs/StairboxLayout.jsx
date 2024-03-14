import TurningArrowCard from "../../../../../components/atom/TurningArrowCard";

const StairboxLayout = () => {
  const handleLeft = () => {
    alert("");
  };
  const handleRight = () => {
    alert("");
  };
  return (
    <div>
      <div>
        <TurningArrowCard handleLeft={handleLeft} handletRight={handleRight} />
      </div>
    </div>
  );
};

export default StairboxLayout;
