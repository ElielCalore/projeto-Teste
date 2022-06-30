import { Link } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import { ButtonCard } from "../../Components/ButtonCard/ButtonCard";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
export function HomePage() {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    movies: [],
  });
  const navigate = useNavigate();
  useEffect(() => {
    async function Movies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=7a3601c5df0852c30b3bc45cb6ac2fc1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    Movies();
  }, []);

  function handleChangeMovie(current) {
    console.log(current);
    setForm({ ...form, movies: [...form.movies, current] });
  }

  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ironrest.herokuapp.com/elieldscalore", form);
      toast.success("Lista Criada Com Sucesso !");
      navigate("/lists");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div>
        <Link to="/">
          <NavBar />
        </Link>
      </div>
      <form className="d-flex p-4 flex-row">
        <div className="d-flex flex-row m-5">
          <div>
            <label htmlFor="name-input">Nome</label>
            <input
              id="owner-input"
              value={form.name}
              type="string"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description-input">Descrição</label>
            <input
              id="description-input"
              value={form.description}
              type="string"
              name="description"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            type="button"
          >
            Criar Lista
          </button>
        </div>
        <div>
          <Link className="btn btn-danger" type="button" to="/lists">
            Listas Criadas
          </Link>
        </div>
      </form>
      <div>
        {movies.map((currentMovie) => {
          return (
            <div>
              <Card
                onClick={handleChangeMovie}
                image={currentMovie.backdrop_path}
                title={currentMovie.original_title}
                id={currentMovie.id}
              />
              <ButtonCard
                onClick={() => {
                  handleChangeMovie(currentMovie);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
