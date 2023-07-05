import React from "react";

const List = [
  {
    id: 1,
    CompanyName: "Viser Logistic Pvt.Ltd",
    MailingName: "mail@gmail.com",
    Address: "Ghansoli",
    State: "Maharashtra",
    Country: "India",
    Pincode: "4000701",
    Mobile: "8866554466",
    Fax: "fax@gmail.com",
    Email: "Viser@gmail.com",
    Website: "viser.co.in",
  },
];

const Data = () => {
  return (
    <div>
      {List.map((item) => {
        <div>{item.List}</div>;
      })}
    </div>
  );
};

export default Data;
