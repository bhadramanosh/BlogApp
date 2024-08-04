import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  useEffect(() => {
    if (id) {
      
      axios
        .get(`http://localhost:3001/get/${id}`)
        .then((res) => {
          setInputs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in", inputs);
  };

  const addData = () => {
    console.log("clicked");
    axios
      .post("http://localhost:3001/add", inputs)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Title"
              onChange={inputHandler}
              name="title"
              value={inputs.title}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Content"
              onChange={inputHandler}
              name="content"
              value={inputs.content}
              multiline
              rows={4}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="Image URL"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
              fullWidth
            />

            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;

