interface CreatureNameProps {
  creatureName: string
}

export default function CreatureName({
  creatureName,
}: CreatureNameProps) {
  return (
    <div>
      Name: {creatureName}
    </div>
  )
}