

const FormTextarea = ({
	name,
	label,
	value,
	formData,
	onChange,
	required=false,
	placeholder=""
}) => {

	return (

		<div className="flex flex-col gap-[.25rem]">
			<div className="flex justify-between">
				<label htmlFor={name} className="text-input font-medium" >
					{label}
					{required && <span className="text-primary-red"> * </span>}
				</label>
			</div>

			<div className={`flex border rounded-[.25rem] px-[.8rem] py-[.5rem]`}>
				<textarea className={`outline-none resize-none w-full`} name={name} id={name} required={required} 
				onChange={onChange} placeholder={placeholder}>
				</textarea>
			</div>
		</div>
	)

};

export default FormTextarea;