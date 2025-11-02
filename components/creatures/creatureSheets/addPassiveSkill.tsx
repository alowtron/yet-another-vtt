interface addPassiveSkillProps {
  show: boolean,
  onShowUpdate: (newShow: boolean) => void,
  onUpdate: (skill: object) => void
}

const passiveSkills = [
  {
    name: 'Extra Health',
    effect: '+1 hit point per level.'
  },
  {
    name: 'Fast Movement',
    effect: 'Move speed is increased by 5 feet.'
  },
  {
    name: 'Tough Skin',
    effect: '+1 physical and magical damage resist.'
  }
]

function AddPassiveSkill() {
  return (
    <div>
      
    </div>
  )
}