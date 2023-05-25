import React from "react";

const Security = () => {
  return (
    <section>
      <div className="w-[100%] h-[30px] bg-sky-400"></div>
      <div className="w-[700px] h-[500px] bg-slate-200 mt-20 shadow-2xl px-3 mb-10 lg:ml-56  ">
        <h1 className="text-base text-center pt-2">Security And User Access</h1>
        <div className="flex justify-start gap-5 ">
          <h1 className="text-base">Company Name</h1>
          <h2 className="font-bold text-base">
            :Viser Logistic Private Limited
          </h2>
        </div>
        <hr />
        <div className="flex gap-10">
          <h1 className="text-base">Control User Access to Company Data</h1>
          <div>
            <input className="px-2 py-1 focus:outline-2"></input>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-base">E-mail ID for Browser Access</h1>
        </div>
      </div>
    </section>
  );
};

export default Security;
