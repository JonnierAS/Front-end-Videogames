import style from "./create.module.css";
import img from "../../../img/home.png";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, postGame } from "../../redux/actions";

const Create = () => {
  const navigate = useNavigate();
  const genress = useSelector((state) => state.allGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    if (genress.length === 0) {
      dispatch(getGenres());
    }
  }, []);

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
    background_image: "",
  });

  const platforms = [
    "PC",
    "Linux",
    "Xbox One",
    "PlayStation 4",
    "PlayStation 5",
    "Wii U",
    "Nintendo Switch",
    "Mac OS",
    "iOS",
    "Nintendo 3DS",
    "Android",
    "Steam Deck",
  ];

  const [error, setError] = useState({
    name: "Name can’t be empty",
    description: "",
    released: "",
    rating: "",
    genres: "",
    platforms: "",
    background_image: "",
  });
  
  const validate = () => {
    if (input.name.length < 4) {
      setError({ name: "Write a valid name (at least 4 characters)" });
      return;
    }
    if (input.name === "") {
      setError({ name: "Name can’t be empty" });
      return;
    }

    
      if (isNaN(parseInt(input.rating))) {
        setError({ rating: "Only numbers" });
        return;
      } 
    
    if (input.rating <= 0 || input.rating > 5) {
      setError({ rating: "rating Min 1 - Max 5" });
      return;
    } 

    if (input.description.length < 30 || input.description.length > 150) {
      setError({ description: "More of 30 character" });
      return;
    }

    setError({
      ...error,
      name: "",
      description: "",
      released: "",
      rating: "",
      genres: "",
      platforms: "",
      background_image: "",
    });
  };
//Platforms
  const handleSelection = (event) => {
    event.preventDefault();
    const { id, name } = event.target;

    const selectionExist = input[name].find((g) => g === id);
    if (selectionExist) {
      return setInput((state) => ({
        ...state,
        [name]: state[name].filter((s) => s !== selectionExist),
      }));
    }
    if (id === "clear-all") {
      setInput((state) => ({ ...state, [name]: [] }));
    } else {
      if (input[name].length === 4) return;
      setInput((state) => ({
        ...state,
        [name]: [...new Set(state[name].concat(id))],
      }));
    }
  };

  const disableButton = () => {
    let disableAux = true;
    for (let err in error) {
      if (error[err] === "") disableAux = false;
      else {
        disableAux = true;
        break;
      }
    }
    return disableAux;
  };

  const handleDelete = (event) => {
    setInput({
      ...input,
      [event.target.name]: [...input[event.target.name].filter(p=> p!==event.target.id)]
    })
  };

  const handleChange = (event) => {
    if (event.target.name === "platforms") {
      if (input.genres.includes(event.target.value)) return;
      setInput({
        ...input,
        [event.target.name]: [...input[event.target.name], event.target.value],
      });
    } else {
      setInput({
        ...input,
        [event.target.name]: event.target.value,
      });
    }

    if (event.target.name === "genres") {
      if (input.genres.includes(event.target.value)) return;
      setInput({
        ...input,
        [event.target.name]: [...input[event.target.name], event.target.value],
      });
    } else {
      setInput({
        ...input,
        [event.target.name]: event.target.value,
      });
    }

    validate(
      {
        ...input,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postGame(input));
  };
  return (
    <div className={style.Main_Contaner_Form}>
      <a className={style.btnHome} onClick={() => navigate("/home")}>
        <img src={img} title="Home" />
      </a>
      <div className={style.form_container}>
        <h2>Create a game</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label>Name</label>
            <input value={input.name} name="name" onChange={handleChange} />
            <br />
            <span>{error.name}</span>
          </div>
          <div className={style.div_container}>
            <label>Description</label>
            <textarea
              value={input.description}
              name="description"
              onChange={handleChange}
            ></textarea>
            <br />
            <span>{error.description}</span>
          </div>

          <div className={style.numeric_fields}>
            <div className={style.date_field}>
              <div className={style.date_container}>
                <label>Released(DD-MM-YY)</label>
                <input
                  className={style.inpuprating}
                  value={input.released}
                  onChange={handleChange}
                  placeholder="day-month-year"
                  type="text"
                  name="released"
                />
              </div>
            </div>

            <div className={style.rating_field}>
              <label>Rating(4.50)</label>
              <input
                className={style.inpuprating}
                value={input.rating}
                name="rating"
                type="number"
                placeholder="0.00"
                onChange={handleChange}
              />
            </div>
          </div>
          <span>{error.rating}</span>
          <div className={style.div_container}>
            <label>Genres(at least 1)</label>
            <select
              name="genres"
              onChange={handleChange}
              className={style.selection_container}
            >
              {genress?.map((g) => (
                <option
                  value={g.name}
                  className={`${style.platform_btn} ${
                    genress.id === g.id ? style.active_genre : null
                  }`}
                  id={g.id}
                  key={g.id}
                >
                  {g.name}
                </option>
              ))}
            </select>
          </div>
          <div className={style.Genres_seleted}>
            {
            input.genres.map((g)=> <div  key={g} id={g}>
            <label >{g}</label> <button name='genres' key={g} id={g} onClick={handleDelete}>X</button>
            </div>)
            }
          </div>
          <div className={style.div_container}>
            <label>Platforms(max 4, at least 1)</label>
            <div className={style.platforms_container}>
              <button name="platforms" onClick={handleSelection} id="clear-all">
                Clear All
              </button>
              {platforms.map((p) => (
                <button
                  name="platforms"
                  className={
                    input.platforms[0] === p ||
                    input.platforms[1] === p ||
                    input.platforms[2] === p ||
                    input.platforms[3] === p
                      ? style.active_genre
                      : null
                  }
                  onClick={handleSelection}
                  id={p}
                  key={p}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className={style.div_container}>
            <label>Select an image (optional)</label>
            <input name="background_image" onChange={handleChange} />
          </div>
          <button disabled={disableButton()} type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
