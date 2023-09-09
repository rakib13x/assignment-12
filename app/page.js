import Link from "next/link";
import React from "react";
const Page = () => {
  return (
    <div>
      <div
        className="container bg-secondary text-white"
        style={{ height: "100vh" }}
      >
        <div
          className="row align-content-start justify-content-end"
          style={{ height: "100%" }}
        >
          <div className="col-6 text-center">
            <div className="btn-group mt-3">
              <Link className="btn btn-danger" href={"/login"} replace>
                Sign In
              </Link>
              <span className="mx-2"></span>
              <Link className="btn btn-warning" href={"/dashboard"} replace>
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
