import Pizza from "./Pizza";
import pizzaData from "../data/pizzadata"; // adjust the path as needed

export default function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numpizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numpizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}

      {/* <Pizza
        photoName="images/spinaci.jpg"
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, olive, basil"
        price={10}
      />
      <Pizza
        photoName="images/funghi.jpg"
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
      /> */}
    </main>
  );
}
