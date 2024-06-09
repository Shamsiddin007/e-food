import React, { forwardRef } from "react";
import './Branches.css'


const Branches = forwardRef(({ visible, ...props }, ref) => {
  return (
    <div
      className={`branch border-2 w-3/5 mb-12 border-e-8 rounded-lg ${
        visible ? "branch-visible" : "branch-hidden"
      }`}
      ref={ref}
      data-index={props["data-index"]}
    >
      <div className="flex border-b-2 justify-between p-2">
        <div>
          <h1>{props.name}</h1>
          <p className="pb-3 opacity-50">{props.adress}</p>
        </div>
        <div>
          <p className="opacity-50">{props.time}</p>
        </div>
      </div>

      <div className="flex justify-between pt-4 p-2">
        <div>
          <p className="opacity-50">{props.working}</p>
          <p>{props.day}</p>
        </div>
        <div>
          <p className="opacity-50">{props.phonetext}</p>
          <p>+{props.phone}</p>
        </div>
      </div>
    </div>
  );
});

export default Branches;
  