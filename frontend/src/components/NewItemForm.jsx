import { CircleArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";

export default function NewItemForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	async function sendExposureList(body) {
		const response = await fetch("http://127.0.0.1:8000/api/create_exposure/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		const data = await response.json();
		return data;
	}

	const onSubmit = async (data) => {
		const saved = await sendExposureList(data);

		alert("Wyslano zgłoszenie ekspozycji");
		props.fetchExposureList();
		props.setLastItem(saved.id);
		props.setVisibleData(true);
		props.setVisibleForm(false);
	};

	return (
		<div className="w-full  absolute bg-gray-50  flex items-center justify-start flex-col ">
			<div className="mb-10 mt-4 flex justify-center items-center w-full  py-5">
				<button
					className=" absolute w-10  left-20 cursor-pointer "
					onClick={() => {
						props.setVisibleForm(false);
					}}>
					<CircleArrowLeft color="#155dfc" width={50} height={50} />
				</button>
				{/* <div cl> */}
				<h1 className=" text-blue-600 text-5xl font-bold">
					FORMULARZ EKSPOZYCJI
				</h1>
				{/* </div> */}
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-start justify-start max-w-[1200px] p-8 ">
				{/* POSZKODOWANY */}

				<div className="bg-gray-100 border w-full flex flex-col justify-start items-start shadow-md rounded-2xl p-4 mb-8">
					<h2 className="font-semibold text-2xl mb-2">Dane Poszkodowanego</h2>
					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">Stanowisko</label>
						<input
							placeholder="Np. Pielęgniarka"
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("position", {
								required: "Pole wymagane",
								minLength: { value: 2, message: "Min. 2 znaki" },
								maxLength: { value: 100, message: "Max. 100 znaków" },
							})}
						/>
						{errors.position && (
							<p className="text-red-500 text-sm">{errors.position.message}</p>
						)}
					</div>
					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">Oddział / Komórka Organizacyjna</label>
						<input
							placeholder="Np. Kardiologia"
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("ward", {
								required: "Pole wymagane",
								minLength: { value: 2, message: "Min. 2 znaki" },
								maxLength: { value: 100, message: "Max. 100 znaków" },
							})}
						/>
						{errors.ward && (
							<p className="text-red-500 text-sm">{errors.ward.message}</p>
						)}
					</div>

					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">
							Imie i nazwisko osoby poszkodowanej
						</label>
						<input
							placeholder="Np. Jan Nowak"
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("personel_name", {
								required: "Pole wymagane",
								minLength: { value: 2, message: "Min. 2 znaki" },
								maxLength: { value: 100, message: "Max. 100 znaków" },
							})}
						/>
						{errors.personel_name && (
							<p className="text-red-500 text-sm">
								{errors.personel_name.message}
							</p>
						)}
					</div>
				</div>

				{/* DANE PACJENTA */}

				<div className="bg-gray-100 border w-full flex flex-col justify-start items-start shadow-md rounded-2xl p-4 mb-8">
					<h2 className="font-semibold text-2xl mb-2">Dane Pacjenta</h2>

					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">Imie i nazwisko osoby pacjenta</label>
						<input
							placeholder="Np. Jan Nowak"
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("patient_name", {
								required: "Pole wymagane",
								minLength: { value: 3, message: "Min. 3 znaki" },
								maxLength: { value: 100, message: "Max. 100 znaków" },
							})}
						/>
						{errors.patient_name && (
							<p className="text-red-500 text-sm">
								{errors.patient_name.message}
							</p>
						)}
					</div>
					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">Wywiad medyczny pacjenta</label>
						<textarea
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("medical_report", {
								required: "Pole wymagane",
								minLength: { value: 3, message: "Min. 3 znaki" },
								maxLength: { value: 1000, message: "Max. 1000 znaków" },
							})}
						/>
						{errors.medical_report && (
							<p className="text-red-500 text-sm">
								{errors.medical_report.message}
							</p>
						)}
					</div>
				</div>

				{/* ZDARZENIE */}
				<div className="bg-gray-100 border w-full flex flex-col justify-start items-start shadow-md rounded-2xl p-4 mb-8">
					<h2 className="font-semibold text-2xl mb-2">Dane Zdarzenia</h2>
					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">Data i godzina zdarzenia</label>
						<input
							type="datetime-local"
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("date", {
								required: "Pole wymagane",
							})}
						/>
						{errors.date && (
							<p className="text-red-500 text-sm">{errors.date.message}</p>
						)}
					</div>

					{/* Rodzaj ekspozycji (np. zakłucie, skaleczenie, kontakt błon śluzowych, aerozol)  */}
					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">
							Rodzaj ekspozycji (np. zakłucie, skaleczenie, kontakt błon
							śluzowych, aerozol)
						</label>
						<input
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("type_of_exposure", {
								required: "Pole wymagane",
								minLength: { value: 3, message: "Min. 3 znaki" },
								maxLength: { value: 100, message: "Max. 100 znaków" },
							})}
						/>
						{errors.type_of_exposure && (
							<p className="text-red-500 text-sm">
								{errors.type_of_exposure.message}
							</p>
						)}
					</div>
					{/* Rodzaj materiału biologicznego (krew, płyn ustrojowy) */}
					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">
							Rodzaj materiału biologicznego (krew, płyn ustrojowy)
						</label>
						<input
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("type_of_material", {
								required: "Pole wymagane",
								minLength: { value: 3, message: "Min. 3 znaki" },
								maxLength: { value: 100, message: "Max. 100 znaków" },
							})}
						/>
						{errors.type_of_material && (
							<p className="text-red-500 text-sm">
								{errors.type_of_material.message}
							</p>
						)}
					</div>

					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">
							Dokładny opis zdarzenia , miejsce , rodzaj ekspozycji, sytuacja
						</label>
						<textarea
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("event_description", {
								required: "Pole wymagane",
								minLength: { value: 3, message: "Min. 3 znaki" },
								maxLength: { value: 1000, message: "Max. 1000 znaków" },
							})}
						/>
						{errors.event_description && (
							<p className="text-red-500 text-sm">
								{errors.event_description.message}
							</p>
						)}
					</div>

					{/* 6. Znany / nieznany status źródła */}

					<div className="flex flex-col gap-2 mb-3 w-full">
						<label className="text-xl">
							Opis czynności wykonanych po ekspozycji
						</label>
						<textarea
							className="border p-2 rounded-2xl bg-white shadow-xs"
							{...register("actions_after_exposure", {
								required: "Pole wymagane",
								minLength: { value: 3, message: "Min. 3 znaki" },
								maxLength: { value: 1000, message: "Max. 1000 znaków" },
							})}
						/>
						{errors.actionsAfterExposure && (
							<p className="text-red-500 text-sm">
								{errors.actionsAfterExposure.message}
							</p>
						)}
					</div>
				</div>

				<button className="cursor-pointer w-full border-2 py-5 rounded-2xl hover:text-white hover:bg-blue-600 text-2xl border-blue-600 text-blue-600 mb-4 font-semibold mt-5 shadow-md ">
					Wyślij
				</button>
			</form>
		</div>
	);
}
