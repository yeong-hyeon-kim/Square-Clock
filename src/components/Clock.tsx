import React from "react";

type ClockProps = {
  time: string;
  onRefresh: () => void;
};

function Clock({ time,onRefresh }: ClockProps) {
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={onRefresh}>현재 시간 업데이트</button>
    </div>
  );
}

export default Clock;
