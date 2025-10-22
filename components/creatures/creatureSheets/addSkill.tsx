interface AddSkillProps {
  onUpdate: (skill: object) => void
}

const skills = [
  {
    name: 'Melee Attack',
    actions: 1,
    effect: 'Damage: 1d6'
  }, 
  {
    name: 'Ranged Attack',
    actions: 2,
    effect: 'Damage: 1d6'
  },
  {
    name: 'Coat With Fast Acting Poison',
    actions: 1,
    effect: 'coat target weapon or projectile with poison, next attack made with it in the next minute deals an extra 1d6 damage'
  },
]

export default function AddSkill({
  onUpdate
}: AddSkillProps){

  function addSkill(index: number) {
    onUpdate(skills[index])
  }
  return (
    <div>
      {skills.map(({name, actions, effect}, index) => (
        <div key={index}>
          Name: {name}
          <br></br>
          Actions: {actions}
          <br></br>
          Effect: {effect}
          {index != skills.length - 1 ? (
            <div>
              <br></br>
            </div>
          ) : (
            <div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}