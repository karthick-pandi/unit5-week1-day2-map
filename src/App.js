import "./styles.css";

export default function App() {
  const arr1 = ["Android", "Blckberry", "iPhone", "Windows phone"];
  const arr2 = ["Sumsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <h2>Mobile Operationg System</h2>
      {arr1.map((e) => (
        <li>{e}</li>
      ))}
      <h2>Mobile Manufacture</h2>
      {arr2.map((e) => (
        <li className={`${e == "Apple" ? "square" : null}`}>{e}</li>
      ))}
    </div>
  );
}
