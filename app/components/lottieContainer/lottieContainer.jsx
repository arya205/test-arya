'use client'

import AnimationLottie from "../helper/animation-lottie";

const LottieContainer = ({ animationPath }) => {  

  return (
    <AnimationLottie animationPath={animationPath} />
  );
};

export default LottieContainer;