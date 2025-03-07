import { useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import useTurnOnGameboy from "../../hooks/useTurnOnGameboy";
import ContinueScreen from "../ContinueScreen";
import GameplayScreen from "../GameplayScreen";
import HomeScreen from "../HomeScreen";
import styles from "./Screen.module.css";

const Screen = () => {
  const snakeHasFailed = useAppSelector(
    (state) => state.snakeReducer.snakeHasFailed
  );

  const { batteryIsActivated, screenIsActivated } = useTurnOnGameboy();

  const [gameIsStarted, setGameIsStarted] = useState(false);

  return (
    <div className={styles.screenWrapper}>
      <div
        className={styles.battery}
        // TODO: replace by styled css
        style={{ opacity: batteryIsActivated ? "1" : "0" }}
      />
      <div
        className={styles.screen}
        // TODO: replace by styled css
        style={{ opacity: screenIsActivated ? "1" : "0" }}
      >
        {gameIsStarted ? (
          <>
            {snakeHasFailed && <ContinueScreen />}
            <GameplayScreen blur={snakeHasFailed} />
          </>
        ) : (
          <HomeScreen setGameIsStarted={setGameIsStarted} />
        )}
      </div>
    </div>
  );
};

export default Screen;
