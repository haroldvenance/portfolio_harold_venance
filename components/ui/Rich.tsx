export function Rich({ parts, as: Tag = "strong" }: { parts: string[]; as?: "strong" | "em" }) {
  return <>{parts.map((p, i) => (i % 2 === 1 ? <Tag key={i}>{p}</Tag> : <span key={i}>{p}</span>))}</>;
}