import './Action.less';
function Action({ icon, actionName }: { icon: string; actionName: string }) {
  return (
    <div className="action">
      <img src={icon} alt={actionName} />
      <span>{actionName}</span>
    </div>
  );
}

export default Action;
