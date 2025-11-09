interface DisplayInventoryProps {
  inventory: Array<{
    name: string,
    weight?: number
  }>,
}

export default function DisplayInventory({
  inventory,
}: DisplayInventoryProps) {
  
  
  return (
    <div>
      {inventory.map(({name}: {name: string}, index: number) => (
            <div>
              <div>
                <b>{name}:</b> {inventory[index].weight} pounds
              </div>
            </div>
          ))}
    </div>
  )
}