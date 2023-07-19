
export default function Liste({ tab }) {
  return (
    <ul style={{ border:"1px solid white" }}>
      {
        tab.map((element, position)=>{
          return <li key={position}>{element}</li>
        })
      }
    </ul>
  )
}
