import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  CalendarHeader,
  DropdownContainer,
  ProgressInfo,
} from './styles';

import database from '../../services/db.json';
import creationProcess from '../../assets/creation-process.svg';

import Calendar from '../../components/Calendar';

const ContributionsMain: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2017');

  const history = useHistory();

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

  const handleClick = () => {
    history.push('/contributions-second');
  };

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

      <Calendar />

      <ProgressInfo>
        <img src={creationProcess} alt="Processo de criação" />
        <div>
          <span>
            Esta página está em processo de criação. Clique no botão abaixo para
            acessar uma segunda opção.
          </span>

          <button type="submit" onClick={handleClick}>
            Quero ver
          </button>
        </div>
      </ProgressInfo>
    </Container>
  );
};

export default ContributionsMain;
