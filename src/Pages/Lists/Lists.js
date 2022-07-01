import { Link } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardList } from "../../Components/CardList/CardList";

export function Lists() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function AllList() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/elieldscalore"
        );
        setData([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }

    AllList();
  }, []);

  return (
    <div>
      <div>
        <Link to="/">
          <NavBar />
        </Link>
      </div>

      <div>
        {data.map((currentData) => {
          console.log(currentData.name);
          console.log(currentData._id);
          return (
            <>
              <Link to={`/lists/${currentData._id}`}>
                <CardList
                  name={currentData.name}
                  description={currentData._id}
                />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
