import { useState } from "react"

interface DisplayInventoryProps {
  inventory: Array<{
    name: string,
    weight?: number
  }>,
  onAdd: (item: object) => void
}

export default function DisplayInventory({
  inventory,
  onAdd
}: DisplayInventoryProps) {
  const [showAddCustom, setShowAddCustom] = useState(false)

  async function addCustomItem(formData: FormData) {
    const name = formData.get('name')
    const weight = formData.get('weight')
    console.log('formssss' + name + weight)
    if (name && weight) {
      onAdd({name: name, weight: weight})
    }
    
    setShowAddCustom(false)
  } 
  
  return (
    <div>
      {inventory.map(({name}: {name: string}, index: number) => (
        <div key={index}>
          <div>
            <b>{name}:</b> {inventory[index].weight} pounds
          </div>
        </div>
      ))}
      {showAddCustom ? (
        <div>
          <form action={addCustomItem}>
            Name:<input name="name" type="text"></input>
            <br></br>
            Weight:<input name="weight" type="number"></input>
            <br></br>
            <button type='submit'>Add Item</button>
          </form>
        </div>
      ) : (
        <div>
          <button onClick={() => setShowAddCustom(true)}>Add Custom Item</button>
        </div>
      )}
    </div>
  )
}