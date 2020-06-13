import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../../firebase";
import Orden from "../UI/Ordenes";

const Ordenes = () => {
  const { firebase } = useContext(FirebaseContext);

  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    const obtenerOrdenes = () => {
      firebase.db
        .collection("ordenes")
        .where("completado", "==", false)
        .onSnapshot(handleSnapshot);
    };
    obtenerOrdenes();
  }, []);

  function handleSnapshot(snapshot) {
    const ordenes = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setOrdenes(ordenes);
  }

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Ordenes</h1>

      <div className="sm:flex sm:flex-wrap -mx-3">
        {ordenes.map((orden) => (
          <Orden key={orden.id} orden={orden} />
        ))}
      </div>
    </>
  );
};

export default Ordenes;
