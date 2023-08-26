import { ReactNode } from "react"

type DescriptionProps = {
  title: string
  content: ReactNode
}

const Description = ({
  title,
  content,
}: DescriptionProps) => {
  return (
    <div className="p-4 text-lg font-arabic max-w-xl px-4 mx-auto">
      <h1 className="text-primary text-3xl w-fit mx-auto mb-5">
        {title}
      </h1>
      {content}
    </div>
  )
}

export default Description
