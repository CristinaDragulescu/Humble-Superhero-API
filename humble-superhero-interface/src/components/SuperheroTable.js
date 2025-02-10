import React, { useEffect, useState } from "react";
import { superheroService } from "../services/superheroService";

function SuperheroTable({ refreshSignal }) {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    async function fetchSuperheroes() {
      const response = await superheroService.getSortedSuperheroes();
      setSuperheroes(response.data);
    }
    fetchSuperheroes();
  }, [refreshSignal]);  //fetch superheroes whenever refreshSignal changes

  return (
    <div className="container mt-2">
      <h2 className="text-center mb-4">Superheroes list by humility score</h2>
      <table className="table table-hover table-bordered text-center">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Superpower</th>
            <th>Humilty Score</th>
          </tr>
        </thead>
        <tbody>
          {superheroes.map((val, key) => (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.superpower}</td>
              <td>{val.humilityScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SuperheroTable;
