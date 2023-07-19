export default function Input({ monType, monHolder, maValeur, error }) {
	return (
		<>
			<input
				style={{
					padding: "1em",
					border: "none",
					borderRadius: "0.5em",
          width:"100%"
				}}
				type={monType}
				placeholder={monHolder}
				value={maValeur}
			/>
      <p>{error ? error : ''}</p>
		</>
	);
}
