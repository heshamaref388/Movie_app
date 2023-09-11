import React from "react";
import Avatar from "@mui/material/Avatar";

export default function Profile({ userData }) {
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  let { first_name, last_name, age, email } = userData;
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center profile">
        <div className=" ">
          {" "}
          <div className=" ">
            {/* <input className=" rounded-circle bg-danger " type="file" />{" "} */}
            {/* <img src={ <input className=" rounded-circle bg-danger " type="file"} alt="" /> */}
            <Avatar
              className=" bg-danger mb-4 m-auto "
              {...stringAvatar(`${first_name} ${last_name}`)}
            />
          </div>
          <div className="mb-3">
            Name : {first_name} {last_name}
          </div>
          <div className="mb-3">Age : {age}</div>
          <div className="mb-3">Email : {email}</div>
        </div>
      </div>
    </>
  );
}
