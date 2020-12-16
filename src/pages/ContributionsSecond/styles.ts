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
  padding-top: 36px;
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

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  padding: 16px;
  width: 100%;
  border: 1px solid;
  border-color: #e1e4e8;
  border-radius: 6px;

  .wrapper {
    .scale-0 {
      fill: #ebedf0;
    }
    .scale-1 {
      fill: #9be9a8;
    }
    .scale-2 {
      fill: #40c463;
    }
    .scale-3 {
      fill: #30a14e;
    }
    .scale-4 {
      fill: #216e39;
    }

    width: 100%;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: -48px;
    width: 100%;

    @media (max-width: 920px) {
      margin-top: -40px;
    }

    @media (max-width: 820px) {
      margin-top: -32px;
    }

    @media (max-width: 800px) {
      a {
        font-size: 1.4rem;
      }
    }

    @media (max-width: 740px) {
      a {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 600px) {
      margin-top: -28px;
    }

    @media (max-width: 520px) {
      margin-top: -24px;

      a {
        font-size: 1rem;
      }
    }

    @media (max-width: 440px) {
      margin-top: -20px;
    }

    a {
      color: #0366d6;
      text-decoration: none;
      align-self: flex-start;
      margin-left: 32px;
    }

    .legend {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: #586069;
        margin-right: 16px;
      }

      .scale-0 {
        background: #ebedf0;
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }

      .scale-1 {
        background: #9be9a8;
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }

      .scale-2 {
        background: #40c463;
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }

      .scale-3 {
        background: #30a14e;
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }

      .scale-4 {
        background: #216e39;
        width: 20px;
        height: 20px;
        margin-right: 16px;
      }

      @media (max-width: 960px) {
        .scale-0,
        .scale-1,
        .scale-2,
        .scale-3,
        .scale-4 {
          width: 16px;
          height: 16px;
        }
      }

      @media (max-width: 800px) {
        .scale-0,
        .scale-1,
        .scale-2,
        .scale-3,
        .scale-4 {
          width: 14px;
          height: 14px;
        }

        span {
          font-size: 1.4rem;
        }
      }

      @media (max-width: 740px) {
        .scale-0,
        .scale-1,
        .scale-2,
        .scale-3 {
          width: 12px;
          height: 12px;
          margin-right: 3px;
        }

        .scale-4 {
          width: 12px;
          height: 12px;
          margin-right: 12px;
        }

        span {
          font-size: 1.2rem;
        }
      }

      @media (max-width: 600px) {
        .scale-0,
        .scale-1,
        .scale-2,
        .scale-3 {
          width: 10px;
          height: 10px;
          margin-right: 3px;
        }

        .scale-4 {
          width: 10px;
          height: 10px;
          margin-right: 11px;
        }
      }

      @media (max-width: 520px) {
        span {
          font-size: 1rem;
        }
      }

      @media (max-width: 480px) {
        .scale-0,
        .scale-1,
        .scale-2,
        .scale-3 {
          width: 8px;
          height: 8px;
          margin-right: 2px;
        }

        .scale-4 {
          width: 8px;
          height: 8px;
          margin-right: 11px;
        }
      }
    }
  }
`;
