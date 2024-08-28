//hooks
import React from "react";

interface StatBarProps {
  label: string;
  current: number;
  max: number;
  color: string;
}

const StatBar: React.FC<StatBarProps> = ({ label, current, max, color }) => (
  <>
    <div className="flex justify-between text-sm">
      <span>{label}:</span>
      <span>{`${current}/${max}`}</span>
    </div>
    <div className="w-full bg-gray-600 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${(current / max) * 100}%` }}
      ></div>
    </div>
  </>
);

export default StatBar;
