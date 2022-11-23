import "./App.css";
import Wrapper from "./app/components/Wrapper";
import Provider from "./app/provider/CalculatorContext";
import CalculatorScreen from "./app/components/CalculatorScreen";
import ButtonHolder from "./app/components/ButtonHolder";
import Button from "./app/containers/Button";

function App() {
  const containerStyle = {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: `calc(100vh - 100px)`,
  };

  const calculatorContent = {
    width: `500px`,
    height: `calc(100vh / 2.3 - 100px)`,
    position: `relative`,
  }

  const calculatorButtons = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <Provider>
      <div style={containerStyle}>
        <div style={calculatorContent}>
          <Wrapper>
            <CalculatorScreen />
            <ButtonHolder>
              {calculatorButtons.flat().map((btn, i) => {
                return <Button value={btn} key={i} />;
              })}
            </ButtonHolder>
          </Wrapper>
        </div>

      </div>
    </Provider>

  );
}

export default App;
