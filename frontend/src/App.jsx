import { CirclePlus } from "lucide-react";
import NewItemForm from "./components/NewItemForm";
import { useState } from "react";

const exp = [
	{
		lp: 1,
		date: "10-10-2025",
		personelName: "Patryk Karpiński",
		patientName: "Mirek Kowalski",
		medicalReport: "qqqq",
		eventDescription: "wwww",
		actionsAfterExposure: "qwqwqw",
	},
];

function App() {
	const [visibleForm, setVisibleForm] = useState(false);
	const [data, setData] = useState(exp);

	function showFirstLetter(word) {
		const firstL = word[0];
		const restLength = word.length - 1;

		return firstL + "•".repeat(restLength);
	}

	// showFirstLetter("dupa")

	return (
		<>
			{visibleForm && (
				<NewItemForm setVisibleForm={setVisibleForm} setData={setData} />
			)}
			<div className="w-full h-screen  flex justify-start items-center flex-col p-6 ">
				<h1 className="text-black text-4xl font-semibold mb-10">
					KSIĘGA EKSPOZYCJI ZAWODOWYCH
				</h1>
				<div className="border-2 bg-gray-400 w-full mt-10 text-white rounded-2xl p-4 mb-4">
					<h2 className="text-2xl font-semibold mb-4">
						INSTRUKCJA POSTĘPOWANIA W RAZIE EKSPOZYCJI
					</h2>
					<p className="mb-2 font-semibold">
						1. W RAZIE EKSPOZYCJI DZWONIĆ NA KARETKĘ
					</p>
					<p className="mb-2 font-semibold">
						2. Wypełnić formularz dostępny poniżej
					</p>
					<p className="mb-2 font-semibold">
						3. Wydrukowac oraz wypełnić wniosek nr 1, 2 ,3{" "}
					</p>
				</div>

				<button
					onClick={() => setVisibleForm(true)}
					className="w-full border-2 rounded-2xl p-4 cursor-pointer bg-blue-300 hover:bg-blue-500 flex items-center justify-center gap-4 font-semibold text-xl">
					DODAJ EKSPOZYCJE <CirclePlus />
				</button>
				<div className="w-full  mt-5">
					<button
						onClick={() => alert("Drukuje wniosek 1")}
						className="cursor-pointer w-full border-2 py-2 rounded-2xl bg-gray-400 hover:bg-blue-500 text-xl  mb-2">
						{" "}
						Wniosek 1
					</button>
					<button
						onClick={() => alert("Drukuje wniosek 2")}
						className="cursor-pointer w-full border-2 py-2 rounded-2xl bg-gray-400 hover:bg-blue-500 text-xl  mb-2">
						{" "}
						Wniosek 2
					</button>
					<button
						onClick={() => alert("Drukuje wniosek 3")}
						className="cursor-pointer w-full border-2 py-2 rounded-2xl bg-gray-400 hover:bg-blue-500 text-xl  mb-2">
						{" "}
						Wniosek 3
					</button>
				</div>
				<div className="w-full h-full flex items-start justify-start  border-2 mt-10 p-4">
					<ul className=" flex items-start justify-start flex-col ">
						<li className="w-full flex items-center justify-start gap-15 text-2xl border-b mb-2">
							<div className="w-full ">
								<p>Lp.</p>
							</div>
							<div className="w-full ">
								<p>Data Ekspozycji</p>
							</div>
							<div className="w-full ">
								<p>Imię i nazwisko pracownika</p>
							</div>
							<div className="w-full ">
								<p>Imie i nazwisko pacjenta</p>
							</div>
						</li>
						{data.length > 0 ? (
							data.map((item) => (
								<li
									key={item.id}
									className="w-full flex items-center justify-start gap-15 text-2xl mb-2 ">
									<div className="w-full ">
										<p>{item.id}.</p>
									</div>
									<div className="w-full ">
										<p>{item.date}</p>
									</div>
									<div className="w-full ">
										<p>{showFirstLetter(item.personelName)}</p>
									</div>
									<div className="w-full ">
										<p>{showFirstLetter(item.patientName)}</p>
									</div>
								</li>
							))
						) : (
							<p>Brak </p>
						)}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
