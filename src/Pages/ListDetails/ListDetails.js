import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Card } from "../../Components/Card/Card";

export function ListDetails() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function Details() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/elieldscalore/${id}`
        );
        setLoading(false);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    Details();
  }, []);

  async function DeleteList(current) {
    const clone = { ...data };
    const remove = clone.movies.filter((currentMovie) => {
      return currentMovie.id !== current.id;
    });
    setData({ ...data, movies: remove });
  }

  async function handleSubmitToSave(e) {
    delete data._id;
    e.preventDefault();
    try {
      await axios.put(
        `https://ironrest.herokuapp.com/elieldscalore/${id}`,
        data
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return loading ? (
    <h1>Carregando</h1>
  ) : (
    <div>
      <div>
        <Link to="/">
          <NavBar />
        </Link>
      </div>

      <div>
        {data.movies.map((currentMovie) => {
          return (
            <div>
              <Card
                onChange={handleChange}
                image={currentMovie.backdrop_path}
                title={currentMovie.original_title}
                id={currentMovie.id}
              />
              <button
                onClick={() => {
                  DeleteList(currentMovie);
                }}
                type="button"
                className="btn btn-danger"
              >
                Remover Filme da Sua Lista!
              </button>
            </div>
          );
        })}

        <div>
          <button onClick={handleSubmitToSave} className="btn btn-primary">
            Salvar Alterações!
          </button>
        </div>
      </div>
    </div>
  );
}
