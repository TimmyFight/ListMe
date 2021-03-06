import TitleH2 from "../../Atoms/TitleH2/TitleH2";
import OpenFormButton from "../../Atoms/OpenFormButton/OpenFormButton";

const ZeroNotes = (props) => {
  const { children } = props;
  return (
    <>
      <TitleH2>{children}</TitleH2>
      <OpenFormButton>Open form and add new note</OpenFormButton>
    </>
  );
};

export default ZeroNotes;
