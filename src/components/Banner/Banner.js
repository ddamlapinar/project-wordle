import React from "react";

const getBannerClass = (gameStatus) => {
  switch (gameStatus) {
    case "lost":
      return "sad";
    case "won":
      return "happy";
    default:
      return null;
  }
};

const SadBannerContent = ({ answer }) => (
  <p>
    Sorry, the correct answer is <strong>{answer}</strong>.
  </p>
);

const HappyBannerContent = ({ guessCount }) => (
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong> {guessCount} guesses</strong>
  </p>
);

function Banner({ gameStatus, answer, guessCount }) {
  const bannerClass = getBannerClass(gameStatus);
  return (
    <div className={`${bannerClass} banner`}>
      {gameStatus === "lost" && <SadBannerContent answer={answer} />}
      {gameStatus === "won" && <HappyBannerContent guessCount={guessCount} />}
    </div>
  );
}

export default Banner;
