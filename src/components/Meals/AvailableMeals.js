import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-ba40f-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong")
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false)
    };

    fetchMeals().catch(err => {
      setIsLoading(false)
      setError(err.message)
    });

  }, []);

  if (isLoading) {
    return <section className={classes.mealsLoading}>
      <p>Loading ...</p>
    </section>
  }

  if (error) {
    return <section className={classes.mealsError}>
      <p>{error}</p>
    </section>
  }

  const content = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      price={meal.price}
      name={meal.name}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
