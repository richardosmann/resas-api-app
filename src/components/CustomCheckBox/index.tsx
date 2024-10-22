import './styles.css';

const CustomCheckBox = ({ name }: { name: string }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id={name} />
      <label>{name}</label>
    </div>
  );
};

export default CustomCheckBox;
