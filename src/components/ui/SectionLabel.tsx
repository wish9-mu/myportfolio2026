interface Props {
  number: string
  label: string
  className?: string
}

export default function SectionLabel({ number, label, className = '' }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="section-num">{number}</span>
      <span className="section-num opacity-30">/</span>
      <span className="section-num">{label}</span>
    </div>
  )
}
