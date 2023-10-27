import axios from "axios";

const searchReipes = async (args) => {
  const response = await axios.get(
    "https://api.spoonacular.com/recipes/complexSearch",
    {
      headers: {
        "x-api-key": "a4f970f159a34b09be2d1de5335fdd4d",
      },

      params: {
        query: args.term,
        cusisine: args.cusisine,
        addRecipeInformation: true,
      },
    }
  );

  return response.data.results;
};
export default searchReipes;