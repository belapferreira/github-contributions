import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 0px 24px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 12px;

  .left-side {
    display: flex;
    align-items: center;
    align-content: center;

    span {
      margin-right: 4px;
    }

    @media (max-width: 800px) {
      span {
        font-size: 1.4rem;
      }
    }

    @media (max-width: 740px) {
      span {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 520px) {
      span {
        font-size: 1rem;
      }
    }
  }

  span {
    font-size: 1.6rem;
    color: #586069;
    display: flex;
    width: 100%;
  }

  .right-side {
    display: flex;
    align-items: center;
    align-self: flex-end;

    .settings {
      margin-right: 8px;
      width: 100;
      font-size: 1.64rem;

      @media (max-width: 800px) {
        font-size: 1.4rem;
      }

      @media (max-width: 740px) {
        font-size: 1.2rem;
      }

      @media (max-width: 520px) {
        font-size: 1rem;
      }
    }

    .dropdown {
      width: 0;
      height: 0;
      vertical-align: middle;
      content: '';
      border-top-style: solid;
      border-top-width: 4px;
      border-right: 4px solid transparent;
      border-bottom: 0 solid transparent;
      border-left: 4px solid transparent;
    }
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-self: center;
  align-content: center;

  select {
    color: #586069;
    font-size: 1.6rem;
    border: none;
  }

  @media (max-width: 800px) {
    select {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 740px) {
    select {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 520px) {
    select {
      font-size: 1rem;
    }
  }

  .option {
    font-size: 1.6rem;
    color: #586069;
    display: flex;
    width: 100%;
  }
`;

export const ProgressInfo = styled.div`
  display: flex;
  place-items: center;
  margin-bottom: 12px;
  width: 100%;

  img {
    width: 22%;
    height: 22%;
  }

  div {
    width: 100%;
    display: block;
    place-items: center;
    align-content: center;
    padding: 20px;
    position: relative;

    span {
      display: flex;
      font-size: 1.6rem;
      color: #586069;
      justify-content: center;
    }

    button {
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, 75%);
      transform: translate(-50%, 75%);
      background: #3178c6;
      width: 360px;
      height: 40px;
      font-size: 1.6rem;
      border: 0;
      border-radius: 4px;
      margin: 0;
      color: #ffffff;
      font-weight: bold;
    }

    @media (max-width: 800px) {
      span {
        font-size: 1.4rem;
      }

      button {
        width: 280px;
        height: 32px;
        font-size: 1.4rem;
      }
    }

    @media (max-width: 740px) {
      span {
        font-size: 1.2rem;
      }

      button {
        width: 240px;
        height: 28px;
        font-size: 1.2rem;
      }
    }

    @media (max-width: 520px) {
      span {
        font-size: 1rem;
      }

      button {
        width: 200px;
        height: 24px;
        font-size: 1rem;
      }
    }

    @media (max-width: 400px) {
      span {
        font-size: 1rem;
      }

      button {
        width: 160px;
        height: 20px;
        font-size: 1rem;
        top: 65%;
      }
    }
  }
`;
