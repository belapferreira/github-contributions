import styled from 'styled-components';

export const Container = styled.div`
  height: 260px;
  border: 1px solid;
  border-color: #e1e4e8;
  border-radius: 6px;

  .bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;

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

    @media (max-width: 520px) {
      a {
        font-size: 1rem;
      }
    }

    a {
      color: #0366d6;
      text-decoration: none;
      align-self: flex-start;
      margin-left: 32px;
    }
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
`;

export const CalendarContainer = styled.svg`
  width: 100%;
  height: 220px;
  align-items: center;
  justify-content: center;

  .wrapper {
    .week {
      .Sun {
        width: 22px;
        height: 22px;
        x: 12px;
        y: 0px;
        fill: #ebedf0;
      }
      .Mon {
        width: 22px;
        height: 22px;
        x: 12px;
        y: 28px;
        fill: #ebedf0;
      }
      .Tue {
        width: 22px;
        height: 22px;
        x: 12px;
        y: 56px;
        fill: #ebedf0;
      }
      .Wed {
        width: 22px;
        height: 22px;
        x: 12px;
        y: 84px;
        fill: #ebedf0;
      }
      .Thu {
        width: 22px;
        height: 22px;
        x: 12px;
        y: 112px;
        fill: #ebedf0;
      }
      .Fri {
        width: 22px;
        height: 22px;
        x: 12px;
        y: 140px;
        fill: #ebedf0;
      }
      .Sat {
        width: 22px;
        height: 22px;
        x: 12px;
        y: 168px;
        fill: #ebedf0;
      }
    }
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
