import { useState } from "react";

const Create = ()=>{

    const [input, setInput] = useState({
        name: "",
        description: "",
        released: "",
        rating:"",
        genres: "",
        platforms: "",
        background_image: ""
    })

    const [error, setError] = useState({
        name: "",
        description: "",
        released: "",
        rating:"",
        genres: "",
        platforms: "",
        background_image: ""
    })

    const validate=(input)=>{
        if(input.name.length < 4 && input.name.length !== 0){
            setError({...error, name:"Write a valid name (at least 4 characters)"})
            // console.log("Write a valid name (at least 4 characters)");
            return;
        }
        setError({...error, name:""})
        
    };

    const handleChange = (event)=>{
        
        setInput({
            ...input,
            [event.target.name]:event.target.value
        })

        validate({
            ...input,
            [event.target.name]:event.target.value
        })
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input value={input.value} name="name" onChange={handleChange} />
                    <br/><span>{error.name}</span>

                </div>
                <div>
                    <label>Description</label>
                    <input value={input.value} name="description" onChange={handleChange} />
                </div>
                <div>
                    <label>release date (DD-MM-YY)</label>
                    <input value={input.value} name="released" onChange={handleChange} />
                </div>
                <div>
                    <label>rating(e.g. 5.38)</label>
                    <input value={input.value} name="rating" onChange={handleChange} />
                </div>
                <div>
                    <label>genres(max 4, at least 1)</label>
                    <input value={input.value} name="genres" onChange={handleChange} />
                </div>
                <div>
                    <label>platforms(max 4, at least 1)</label>
                    <input value={input.value} name="platforms" onChange={handleChange} />
                </div>
                <div>
                    <label>Select an image (optional)</label>
                    <input value={input.value} name="background_image" onChange={handleChange} />
                </div>

                {error.name?null:<button>Create</button>}
                
            </form>
        </div>
    )
}

export default Create;