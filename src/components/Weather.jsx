export const Weather = () => {
  return (
    <div className="weather-widget">
      <div className="day">
          <h5>Day</h5>
      </div>
      <div className="condition">
          <h5>Condition</h5>
      </div>
      <div className="min-max-container">
          <div className="min-temp">
              MIN
          </div>
          <div className="max-temp">
              MAX
          </div>
      </div>
    </div>
  );
};
