import React from "react";

const Child = ({Array,Remaining}) => {
  return (
    <>
    <h1>
        Child Component
     </h1>
      <div className="row">
        <div className="col-md-6">
            Array:{Array}
        </div>
        <div className="col-md-6">
            Remaining Values:{Remaining}
        </div>
      </div>
    </>
  );
};

export default Child;
