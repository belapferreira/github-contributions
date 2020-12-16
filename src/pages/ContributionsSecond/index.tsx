import React, { useState, useCallback } from 'react';
import Heatmap from 'react-calendar-heatmap';
import { min, max } from 'date-fns';

import {
  Container,
  CalendarHeader,
  DropdownContainer,
  CalendarContainer,
} from './styles';

import database from '../../services/db.json';

import Calendar from '../../components/Calendar';

const ContributionsSecond: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2017');

  // Returns a array with all dates from JSON file
  const dates = database.map(date => new Date(date.date));

  // Checks minimum and maximum dates
  const startDate = min(dates);
  const endDate = max(dates);

  // Returns a array with years of all elements from JSON file
  const years = database.map(year => year.date.substr(0, 4));

  // Returns a array with years eliminating duplicates one
  const yearsFiltered = years.filter(
    (item, index) => years.indexOf(item) === index,
  );

  // Returns a array with all dates that match to the selected year from JSON file
  const databaseFormatted = database.filter(
    data => data.date.substr(0, 4) === selectedYear,
  );

  // Returns a sum of contributions according selected year
  const amount = databaseFormatted
    .filter(data => data.date.substr(0, 4) === selectedYear)
    .map(count => Number(count.count))
    .reduce((accumulator, number) => {
      return accumulator + number;
    });

  // Change the selected year when a option is chosen
  const handleYearChange = useCallback(event => {
    setSelectedYear(event.target.value);
  }, []);

  return (
    <Container>
      <CalendarHeader>
        <div className="left-side">
          <span>
            {amount}
            &nbsp; contribuições em
          </span>
          <DropdownContainer data-testid="dropdown">
            <select
              value={selectedYear}
              onChange={handleYearChange}
              data-testid="select"
            >
              {yearsFiltered.map(yearFiltered => (
                <option
                  key={yearFiltered}
                  className="option"
                  data-testid="dropdown-option"
                >
                  {yearFiltered}
                </option>
              ))}
            </select>
          </DropdownContainer>
        </div>

        <div className="right-side">
          <span className="settings">Contribution settings</span>
          <div className="dropdown" />
        </div>
      </CalendarHeader>

      <CalendarContainer>
        <div className="wrapper">
          <Heatmap
            startDate={startDate}
            endDate={endDate}
            values={databaseFormatted}
            gutterSize={2.5}
            classForValue={item => {
              let range = 0;

              if (item !== null) {
                if (item.count > 0 && item.count <= 10) {
                  range = 1;
                } else if (item.count > 10 && item.count <= 20) {
                  range = 2;
                } else if (item.count > 20 && item.count <= 30) {
                  range = 3;
                } else if (item.count > 30) {
                  range = 4;
                }
              }

              return `scale-${range}`;
            }}
            showWeekdayLabels
          />
        </div>

        <div className="bottom">
          <a href="https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile">
            Learn how we count contributions.
          </a>

          <div className="legend">
            <span>Less</span>
            <div className="scale-0" />
            <div className="scale-1" />
            <div className="scale-2" />
            <div className="scale-3" />
            <div className="scale-4" />
            <span>More</span>
          </div>
        </div>
      </CalendarContainer>
    </Container>
  );
};

export default ContributionsSecond;
