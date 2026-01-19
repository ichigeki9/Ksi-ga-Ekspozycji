import { CircleArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";

export default function NewItemForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
    props.setData(prevVal => [...prevVal, data])
     alert('Wyslano ekspozycje');
	};

	return (
		<div className="w-full h-screen absolute bg-gray-500 flex items-center justify-start flex-col p-6">
			<div className="mb-10 mt-4 flex justify-center items-center w-full ">
				<button
					className=" absolute w-10  left-20 cursor-pointer"
					onClick={() => props.setVisibleForm(false)}>
					<CircleArrowLeft color="#fff" width={35} height={35} />
				</button>
				<h1 className="text-white text-4xl font-semibold">
					FORMULARZ EKSPOZYCJI
				</h1>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-start justify-start w-full border-2 p-4 border-amber-200">
				<div className="flex flex-col gap-2 mb-3">
					<label>data i godzina zdarzenia</label>
					<input
						type="datetime-local"
						className="border-2"
						{...register("date")}
					/>
				</div>

				<div className="flex flex-col gap-2 mb-3">
					<label>Imie i nazwisko osoby poszkodowanej</label>
					<input
						className="border-2"
						{...register("personelName", {
							required: "Pole wymagane",
							minLength: { value: 3, message: "Min. 3 znaki" },
							maxLength: { value: 20, message: "Max. 20 znaków" },
						})}
					/>
					{errors.personelName && (
						<p className="text-red-500 text-sm">{errors.personelName.message}</p>
					)}
				</div>
				<div className="flex flex-col gap-2 mb-3">
					<label>Imie i nazwisko osoby pacjenta</label>
					<input
						className="border-2"
						{...register("patientName", {
							required: "Pole wymagane",
							minLength: { value: 3, message: "Min. 3 znaki" },
							maxLength: { value: 20, message: "Max. 20 znaków" },
						})}
					/>
					{errors.patientName && (
						<p className="text-red-500 text-sm">{errors.patientName.message}</p>
					)}
				</div>
				<div className="flex flex-col gap-2 mb-3">
					<label>wywiad medyczny pacjenta</label>
					<textarea
						className="border-2"
						{...register("medicalReport", {
							required: "Pole wymagane",
							minLength: { value: 3, message: "Min. 3 znaki" },
							maxLength: { value: 20, message: "Max. 20 znaków" },
						})}
					/>
					{errors.medicalReport && (
						<p className="text-red-500 text-sm">{errors.medicalReport.message}</p>
					)}
				</div>
				<div className="flex flex-col gap-2 mb-3">
					<label>
						dokładny opis zdarzenia , miejsce , rodzaj ekspozycji, sytuacja
					</label>
					<textarea
						className="border-2"
						{...register("eventDescription", {
							required: "Pole wymagane",
							minLength: { value: 3, message: "Min. 3 znaki" },
							maxLength: { value: 20, message: "Max. 20 znaków" },
						})}
					/>
					{errors.eventDescription && (
						<p className="text-red-500 text-sm">{errors.eventDescription.message}</p>
					)}
				</div>

				<div className="flex flex-col gap-2 mb-3">
					<label>opis czynności wykonanych po ekspozycji</label>
					<textarea
						className="border-2"
						{...register("actionsAfterExposure", {
							required: "Pole wymagane",
							minLength: { value: 3, message: "Min. 3 znaki" },
							maxLength: { value: 20, message: "Max. 20 znaków" },
						})}
					/>
					{errors.actionsAfterExposure && (
						<p className="text-red-500 text-sm">{errors.actionsAfterExposure.message}</p>
					)}
				</div>

				<button className="cursor-pointer w-full border-2 py-2 rounded-2xl bg-blue-300 hover:bg-blue-500 text-xl ">Wyślij</button>
			</form>

     
		</div>
	);
}
