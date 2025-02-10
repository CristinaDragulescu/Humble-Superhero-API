import axios from "axios";

const apiUrl = "http://localhost:3000/superhero";

export const superheroService = {
  async createSuperhero(superheroesListUpdated) {
    try {
      const response = await axios.post(apiUrl, superheroesListUpdated);
      return response.data;
    } catch (error) {
      console.error("Error creating superhero:");
      throw error;
    }
  },

  async getSortedSuperheroes() {
    try {
      const response = await axios.get(apiUrl);
      return response;
    } catch (error) {
      console.error("Error getting superhero");
      throw error;
    }
  },
};
