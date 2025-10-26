interface DisplayStatsProps {
  stats: Array<{
    name: string,
    modifier?: number,
    stat?: number
  }>,
  onUpdate: (index: number, statInfo: any) => void
}

export default function DisplayStats({
  stats,
  onUpdate
}: DisplayStatsProps) {
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
            onChange={(e) => {onUpdate(index, e.target.value)}}
          ></input>
        </div>
      ))}
      </div>

    </div>
    
  )
}