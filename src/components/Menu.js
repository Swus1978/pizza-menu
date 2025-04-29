import Pizza from "./Pizza";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
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
      />
    </main>
  );
}
