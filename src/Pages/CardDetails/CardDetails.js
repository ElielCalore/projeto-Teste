//import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//import axios from "axios";
import { NavBar } from "../../Components/NavBar/NavBar";

export function CardDetails() {
  const { id } = useParams();

  return (
    <div>
      <div>
        <Link to="/">
          <NavBar />
        </Link>
      </div>
    </div>
  );
}
