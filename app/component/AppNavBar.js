"use client";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AppNavBar = () => {
  const router = useRouter();
  const Logout = async () => {
    const response = await fetch("/api/login");
    const json = await response.json();
    if (json["status"] === true) {
      router.replace("/");
    }
  };

  return (
    <div>
      <Navbar
        expand="lg"
        className="shadow-sm text-bg-secondary"
        variant="light"
      >
        <div className="container">
          <Navbar.Brand href="#">This is a demo app</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link href="/" className="btn btn-warning">
                Home
              </Link>
            </Nav>
            <div className="">
              <button onClick={Logout} className="btn btn-danger">
                Logout
              </button>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
