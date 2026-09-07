import BottomUpLetters from "/src/Text/BottomUpLetters";

const AnimatedText = ({ children, className, delay }) => {
  return (
    <BottomUpLetters
      className={className}
      delay={delay}
    >
      {children}
    </BottomUpLetters>
  );
};

export default AnimatedText;