import { getCalApi } from "@calcom/embed-react";

const CalButton = ({ 
  children, 
  calLink = "aiestra/30min", 
  className = "",
  onClick,
  ...props 
}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    
    // Open Cal.com booking
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("init", calLink);
      cal("open");
    })();
  };

  return (
    <button 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CalButton;
