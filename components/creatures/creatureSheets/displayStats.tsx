export default function DisplayStats({stats}: {stats: Array<{
  name: string,
  modifier?: number,
  stat?: number
}>
}) {
  return (
    <div>
      <label htmlFor="stats">
        <h2 className="center" >
          Stats
        </h2>
      </label>
      <div className="statGrid">
        {stats.map(({name}: {name: string}, index: number) => (
        <div key={index} className="eachStatGrid">
          <div  className="center">
            {name}
          </div>
          <input
            className="number one center"
            id='stats'
            value={stats[index].modifier}
          ></input>
        </div>
      ))}
      </div>

    </div>
    
  )
}