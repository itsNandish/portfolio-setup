

"use Client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width = "100%", height = "100%" }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width, height }}
    />
  );
};

export default AnimationLottie;
