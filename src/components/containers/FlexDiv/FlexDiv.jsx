// HOC: HIGH Order Component
export default function FlexDiv({
	children,
	direction = "row",
	justify = "center",
	align = "center",
	gap = "0",
}) {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				width: "100%",
				padding: "1em",
				boxSizing: "border-box",
				flexDirection: direction,
				justifyContent: justify,
				alignItems: align,
				gap: gap,
			}}
		>
			{children}
		</div>
	);
}
