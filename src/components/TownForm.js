import { useState } from "react";

function TownForm() {
    const [town, setTown] = useState("");
    const [population, setPopulation] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Місто: " + town + "\nНаселення: " + population);
        console.log("Місто:", town);
        console.log("Населення:", population);
    };
    return (
        <div>
            <h2>Введіть інформацію про місто</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Назва міста:
                    <input
                        type="text"
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                    />
                </div>
                <div>
                    Населення:
                    <input
                        type="number"
                        value={population}
                        onChange={(e) => setPopulation(e.target.value)}
                    />
                </div>
                <button type="submit">Відправити</button>
            </form>
        </div>
    );
}

export default TownForm;