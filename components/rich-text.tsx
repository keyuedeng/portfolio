// Renders **bold** spans inside a single line of text
export function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*.*?\*\*)/g).map((part, j) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={j} className="font-medium text-ink">{part.slice(2, -2)}</strong>
        ) : (
          part
        ),
      )}
    </>
  )
}

// Renders the light markup used in project descriptions: blank-line paragraphs and **bold**
export function RichText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {text.split("\n\n").map((para, i) => (
        <p key={i} className="m-0">
          <Inline text={para} />
        </p>
      ))}
    </div>
  )
}
