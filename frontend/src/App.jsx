import { CirclePlus, FileText, TriangleAlert } from "lucide-react";
import NewItemForm from "./components/NewItemForm";
import { useEffect, useState } from "react";

const exp = [];

function App() {
	const [visibleForm, setVisibleForm] = useState(false);
	const [data, setData] = useState(exp);
	const [visibleData, setVisibleData] = useState(false);
	const [lastItem, setLastItem] = useState(null);
	const [loading, setLoading] = useState(false);

	function showFirstLetter(word) {
		const firstL = word[0];
		const restLength = word.length - 1;

		return firstL + "•".repeat(restLength);
	}

	function convertDataTime(dateTime) {
		const date = dateTime.split("T");
		const time = date[1].slice(0, 5);
		console.log(date[0]);
		console.log(time);
		return `${date[0]}, ${time}`;
	}

	async function fetchExposureList() {
		setLoading(true);
		const response = await fetch("http://127.0.0.1:8000/api/get/");
		const data = await response.json();
		setData(data);
		setLoading(false);
	}

	useEffect(() => {
		fetchExposureList();
	}, []);

	useEffect(() => {
		if (!visibleData) return;

		const id = setTimeout(() => {
			setVisibleData(false);
			setLastItem(null);
		}, 10000);

		return () => clearTimeout(id);
	}, [visibleData]);

	console.log("dupaaaa", data, lastItem);

	return (
		<>
			{visibleForm && (
				<NewItemForm
					setVisibleForm={setVisibleForm}
					setData={setData}
					setLastItem={setLastItem}
					setVisibleData={setVisibleData}
					fetchExposureList={fetchExposureList}
				/>
			)}
			<div className="w-full min-h-screen flex justify-start items-center flex-col p-6 bg-gray-50">
				<div className="w-full max-w-[1200px] flex flex-col items-center">
					<h1 className="text-blue-600 text-6xl font-bold mb-10 text-center">
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
							1. Niezwłocznie zgłoś ekspozycję bezpośredniemu przełożonemu.
						</p>
						<p className="mb-2 font-semibold text-xl">
							2. Zarejestruj zdarzenie w Księdze Ekspozycji Zawodowych -
							przycisk{" "}
							<span className="underline font-semibold">
								{" "}
								"DODAJ EKSPOZYCJE"
							</span>
						</p>
						<p className="mb-2 font-semibold text-xl">
							3. Wypełnij i wydrukuj
							<span className="underline font-semibold"> formularz nr 1</span>
						</p>
						<p className="mb-2 font-semibold text-xl">
							4. Wypełnij i wydrukuj Formularz nr 2 i zgłoś się do laboratorium
							na badania.
							<span className="underline font-semibold"> formularz nr 2</span>
						</p>

						<p className="mb-2 font-semibold text-xl">
							5. Jeżeli wymagana jest konsultacja lub leczenie poekspozycyjne w
							Białymstoku to wypełnij{" "}
							<span className="underline ">formularz nr. 3, 4 i 5</span>
						</p>
					</div>

					<button
						onClick={() => setVisibleForm(true)}
						className="w-full rounded-2xl p-4 py-6 text-white cursor-pointer bg-blue-600 hover:bg-blue-400 flex items-center justify-center gap-4 font-semibold text-2xl shadow-xl mb-4">
						DODAJ EKSPOZYCJE <CirclePlus />
					</button>
					<div className="w-full flex gap-10 mt-5">
						<a
							href={`${import.meta.env.BASE_URL}file1.pdf`}
							download="Formularz_1.pdf"
							className="cursor-pointer w-full border-2 p-4 rounded-2xl hover:text-white hover:bg-blue-600 text-lg border-blue-600 text-blue-600 mb-4 font-semibold flex items-center justify-center gap-5 ">
							Formularz nr. 1
							<FileText />
						</a>
						<a
							href={`${import.meta.env.BASE_URL}file2.pdf`}
							download="Formularz_2.pdf"
							className="cursor-pointer w-full border-2 p-4 rounded-2xl hover:text-white hover:bg-blue-600 text-lg border-blue-600 text-blue-600 mb-4 font-semibold flex items-center justify-center gap-5 ">
							Formularz nr. 2
							<FileText />
						</a>
						<a
							href={`${import.meta.env.BASE_URL}file3.pdf`}
							download="Formularz_3.pdf"
							className="cursor-pointer w-full border-2 p-4 rounded-2xl hover:text-white hover:bg-blue-600 text-lg border-blue-600 text-blue-600 mb-4 font-semibold flex items-center justify-center gap-5 ">
							Formularz nr. 3
							<FileText />
						</a>
						<a
							href={`${import.meta.env.BASE_URL}file4.pdf`}
							download="Formularz_4.pdf"
							className="cursor-pointer w-full border-2 p-4 rounded-2xl hover:text-white hover:bg-blue-600 text-lg border-blue-600 text-blue-600 mb-4 font-semibold flex items-center justify-center gap-5 ">
							Formularz nr. 4
							<FileText />
						</a>
						<a
							href={`${import.meta.env.BASE_URL}file5.pdf`}
							download="Formularz_5.pdf"
							className="cursor-pointer w-full border-2 p-4 rounded-2xl hover:text-white hover:bg-blue-600 text-lg border-blue-600 text-blue-600 mb-4 font-semibold flex items-center justify-center gap-5 ">
							Formularz nr. 5
							<FileText />
						</a>
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
								{data.length != 0 ? (
									data.map((item, index) => (
										<li
											key={item.id}
											className="w-full flex items-center justify-start gap-15 text-2xl mb-2 ">
											<div className="w-full ">
												<p>{index + 1}.</p>
											</div>
											<div className="w-full ">
												<p>{convertDataTime(item.date)}</p>
											</div>
											<div className="w-full ">
												{visibleData && item.id === lastItem ? (
													<p>{item.personel_name}</p>
												) : (
													<p>{showFirstLetter(item.personel_name)}</p>
												)}
											</div>
											<div className="w-full ">
												{visibleData && item.id === lastItem ? (
													<p>{item.patient_name}</p>
												) : (
													<p>{showFirstLetter(item.patient_name)}</p>
												)}
											</div>
										</li>
									))
								) : loading ? (
									<div className="w-full text-center font-semibold text-2xl">
										<p>Ładowanie....</p>
									</div>
								) : (
									<div className="w-full text-center font-semibold text-2xl">
										<p>Brak pozycji do wyświetlenia </p>
									</div>
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
