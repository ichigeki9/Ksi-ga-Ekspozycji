import { CirclePlus, FileText, TriangleAlert } from "lucide-react";
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
	{
		lp: 2,
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
			<div className="w-full min-h-screen flex justify-start items-center flex-col p-6 bg-gray-50">
			<div className="w-full max-w-[1200px] flex flex-col items-center">
			
					<h1 className="text-blue-600 text-5xl font-bold mb-10">
						KSIĘGA EKSPOZYCJI ZAWODOWYCH
					</h1>
					{/* <div>div</div> */}
					<div className=" bg-amber-200 w-full mt-10 mb-8 rounded-2xl p-4 shadow-md">
						<div className="flex w-full items-start justify-start">
							<h2 className="text-2xl font-semibold mb-4 mr-4">
								INSTRUKCJA POSTĘPOWANIA W RAZIE EKSPOZYCJI
							</h2>
							<TriangleAlert width={30} height={30} color="#8C1627" />
						</div>
						<p className="mb-2 font-semibold text-xl">
							1. W razie ekspozycji zgłosić bezpośredniemu przełożonemu.
						</p>
						<p className="mb-2 font-semibold text-xl">
							2. Wypełnić, wydrukować i przekazać dla bezpośredniego
							przełożonego
							<span className="underline font-semibold"> formularz nr 1</span>
						</p>
						<p className="mb-2 font-semibold text-xl">
							3. Jeśli wymagana konsultacja w Białymstoku wypełnić{" "}
							<span className="underline ">formularz nr. 2 i nr. 3.</span>
						</p>
					</div>

					<button
						onClick={() => setVisibleForm(true)}
						className="w-full rounded-2xl p-4 py-6 text-white cursor-pointer bg-blue-600 hover:bg-blue-400 flex items-center justify-center gap-4 font-semibold text-2xl shadow-xl mb-4">
						DODAJ EKSPOZYCJE <CirclePlus />
					</button>
					<div className="w-full flex gap-10 mt-5">
						<button
							onClick={() => alert("Drukuje wniosek 1")}
							className="cursor-pointer w-full border-2 p-4 rounded-2xl hover:text-white hover:bg-blue-600 text-xl border-blue-600 text-blue-600 mb-4 font-semibold flex items-center justify-center gap-5 ">
							{" "}
							Formularz nr. 1
							<FileText />
						</button>
						<button
							onClick={() => alert("Drukuje wniosek 2")}
							className="cursor-pointer w-full border-2 p-4 rounded-2xl hover:text-white hover:bg-blue-600 text-xl border-blue-600 text-blue-600 mb-4 font-semibold flex items-center justify-center gap-5 ">
							{" "}
							Formularz nr. 2
							<FileText />
						</button>
						<button
							onClick={() => alert("Drukuje wniosek 3")}
							className="cursor-pointer w-full border-2 p-4 rounded-2xl hover:text-white hover:bg-blue-600 text-xl border-blue-600 text-blue-600 mb-4 font-semibold flex items-center justify-center gap-5 ">
							{" "}
							Formularz nr. 3
							<FileText />
						</button>
					</div>

					<div className="bg-gray-100 border w-full h-full flex flex-col items-center justify-center rounded-2xl shadow-2xl p-2 mt-6">
						<h2 className="mt-10 text-4xl font-semibold">LISTA EKSPOZYCJI </h2>
						<div className="w-full h-full flex items-start justify-start mt-10 p-4 rounded-2xl ">
							<ul className=" w-full flex items-start justify-start flex-col">
								<li className="w-full flex items-center justify-start gap-15 text-2xl border-b mb-2 p-2">
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
											key={item.lp}
											className="w-full flex items-center justify-start gap-15 text-2xl mb-2 ">
											<div className="w-full ">
												<p>{item.lp}.</p>
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
			</div>
		</div>
		</>
	);
}

export default App;
