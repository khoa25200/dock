import './Reacts.less';

function Reacts({ reacts }: { reacts: string[] }) {
  let reactMoreThan4: string[] = [];
  let reactsLess4: string[] = [];
  let reactLength = reacts.length;

  if (reactLength > 4) {
    reactMoreThan4 = reacts.filter((_, index) => index > 4);
    reactsLess4 = reacts.slice(0, 4);
  }

  return (
    <>
      {reactLength > 4 ? (
        <>
          {reactsLess4.map((react, index) => {
            return <img className="react" key={index} src={react} alt="" width={15} height={15} />;
          })}
          <span className="more">+{reactLength - 4}</span>
        </>
      ) : (
        reacts.map((react, index) => {
          return <img className="react" key={index} src={react} alt="" width={15} height={15} />;
        })
      )}
    </>
  );
}

export default Reacts;
