import { useContext } from "react";
import Context from "../Context";
import FiltroFavoritos from "../components/FiltroFavoritos";
import React from "react";
import {Container } from "react-bootstrap";

const Favoritos = () =>{
  return (
    <>
    <Container fluid>
        <Container className="my-2 text-center">
            <h1>Favoritos</h1>
        </Container>
        <FiltroFavoritos/>
    </Container>
    </>
  )
}
export default Favoritos
